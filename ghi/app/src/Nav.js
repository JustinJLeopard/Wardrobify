import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Wardrobify</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shoes">List Shoes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shoes/new">Create Shoes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hats">List Hats</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hats/new">Create Hats</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
