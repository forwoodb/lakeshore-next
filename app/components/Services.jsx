import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="flex flex-col justify-between items-center w-[95%] m-auto">
        <div className="content max-w-200">
          <h2 className="text-center text-md font-bold text-slate-500 uppercase">
            What We Do
          </h2>
          <h3 className="m-auto text-center text-4xl font-bold uppercase">
            Never Worry About
          </h3>
          <h3 className="m-auto mb-4 text-center text-4xl font-bold uppercase">
            Your Website Ever Again
          </h3>
          <p className="text-center text-lg">
            At Lakeshore Web Services, we specialize in small business web
            design and development for clients anywhere in the US and Canada.
            Every line of code is written by hand to ensure the best performance
            and make Google happy, which helps bring in more customers to your
            site and bring more revenue to your business. We also manage the
            edits for you and will never leave you high and dry. Our goal is to
            create long term relationships with our clients and see them grow
            over time.
          </p>
        </div>
        <div className="cards grid gap-4 md:grid-cols-3 my-16">
          <div className="card py-16 px-8 bg-one rounded-lg shadow-md">
            <h4 className="pb-2 text-2xl font-bold uppercase">
              Mobile First Design
            </h4>
            <p>
              We start building your site for mobile devices first making sure
              the code is as lean and optimized with no bloated waste and makes
              the site even more responsive.
            </p>
          </div>
          <div className="card py-16 px-8 bg-one rounded-lg shadow-md">
            <h4 className="pb-2 text-2xl font-bold uppercase">
              Fully Responsive
            </h4>
            <p>
              Your website will fit all mobile screens sizes, tablets, and
              desktop sizes so visitors can access your site from anywhere and
              see a beautiful site no matter the screen size.
            </p>
          </div>
          <div className="card py-16 px-8 bg-one rounded-lg shadow-md">
            <h4 className="pb-2 text-2xl font-bold uppercase">
              Optimized Page Speed
            </h4>
            <p>
              If your site takes more than 3 seconds to load you can lose up to
              50% your traffic because it took too long. Our sites load 1 second
              or less ensuring everyone that visits your site reaches it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
