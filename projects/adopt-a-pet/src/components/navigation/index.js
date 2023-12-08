import React, { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';
import { NavLink } from 'react-router-dom';

// Import NavLink

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key={'all'}>
          <NavLink
            to='/'
            className={({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link" }
            >All Pets</NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                {/* These links should be NavLink component and add a special active class name if its an active link */}
                <NavLink
                  key={type.name}
                  to={`/${type._links.self.href.split('/').pop()}`}
                  className={({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link" }
                  >{type.name}s</NavLink>
              </li>
            ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};

export default Navigation;
