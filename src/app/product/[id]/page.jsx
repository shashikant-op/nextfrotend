// app/product/[id]/page.jsx
import ProductClient from "./productclient";

export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${id}`, { 
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) return { title: "Product Not Found" };
    
    const data = await res.json();
    const product = data?.product;

    return {
      title: `${product?.title} | Sharma Furniture`,
      openGraph: {
        images: [{ url: product?.images?.[0]?.url, width: 1200, height: 630 }],
      },
    };
  } catch (error) {
    return { title: "Sharma Furniture Works" };
  }
}

export default async function Page({ params }) {
  const { id } = params;
  let product = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${id}`);
    if (res.ok) {
      const data = await res.json();
      product = data?.product;
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }

  // If fetch failed, we still want to show the client component (it has its own useEffect fallback)
  const productSchema = product ? {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product?.title,
    "image": product?.images?.map(img => img.url),
    "description": product?.description,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": product?.price,
      "availability": product?.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  } : null;

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      <ProductClient />
    </>
  );
}