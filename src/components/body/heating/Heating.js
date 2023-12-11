import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import classes from './Heating.module.css';

const Heating = () => {
  return (
    <Fragment>
      <Helmet>
        <title>HEATING</title>
        <meta name="description" content="Heating services" />
        <link rel="canonical" href="/heating" />
      </Helmet>
      <section className={classes.heating}>
        <div className={classes.hero}>
          <p>Looking for a heating engineer in United States?</p>
        </div>
        <div className={classes.content}>
          <h2>
            We're a family-run heating company with 15 years' experience
            providing homeowners with fast, cost-effective and quality heating
            repairs, heating maintenance and installations.
          </h2>
          <p>
            As a family-owned business, we take your heating needs to heart. We
            understand that heating and hot water are necessities to care for
            your family, so we'll always turn up when we say we will and will be
            clear and transparent on pricing - so you won't get a nasty surprise
            when you receive your bill. Our rates start at just $95!
          </p>
          <p>
            Our highly trained and professional Gas Safe registered engineers
            are available 24/7 to carry out heating repairs and maintenance in
            United Kingdom - meaning you can call on us for emergency heating
            system repairs at any time of the day or night, all year round. We
            won't leave you waiting either, with an average response time of
            just 1 hour!
          </p>
        </div>
        <div className={classes.services}>
          <h2 className={classes.heading}>Heating services</h2>
          <ul className={classes.list}>
            <p>offers a full range of domestic plumbing services, including:</p>
            <li>Boiler repair</li>
            <li>Boiler installation</li>
            <li>Boiler services</li>
            <li>Gas safety inspection</li>
            <li>Central heating maintenance</li>
            <li>Central heating installation</li>
            <li>Central heating repair</li>
            <li>Underfloor heating installation</li>
            <p>
              Get in contact with our friendly team today to arrange expert
              heating repairs and maintenance!
            </p>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Heating;
