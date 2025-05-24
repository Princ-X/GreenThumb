import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductList() {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {products.map((plant) => (
        <div key={plant.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
          <img src={plant.image} alt={plant.name} width="100" />
          <h3>{plant.name} - ${plant.price}</h3>
          <button onClick={() => dispatch(addToCart(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
