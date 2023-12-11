import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={`${classes.hero} ${classes.hero1}`}>
        <h1>Plumbing & Heating Services in United States</h1>
        <p>
          We're a family-run business from MINNESOTA here to help you with your
          heating and plumbing. Whatever the problem, we're here to help you 24
          hours a day.
        </p>
      </div>
      <div className={`${classes.hero} ${classes.hero2}`}>
        <h1>Gas Safe Registered Heating Engineers</h1>
        <p>
          We've got 15 years' experience providing heating and plumbing repairs,
          maintenance and services. Need something fixed? use the contact form
          provided or the quick chat at the bottom right 24 hours a day.
        </p>
      </div>
    </section>
  );
};

export default Hero;
