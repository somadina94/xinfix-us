import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';

const MainNav = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/">HOME</Link>
      <Link to="plumbing">PLUMBING</Link>
      <Link to="heating">HEATING</Link>
      <Link to="about">ABOUT US</Link>
      <Link to="contact">CONTACT US</Link>
    </nav>
  );
};

export default MainNav;
