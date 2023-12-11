import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../body/homepage/Hero';
import Services from '../body/homepage/Services';
import { company } from '../../config/config';

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>HOME</title>
        <meta
          name="description"
          content={`Welcome to ${company} Plumbing and Heating Services`}
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Services />
    </Fragment>
  );
};

export default Home;
