import classes from './Footer.module.css';
import { company } from '../../config/config';

const Footer = () => {
  const date = new Date(Date.now()).getFullYear();
  return (
    <footer className={classes.footer}>
      <p>
        Copyright {date} {company} services
      </p>
    </footer>
  );
};

export default Footer;
