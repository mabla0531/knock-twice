import {CartForm, Image, Money} from '@shopify/hydrogen';
import {NavLink} from '@remix-run/react';
import {Link} from '@remix-run/react';
import {useVariantUrl} from 'src/utils';

export function CartMain({layout, cart}) {
  return (
    <div class="flex justify-center p-4 gap-2 w-full h-full">
      {cart?.lines?.nodes?.length > 0 ? (
        <CartDetails cart={cart} />
      ) : (
        <CartEmpty layout={layout} />
      )}
    </div>
  );
}

function CartDetails({layout, cart}) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  return (
    <div>
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}

function CartLines({lines, layout}) {
  if (!lines) return null;

  return (
    <div aria-labelledby="cart-lines">
      <ul>
        {lines.nodes.map((line) => (
          <CartLineItem key={line.id} line={line} layout={layout} />
        ))}
      </ul>
    </div>
  );
}

function CartLineItem({layout, line}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);

  return (
    <div class="card bg-base-200 p-2 shadow-lg">
      <div key={id} class="flex gap-2 p-2">
        {image && (
          <img class="skeleton h-full rounded-md" src={image.url + "&width=100&height=100"}/>
        )}

        <div>
          <strong>{product.title}</strong>
          <div>
            <CartLinePrice line={line} as="span" />
          </div>
          <ul>
            {selectedOptions.map((option) => (
              <li key={option.name}>
                <small>
                  {option.name}: {option.value}
                </small>
              </li>
            ))}
          </ul>
          <CartLineRemoveButton lineIds={[line.id]} />
        </div>
      </div>
    </div>
  );
}

function CartCheckoutActions({checkoutUrl}) {
  if (!checkoutUrl) return null;

  return (
    <a href={checkoutUrl} target="_self">
      <button class="btn btn-primary w-full">Continue to Checkout</button>
    </a>
  );
}

export function CartSummary({cost, layout, children = null}) {
  return (
    <div aria-labelledby="cart-summary">
      <div class="my-8">
        Subtotal:&nbsp;
        {cost?.subtotalAmount?.amount ? (
          <Money data={cost?.subtotalAmount} />
        ) : (
          '-'
        )}
      </div>
      {children}
    </div>
  );
}

function CartLineRemoveButton({lineIds}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <button class="btn btn-base-100 h-auto p-2" type="submit">Remove</button>
    </CartForm>
  );
}

function CartLinePrice({line, priceType = 'regular', ...passthroughProps}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return <Money withoutTrailingZeros {...passthroughProps} data={moneyV2} />;
}

export function CartEmpty() {
  return (
    <div class="my-8">
      <div class="my-2">Looks like you haven't added anything yet!</div>
      <div>
        <NavLink prefetch="intent" to="/" end>
          <button class="btn btn-primary w-full">Continue Shopping</button>
        </NavLink>
      </div>
    </div>
  );
}

function CartLineUpdateButton({children, lines}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {children}
    </CartForm>
  );
}
