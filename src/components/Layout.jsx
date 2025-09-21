import {Await} from '@remix-run/react';
import {Icon} from '@shopify/polaris';
import {Suspense} from 'react';
import {Header} from 'src/components/Header';
import {CartMain} from 'src/components/Cart';

export function Layout({cart, children = null, header, isLoggedIn}) {
  let render = true;
  fetch('http://127.0.0.1:6969/auth').then((response) => {
    render = response.body != 'forbidden';
  });

  if (!render) {
    return <div class="text-3xl">Disabled</div>;
  }
  return (
    <>
      <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
      <div class="absolute top-0 left-0 pt-16 w-full h-full overflow-x-hidden overflow-y-auto">
        {children}
      </div>
    </>
  );
}
