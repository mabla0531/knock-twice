import {Await} from '@remix-run/react';
import {Icon} from '@shopify/polaris';
import {Suspense} from 'react';
import {Header} from '~/components/Header';
import {CartMain} from '~/components/Cart';

/**
 * @param {LayoutProps}
 */
export function Layout({cart, children = null, header, isLoggedIn}) {
  return (
    <>
      <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
      <div className="main">{children}</div>
    </>
  );
}

/**
 * @typedef {{
 *   cart: Promise<CartApiQueryFragment | null>;
 *   children?: React.ReactNode;
 *   footer: Promise<FooterQuery>;
 *   header: HeaderQuery;
 *   isLoggedIn: boolean;
 * }} LayoutProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
