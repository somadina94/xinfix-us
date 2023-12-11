import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import classes from './About.module.css';
import { owner } from '../../../config/config';
import Services from '../homepage/Services';
import { company } from '../../../config/config';

const About = () => {
  return (
    <Fragment>
      <Helmet>
        <title>ABOUT US</title>
        <meta name="description" content={`About ${company} services`} />
        <link rel="canonical" href="/about" />
      </Helmet>
      <section className={classes.heating}>
        <div className={classes.hero}>
          <p>Get to know {company} Heating</p>
        </div>
        <div className={classes.content}>
          <h1>A family-owned plumbing and heating contractor</h1>
          <h2>
            {company} Plumbing & Heating was founded in 2015 by owner {owner}.{' '}
            {owner.split(' ')[0]} has over 12 years of experience working in the
            plumbing and heating industry in the United States.
          </h2>
          <p>
            We pride ourselves on offering a friendly, reliable and accredited
            service and work with commercial, industrial and residential clients
            in United States.
          </p>
          <p>
            With a small team of trained, qualified plumbers and gas safe
            engineers, we're committed to providing the highest possible level
            of service, whether you're a first-time customer or a regular.
          </p>
          <p>
            As professional plumbing and heating contractors, you can call on us
            24 hours a day, 365 days a year for everything from emergency
            plumbing and boiler breakdowns to routine gas safety inspections,
            central heating installation and leaky pipe repair.
          </p>
          <p>
            We promise to turn up when we say we will, be clear and transparent
            with our pricing and always tidy up after ourselves!
          </p>
          <p>
            You can also trust that we'll only undertake work that is completely
            necessary and that has been discussed and agreed with you
            beforehand.
          </p>
          <p>
            We want you to be confident and comfortable that you'll receive a
            trustworthy and considerate service within your home or workspace.
            We offer a 12 month guarantee on all installations and we always
            provide the same top-notch level of service regardless of whether
            we're fixing a dripping tap or upgrading a high-end plant room in a
            seven-bedroom house.
          </p>
          <p>If you'd like to find out more, just chat with us.</p>
        </div>
        <Services />
      </section>
    </Fragment>
  );
};

export default About;
