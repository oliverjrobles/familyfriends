import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const ProductList = ({ category }) => {
  return (
    <Suspense fallback={<div>loading products...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  "use server";

  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );

  const { products } = await response.json();

  return products.map((product) => (
    <Link href={`/details/${product.id}`} key={product.id}>
      <div>
        <Image
          loading="eager"
          alt={product.brand ? product.brand : "Product Image"}
          src={product.thumbnail}
          width={300}
          height={200}
        />

        <div className="text-center">{product.brand}</div>
      </div>
    </Link>
  ));
};

export default ProductList;
