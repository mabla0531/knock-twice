import {Await, NavLink} from '@remix-run/react';
import {useState, Suspense} from 'react';
import {useRootLoaderData} from 'src/root';
import {Form, Icon} from '@shopify/polaris';
import {
  CartIcon,
  SearchIcon,
  PersonLockIcon,
  InfoIcon,
} from '@shopify/polaris-icons';

export function Header({header, cart}) {
  const {shop, _} = header;

  const headerColor = navigator.userAgent.includes('Safari')
    ? 'bg-base-300/50'
    : 'bg-black/0.25'; // safari is highly regarded
  console.log('headerColor: ' + headerColor);
  return (
    <div
      class={'navbar sticky w-full z-1 top-0 backdrop-blur-lg ' + headerColor}
    >
      <div class="flex-1"></div>
      <div class="flex-1 flex justify-center items-center">
        <NavLink prefetch="intent" to="/" end>
          <div style={{display: 'flex'}}>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              class="w-32 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 460 143"
            >
              <title>KT SVGGG</title>
              <path
                d="M421.29,76.18a26.25,26.25,0,0,0-27.48-24.87l-70.1,3.5A26.21,26.21,0,0,0,325,107.19c.42,0,.86,0,1.3,0l70.13-3.5a26.24,26.24,0,0,0,24.87-27.48ZM325.55,91.89a10.93,10.93,0,1,1-1.1-21.84L342,69.19a18,18,0,0,0-.44,4,19.15,19.15,0,0,0,11,17.32Zm77.65-7.08a10.75,10.75,0,0,1-7.54,3.61l-25.12,1.23a19.06,19.06,0,0,0,8.39-22.3l15.65-.77a3.14,3.14,0,0,1,.53,0,10.91,10.91,0,0,1,8.09,18.26Z"
                transform="translate(-1.82 -0.56)"
              />
              <path
                d="M461.39,30.75a37.18,37.18,0,0,0-.85-4.52C456.82,11.33,443.84.56,428.75.56H35.91a34.44,34.44,0,0,0-34,30.15l0,.48v81.62l0,.48a34.44,34.44,0,0,0,34.05,30.15H428.75c15.09,0,28.07-10.76,31.79-25.67a36.6,36.6,0,0,0,.85-4.55l0-.44V31.22ZM207.22,69.35l16.15.82A10.93,10.93,0,1,1,222.27,92L196.5,90.73a19.29,19.29,0,0,0,10.72-21.38Zm238.94,42.5c-1.28,9.19-8.86,16.31-17.41,16.31h-195l12.86-36v0l.1-.23A25.59,25.59,0,0,0,249,82.4a26.22,26.22,0,0,0-24.87-27.49L154,51.42a26.22,26.22,0,0,0-2.61,52.37l70.12,3.5h1.31c.72,0,1.47,0,2.17-.08l-7.5,20.94H102.42V15.82H428.75c8.55,0,16.13,7.14,17.41,16.33Zm-267.78-22-26.2-1.31a10.94,10.94,0,1,1,1.07-21.86l16.57.81a19.42,19.42,0,0,0,8.56,22.36Z"
                transform="translate(-1.82 -0.56)"
              />
            </svg>
          </div>
        </NavLink>
      </div>
      <div class="flex-1 justify-end">
        <CartToggle cart={cart} />
      </div>
    </div>
  );
}

function CartBadge({count}) {
  return (
    <div class="relative ml-auto w-8 h-8">
      <a href="/cart">
        <Icon class="" source={CartIcon} tone="base" />
        <div class="flex absolute top-0 right-0 text-xs justify-center items-center w-4 h-4 bg-base-300 rounded-lg">
          {count}
        </div>
      </a>
    </div>
  );
}

function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}
