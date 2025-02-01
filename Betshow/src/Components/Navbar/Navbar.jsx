import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">BetShow</div>
      <ul className="nav-menu">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/team" className="nav-link">Team</Link></li>
        <li><Link to="/login" className="nav-contact">Login</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
