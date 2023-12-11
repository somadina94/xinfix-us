import classes from './Services.module.css';
import heating from '../../../images/heating.jpg';
import plumbing from '../../../images/plumbing.jpg';
import commercial from '../../../images/commercial.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className={classes.services}>
      <div className={classes.content}>
        <div className={classes.photo}>
          <img src={heating} alt="service" />
        </div>
        <div className={classes.info}>
          <h2>Heating Services</h2>
          <p>
            Whether you need a heating engineer, a boiler service or repair,
            we're here 24 hours a day, 365 days a year.
          </p>
          <Link to="heating">Learn more</Link>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <img src={plumbing} alt="service" />
        </div>
        <div className={classes.info}>
          <h2>Plumbing Services</h2>
          <p>
            From an emergency plumber to modern bathroom installations, we
            provide a wide range of professional services.
          </p>
          <Link to="plumbing">Learn more</Link>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <img src={commercial} alt="service" />
        </div>
        <div className={classes.info}>
          <h2>Commercial Services</h2>
          <p>
            We're commercial gas safe engineers and offer a full range of
            commercial plumbing and heating services.
          </p>
          <Link to="about">Learn more</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
