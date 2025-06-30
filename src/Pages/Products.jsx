import ProductCard from "../Components/ProductCard";

export default function Products({products}) {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Page de Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              desc={product.desc}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
