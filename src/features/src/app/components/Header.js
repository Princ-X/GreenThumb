import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartItems = useSelector(state => state.cart.items);
  
  return (
    <header style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </header>
  );
}
