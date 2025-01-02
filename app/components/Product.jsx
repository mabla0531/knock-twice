import {isMobile} from 'react-device-detect';
import {useRef, useState, useEffect} from 'react';
import {Image, Money, CartForm} from '@shopify/hydrogen';
import ReactImageZoom from 'react-image-zoom';
import dot from 'public/dot.svg';

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

  useEffect(() => {
    elementRef.current.scrollLeft = 0;
    elementRef.current.scrollTop = 0;
  }, [product]);

  let imageCount = product.images.length;

  const [currentDot, setCurrentDot] = useState(0);
  let dots = [];

  for (let i = 0; i < imageCount; i++) {
    dots.push(
      <button
        onClick={() => {
          if (isMobile) elementRef.current.scrollLeft = i * (elementRef.current.scrollWidth  / imageCount);
          else          elementRef.current.scrollTop  = i * (elementRef.current.scrollHeight / imageCount);
        }}
      >
        <img
          src={dot}
          style={currentDot === i ? {} : {filter: 'invert(75%)'}}
        />
      </button>,
    );
  }

  if (product === undefined) {
    return (
      <div className="product-image-panel-wrapper">
          Please select a product to preview
      </div>
    );
  } else {
    let images = product.images.map((image, index) => (
      <div key={index} className="carousel-item product-image">

        <Image
          aspectRatio="1/1"
          data={image}
          width={640}
          height={640}
          loading='eager'
        />
      </div>
    ));

    return (
      <div className="product-image-panel-wrapper">
        <div
          className={
            'carousel ' +
            (isMobile ? 'product-image-panel overflow-y-hidden' : 'carousel-vertical product-image-panel overflow-x-hidden')
          }
          ref={elementRef}
        >
          {images}
        </div>
        <div className="product-image-dot-panel">{dots}</div>
      </div>
    );
  }
}

export function ProductMain({product}) {
  if (product === undefined) {
    return <></>;
  }

  return (
    <div className="product-main">
      <h3 className="my-4">{product.title}</h3>
      <div className="my-4">
        <ProductPrice priceRange={product.priceRange} />
      </div>
      <div className="my-4">
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
      <div className="my-4 collapse collapse-arrow border-base-300 border">
        <input type="checkbox" />
        <div className="collapse-title text-l font-medium">Description</div>
        <div className="collapse-content">
          <div
            className="my-4"
            dangerouslySetInnerHTML={{__html: product.descriptionHtml}}
          />
        </div>
      </div>
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
