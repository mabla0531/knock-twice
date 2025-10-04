import {Await} from '@remix-run/react';
import {Icon} from '@shopify/polaris';
import {useRef, Suspense, useLayoutEffect} from 'react';
import {Header} from 'src/components/Header';
import {CartMain} from 'src/components/Cart';

export function Layout({cart, children = null, header, isLoggedIn}) {
  
  let screenRef = useRef(null);

  useLayoutEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = 0;
      screenRef.current.scrollLeft = 0;
    }
  });
  
  return (
    <>
      <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
      <div 
        class="absolute top-0 left-0 pt-16 w-full h-full overflow-x-hidden overflow-y-auto"
        ref={screenRef}
      >
        {children}
      </div>
    </>
  );
}
