import { NavLink } from '@remix-run/react';
import { useRootLoaderData } from '~/root';

/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer({ menu, shop }) {
  return (
    <footer className="footer">
      <div className="footer-link" style={{ justifyContent: "left" }}><a href="/contact">CONTACT</a></div>
      <div className="footer-link" style={{ justifyContent: "center" }}><a href="/passport">PASSPORT</a></div>
      <div className="footer-link" style={{ justifyContent: "right" }}><a href="/policies">POLICIES</a></div>
    </footer>
  );
}
