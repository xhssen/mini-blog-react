import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1> Mini-Blog App</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Add" style={{ 
          color: 'white', 
          backgroundColor: '#18296e',
          padding: '9px',
          fontSize: '14px',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;