import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {CartForm} from '@shopify/hydrogen';
import {json} from '@shopify/remix-oxygen';
import {CartMain} from '~/components/Cart';
import {useRootLoaderData} from '~/root';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: `Hydrogen | Cart`}];
};

/**
 * @param {ActionFunctionArgs}
 */
export async function action({request, context}) {
  const {session, cart} = context;

  const [formData, customerAccessToken] = await Promise.all([
    request.formData(),
    session.get('customerAccessToken'),
  ]);

  const {action, inputs} = CartForm.getFormInput(formData);

  if (!action) {
    throw new Error('No action provided');
  }

  let status = 200;
  let result;

  switch (action) {
    case CartForm.ACTIONS.LinesAdd:
      result = await cart.addLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesUpdate:
      result = await cart.updateLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesRemove:
      result = await cart.removeLines(inputs.lineIds);
      break;
    case CartForm.ACTIONS.DiscountCodesUpdate: {
      const formDiscountCode = inputs.discountCode;

      // User inputted discount code
      const discountCodes = formDiscountCode ? [formDiscountCode] : [];

      // Combine discount codes already applied on cart
      discountCodes.push(...inputs.discountCodes);

      result = await cart.updateDiscountCodes(discountCodes);
      break;
    }
    case CartForm.ACTIONS.BuyerIdentityUpdate: {
      result = await cart.updateBuyerIdentity({
        ...inputs.buyerIdentity,
        customerAccessToken: customerAccessToken?.accessToken,
      });
      break;
    }
    default:
      throw new Error(`${action} cart action is not defined`);
  }

  const cartId = result.cart.id;
  const headers = cart.setCartId(result.cart.id);
  const {cart: cartResult, errors} = result;

  const redirectTo = formData.get('redirectTo') ?? null;
  if (typeof redirectTo === 'string') {
    status = 303;
    headers.set('Location', redirectTo);
  }

  return json(
    {
      cart: cartResult,
      errors,
      analytics: {
        cartId,
      },
    },
    {status, headers},
  );
}

export default function Cart() {
  const rootData = useRootLoaderData();
  const cartPromise = rootData.cart;

  return (
    <div className="cart m-8">
      <h1 style={{marginLeft: "auto", marginRight: "auto"}}>Cart</h1>
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await
          resolve={cartPromise}
          errorElement={<div>An error occurred</div>}
        >
          {(cart) => {
            return <CartMain layout="page" cart={cart} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}

/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/hydrogen').CartQueryData} CartQueryData */
/** @typedef {import('@shopify/remix-oxygen').ActionFunctionArgs} ActionFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof action>} ActionReturnData */
