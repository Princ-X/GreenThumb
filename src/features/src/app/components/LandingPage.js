import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{ 
      backgroundImage: 'url("/plant-bg.jpg")', 
      height: '100vh', 
      padding: '20px' 
    }}>
      <h1>GreenThumb</h1>
      <p>Your premium houseplant destination</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
