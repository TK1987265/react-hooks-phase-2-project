import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/wrestlers">Wrestlers</NavLink>
      <NavLink to="/wrestlers/new">Add New Wrestler</NavLink>
    </nav>
  );
}

export default NavBar;
