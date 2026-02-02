import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-8">
      <div className="w-[95%] m-auto">
        <h2 className="text-2xl m-auto">Contact Us</h2>
        <div className="wrapper md:flex justify-between gap-x-8">
          <form className="p-8 mb-8 bg-gray-200 rounded-lg md:flex flex-wrap justify-between grow gap-4 md:w-[46%] max-w-160 lg:w-[50%]">
            <div className="input-group-half flex flex-col gap-2 md:w-[48%]">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" className="bg-white" />
            </div>
            <div className="input-group-half flex flex-col gap-2 md:w-[48%]">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" className="mb-4 bg-white" />
            </div>
            <div className="input-group flex flex-col gap-2 md:w-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="30"
                rows="10"
                className="mb-4 bg-white"
              ></textarea>
            </div>
            <div className="input-group flex flex-col gap-2 md:w-full">
              <label htmlFor="send"></label>
              <input type="submit" value="Send" className="bg-gray-100" />
            </div>
          </form>
          <div className="location-hours">
            <h3 className="pb-4">Location & Hours</h3>
            <div className="info lg:flex justify-between gap-x-8">
              <div className="location pb-8 lg:w-[40%]">
                <address className="pb-4">
                  Business Name
                  <br />
                  20 Fulton Street E, #503
                  <br />
                  Grand Rapids, Michigan 49503
                </address>
                <div className="links flex flex-col">
                  <a href="tel:(616) 867-5309">(616) 867-5309</a>
                  <a href="mailto:forwoodb77@gmail.com">forwoodb77@gmail.com</a>
                </div>
              </div>
              <div className="hours flex gap-x-4">
                <div className="days">
                  <p>Monday</p>
                  <p>Tuesday</p>
                  <p>Wednesday</p>
                  <p>Thursday</p>
                  <p>Friday</p>
                  <p>Saturday</p>
                  <p>Sunday</p>
                </div>
                <div className="times">
                  <p>10:30am - 7:30pm</p>
                  <p>10:30am - 7:30pm</p>
                  <p>10:30am - 7:30pm</p>
                  <p>10:30am - 7:30pm</p>
                  <p>10:30am - 6:00pm</p>
                  <p>Closed</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
