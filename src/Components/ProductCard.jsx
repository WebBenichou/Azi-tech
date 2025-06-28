import { NavLink } from 'react-router-dom';

export default function ProductCard({ id, title, desc, price }) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">{title}</h5>
        </div>
        <div className="card-body">
          <p className="lead">{desc}</p>
          <p><i>{price} DH</i></p>
        </div>
        <div className="card-footer d-flex justify-content-end">
          <NavLink to={`/products/${id}`} className="btn btn-warning">
            Voir
          </NavLink>
        </div>
      </div>
    </div>
  );
}
