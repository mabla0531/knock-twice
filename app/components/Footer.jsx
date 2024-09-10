import { NavLink } from '@remix-run/react';
import { useRootLoaderData } from '~/root';

/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer({ menu, shop }) {
  return (
    <footer className="footer">
      <NavLink className="footer-link" style={{ justifyContent: "left" }}>CONTACT</NavLink>
      <NavLink className="footer-link" style={{ justifyContent: "center" }}>PASSPORT</NavLink>
      <NavLink className="footer-link" style={{ justifyContent: "right" }}>POLICIES</NavLink>
    </footer>
  );
}

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
