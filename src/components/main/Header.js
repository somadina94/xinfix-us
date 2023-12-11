import { Link } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { useRef } from 'react';

import classes from './Header.module.css';
import MainNav from '../nav/MainNav';
import { company } from '../../config/config';

const Header = () => {
  const navRef = useRef(null);

  const handleShowNav = () => {
    navRef.current.classList.toggle(classes.display);
  };

  return (
    <header className={classes.header}>
      <Link to="/">{company}</Link>
      <CgMenuGridO className={classes.menu} onClick={handleShowNav} />
      <div className={classes.nav} ref={navRef}>
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
