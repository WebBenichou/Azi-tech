import { useParams } from "react-router-dom";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Produit non trouvé.</p>;

  return (
    <div className="container">
      <h2 className="text-center text-primary">{product.title}</h2>
      <p>{product.desc}</p>
      <p><strong>{product.price} DH</strong></p>
    </div>
  );
}
