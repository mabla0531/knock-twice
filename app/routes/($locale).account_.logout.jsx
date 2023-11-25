import {json, redirect} from '@shopify/remix-oxygen';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Logout'}];
};

export async function loader() {
  return redirect('/account/login');
}

/**
 * @param {ActionFunctionArgs}
 */
export async function action({request, context}) {
  const {session} = context;
  session.unset('customerAccessToken');

  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  return redirect('/', {
    headers: {
      'Set-Cookie': await session.commit(),
    },
  });
}

export default function Logout() {
  return null;
}

/** @typedef {import('@shopify/remix-oxygen').ActionFunctionArgs} ActionFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof action>} ActionReturnData */
