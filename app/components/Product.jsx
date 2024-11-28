import { isMobile } from 'react-device-detect';
import { Image, Money, CartForm } from '@shopify/hydrogen';

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
          handle: product.handle,
          title: product.title,
          descriptionHtml: product.descriptionHtml,
          priceRange: product.priceRange,
          variantId: product.variants.nodes[i].id,
          rawSelectedOptions: product.variants.nodes[i].selectedOptions, // needs to be intact for link retrieval
          size: size,
          featuredImage: product.featuredImage,
          element: <ProductImageSet product={product} />
        });
      }

      return products;
    }),
  );
}

export function ProductPrice({ priceRange }) {
  return (
    <div className="product-price">
      {priceRange.minVariantPrice && (
        <Money data={priceRange.minVariantPrice} />
      )}
    </div>
  );
}

export function ProductMain({ product }) {
  if (product === undefined) {
    return <></>;
  }

  return (
    <div className="product-main">
      <h3 className="my-4">{product.title}</h3>
      <div className="my-4"><ProductPrice priceRange={product.priceRange} /></div>
      <div className="my-4">

        <AddToCartButton
          onClick={() => {
            window.location.href = '/cart';
          }}
          lines={[{
            merchandiseId: product.variantId,
            quantity: 1,
          }]}
        >
          Add to cart
        </AddToCartButton>
      </div>
      <div className="my-4 collapse collapse-arrow border-base-300 border">
        <input type="checkbox" />
        <div className="collapse-title text-l font-medium">Description</div>
        <div className="collapse-content">
          <div className="my-4" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </div>
      </div>
    </div>
  );
}

export function ProductImageSet({ product }) {
  if (product === undefined) {
    return (
      <div className='product-image-panel-wrapper'>
        <div className="product-image-panel-empty">
          Please select a product to preview
        </div>
      </div>
    );
  } else {
    let images = product.images.nodes.map((image, index) =>
      <div key={index} className='carousel-item product-image'>
        <Image
          style={{ width: "100%", height: "100%" }}
          aspectRatio="1/1"
          data={image}
          width={640}
          height={640}
        />
      </div>
    );

    return (
      <div className="product-image-panel-wrapper">
        <div className={"carousel product-image-panel" + (isMobile ? "" : " carousel-vertical")}>
          {images}
        </div>
      </div>
    );
  }
}

function AddToCartButton({ analytics, children, disabled, lines, onClick }) {
  return (
    <CartForm route="/cart" inputs={{ lines }} action={CartForm.ACTIONS.LinesAdd}>
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
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}
