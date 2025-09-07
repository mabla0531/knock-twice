import {isMobile} from 'react-device-detect';
import {useRef, useState, useEffect} from 'react';
import {Image, Money, CartForm} from '@shopify/hydrogen';
import ReactImageZoom from 'react-image-zoom';
import dot from 'public/dot.svg';
import scroll from 'public/scroll.svg';

export function constructProductSetFromCollection(collection) {
  let products = [].concat.apply(
    [],
    collection.products.nodes.map((product) => {
      let products = [];

      for (let i = 0; i < product.variants.nodes.length; i++) {
        let size = 'NONE';
        for (
          let j = 0;
          j < product.variants.nodes[i].selectedOptions.length;
          j++
        ) {
          // shopify API response model is abysmally designed
          if (
            product.variants.nodes[i].selectedOptions[j] !== undefined &&
            product.variants.nodes[i].selectedOptions[j].name.toUpperCase() ===
              'SIZE'
          ) {
            size = product.variants.nodes[i].selectedOptions[j].value;
          }
        }

        products.push({
          id: product.id,
          available: product.availableForSale,
          handle: product.handle,
          title: product.title,
          descriptionHtml: product.descriptionHtml,
          priceRange: product.priceRange,
          variantId: product.variants.nodes[i].id,
          rawSelectedOptions: product.variants.nodes[i].selectedOptions, // needs to be intact for link retrieval
          size: size,
          featuredImage: product.featuredImage,
          images: product.images.nodes,
        });
      }

      return products;
    }),
  );

  return products.sort((a, b) => {
    if (a.available && !b.available) return -1;

    if (!a.available && b.available) return 1;

    return 0;
  });
}

export function ProductPrice({priceRange}) {
  return (
    <div className="product-price">
      {priceRange.minVariantPrice && (
        <Money data={priceRange.minVariantPrice} />
      )}
    </div>
  );
}

export function ProductImageSet({product}) {
  let carouselRef = useRef(null);

  const [currentDot, setCurrentDot] = useState(0);

  useEffect(() => {
    carouselRef.current.scrollLeft = 0;
    carouselRef.current.scrollTop = 0;

    carouselRef.current.addEventListener('scroll', () => {
      let currentScroll = carouselRef.current.scrollTop;
      let scrollInterval = carouselRef.current.scrollHeight / carouselRef.current.childNodes.length;

      if (isMobile) {
        currentScroll = carouselRef.current.scrollLeft;
        scrollInterval = carouselRef.current.scrollWidth / carouselRef.current.childNodes.length;
      }

      setCurrentDot(Math.round(currentScroll / scrollInterval));
    });
  }, []);

  useEffect(() => {
    carouselRef.current.scrollTo(0, 0);
  }, [product]);

  let imageCount = product.images.length;
  let dots = [];

  for (let i = 0; i < imageCount; i++) {
    dots.push(
      <img src={dot} class="h-3" style={currentDot === i ? {} : {filter: 'invert(75%)'}} />,
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center w-full md:w-1/2 md:h-full md:max-h-full">
      <div
        className='carousel md:carousel-vertical md:max-h-1/2 md:aspect-square md:overflow-x-hidden'
        ref={carouselRef}
      >
        {product.images.map((image, index) => {
          return (
            <div
              key={index}
              className="carousel-item aspect-square w-full justify-center"
            >
              <img
                className='rounded-md'
                onLoad={(_) => {
                  console.log('image loaded');
                }}
                src={image.url + '&width=720&height=720'}
              />
            </div>
          );
        })}
      </div>

      {product.images.length > 1 && <div className="flex justify-center items-center">
        {dots}
        {!isMobile && (
          <img src={scroll} className="flex w-8 h-8" />
        )}
      </div>}

      {!isMobile && (
        <ProductInfo className="product-main-mobile" product={product} />
      )}
    </div>
  );
}

export function ProductInfo({product}) {
  if (product === undefined) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-4 w-full items-center px-2">
      <div className="text-xl text-center">{product.title}</div>
      <div>
        <ProductPrice priceRange={product.priceRange} />
      </div>
      <AddToCartButton
        lines={[
          {
            merchandiseId: product.variantId,
            quantity: 1,
          },
        ]}
        disabled={!product.available}
      />
      <div
        dangerouslySetInnerHTML={{__html: product.descriptionHtml}}
      />
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
            className="btn btn-primary my-4 w-96 max-w-full mx-auto"
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
