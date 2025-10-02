import {isMobile} from 'react-device-detect';
import {useRef, useState, useEffect} from 'react';
import {Image, Money, CartForm} from '@shopify/hydrogen';
import ReactImageZoom from 'react-image-zoom';
import dot from 'src/dot.svg';
import scroll from 'src/scroll.svg';

export function ProductImageSet({product, setProductZoom}) {
  const [currentDot, setCurrentDot] = useState(0);

  const carouselRef = useRef(null);

  useEffect(() => {
    carouselRef.current.scrollLeft = 0;
    carouselRef.current.scrollTop = 0;

    carouselRef.current.addEventListener('scroll', () => {
      let currentScroll = carouselRef.current.scrollTop;
      let scrollInterval =
        carouselRef.current.scrollHeight /
        carouselRef.current.childNodes.length;

      if (isMobile) {
        currentScroll = carouselRef.current.scrollLeft;
        scrollInterval =
          carouselRef.current.scrollWidth /
          carouselRef.current.childNodes.length;
      }

      setCurrentDot(Math.round(currentScroll / scrollInterval));
    });
  }, []);

  // reset scroll of product images once new product is selected
  useEffect(() => {
    carouselRef.current.scrollTo(0, 0);
  }, [product]);

  let dots = [];
  for (let i = 0; i < product.images.length; i++) {
    dots.push(
      <img
        src={dot}
        class="h-3"
        style={currentDot === i ? {} : {filter: 'invert(75%)'}}
      />,
    );
  }

  return (
    <div class="flex flex-col gap-4 mx-auto items-center w-full md:w-1/2 md:h-full md:max-h-full">
      <div
        class="carousel md:carousel-vertical md:max-h-1/2 md:aspect-square md:overflow-x-hidden md:cursor-zoom-in"
        ref={carouselRef}
        onClick={() => { if (!isMobile) setProductZoom(product.images) }}
      >
        {product.images.map((image, index) => {
          return (
            <div
              key={index}
              class="carousel-item aspect-square w-full justify-center"
            >
              <Image
                class="skeleton rounded-md"
                data={image}
                width={720}
                height={720}
              />
            </div>
          );
        })}
      </div>

      {product.images.length > 1 && (
        <div class="flex justify-center items-center">
          {dots}
          {!isMobile && <img src={scroll} class="flex w-8 h-8" />}
        </div>
      )}

      {!isMobile && <ProductInfo product={product} />}
    </div>
  );
}

export function ProductInfo({product}) {
  if (product === undefined) {
    return <></>;
  }

  return (
    <div class="flex flex-col gap-4 w-full items-center px-2 *:w-full md:w-96 md:max-h-1/2"> {/* shopify uses forms, forms constrict their children, shopify is regarded */}
      <div class="text-xl text-center">{product.title}</div>
      <div class="text-lg text-center">Size: {product.size}</div>
      <div class="flex justify-center">
        {product.priceRange.minVariantPrice && 
          <>
            <Money data={product.priceRange.minVariantPrice} withoutCurrency={true} />&nbsp;USD
          </>
        }
      </div>
      <AddToCartButton
        lines={[
          {
            merchandiseId: product.variantId,
            quantity: 1,
            collection: product.collection
          },
        ]}
        disabled={!product.available}
      />
      <div class="overflow-y-auto rounded-md border border-base-300/75 p-2" dangerouslySetInnerHTML={{__html: product.descriptionHtml}} />
    </div>
  );
}

function AddToCartButton({analytics, disabled, lines}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            class="btn btn-primary w-full max-w-full"
            type="submit"
            disabled={disabled ?? fetcher.state !== 'idle'}
          >
            {disabled ? 'Sold' : 'Add to cart'}
          </button>
        </>
      )}
    </CartForm>
  );
}
