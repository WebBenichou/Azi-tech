import ProductCard from "../Components/ProductCard";

export default function Products() {
  return (
    <div>
      <h1>Page de Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-4" key={product.id}>
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
