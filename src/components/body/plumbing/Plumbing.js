import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import classes from './Plumbing.module.css';
import { company } from '../../../config/config';

const Plumbing = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PLUMBING</title>
        <meta name="description" content={`Plumbing services`} />
        <link rel="canonical" href="/about" />
      </Helmet>
      <section className={classes.plumbing}>
        <div className={classes.hero}>
          <p>
            Reliable, trustworthy and experienced plumbing services in United
            States
          </p>
        </div>
        <div className={classes.content}>
          <h2>
            We know that looking for plumbing services can be somewhat of a
            minefield, especially if you've sprung a leak or had a breakdown and
            need someone you can trust to get the job done fast.
          </h2>
          <p>
            With 12 years experience in plumbing and heating, we're passionate
            about going above and beyond what's expected, no matter the size of
            the job, to help our clients enjoy their home or commercial space.
          </p>
          <p>
            Whether you have a burst pipe, would like a stylish new bathroom
            installed or a radiator fitted, you'll find we approach your job
            with enthusiasm and professionalism. We pride ourselves on being
            reliable, arriving at the time we say we will (usually within just
            1-2 hours of you contacting us). We're so confident that you'll be
            delighted with our plumbing services, that you only pay when the job
            is done!
          </p>
          <p>
            From just $95, our plumbing services are expertly executed for an
            incredibly affordable price!
          </p>
        </div>
        <div className={classes.services}>
          <h2 className={classes.heading}>
            Looking for plumbers in United States?
          </h2>
          <ul className={classes.list}>
            <p>
              {company} offers a full range of domestic plumbing services,
              including:
            </p>
            <li>Emergency plumbing</li>
            <li>Plumbing repair</li>
            <li>Pipe repair</li>
            <li>Appliance installation</li>
            <li>Bathroom installation</li>
            <p>For quality and swift plumbing service, contact us today!</p>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Plumbing;
