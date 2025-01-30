import {isMobile} from 'react-device-detect';
import {useRef, useState, useEffect} from 'react';
import {Image, Money, CartForm} from '@shopify/hydrogen';
import ReactImageZoom from 'react-image-zoom';
import dot from 'public/dot.svg';
import scroll from 'public/scroll.svg';

export function constructProductSetFromCollection(collection) {
  return [].concat.apply(
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
          images: product.images.nodes
        });
      }

      return products;
    }),
  );
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
  let elementRef = useRef(null);

  useEffect(() => {
    elementRef.current.scrollLeft = 0;
    elementRef.current.scrollTop = 0;

    elementRef.current.addEventListener('scroll', () => {
      let currentScroll = elementRef.current.scrollTop;
      let scrollInterval = elementRef.current.scrollHeight / elementRef.current.childNodes.length;

      if (isMobile) {
        currentScroll = elementRef.current.scrollLeft;
        scrollInterval = elementRef.current.scrollWidth / elementRef.current.childNodes.length;
      }

      setCurrentDot(Math.round(currentScroll / scrollInterval));
    });
  }, []);

  const [currentDot, setCurrentDot] = useState(0);

  useEffect(() => {
    elementRef.current.scrollTo(0, 0);
  }, [product]);

  let imageCount = product.images.length;
  let dots = [];

  for (let i = 0; i < imageCount; i++) {
    dots.push(
      <img
        src={dot}
        style={currentDot === i ? {} : {filter: 'invert(75%)'}}
      />
    );
  }


  return (
    <div className="product-image-panel-wrapper">
      <div
        className={
          'carousel ' +
          (isMobile ? 'product-image-panel overflow-y-hidden' : 'carousel-vertical product-image-panel overflow-x-hidden')
        }
        ref={elementRef}
      >
        {product.images.map((image, index) => {
          return (
            <div key={index} className="carousel-item product-image">
              <img onLoad={(_) => {console.log("image loaded")}} src={image.url + "&width=720&height=720"}/>
            </div>
          )
        })}
      </div>
      <div className="product-image-dot-panel">
        {!isMobile && <div className='product-image-dot-panel-icon' />}
        {dots}
        {!isMobile && <img src={scroll} className='product-image-dot-panel-icon' />}
      </div>
      {!isMobile && <ProductMain className="product-main-mobile" product={product} />}
    </div>
  );
}

export function ProductMain({product}) {
  if (product === undefined) {
    return <></>;
  }

  return (
    <div className="product-main">
      <h3 className="my-2">{product.title}</h3>
      <div className="my-2">
        <ProductPrice priceRange={product.priceRange} />
      </div>
      <div className="my-2 form-width-fixer-fuck-you-shopify">
        <AddToCartButton
          lines={[
            {
              merchandiseId: product.variantId,
              quantity: 1,
            },
          ]}
          disabled={!product.available}
        />
      </div>
      <div className='my-2 mt-5' dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></div>
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
            className="btn btn-primary w-full"
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
