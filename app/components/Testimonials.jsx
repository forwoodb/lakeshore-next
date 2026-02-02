import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-8">
      <div className="w-[95%] m-auto">
        <h2 className="text-2xl m-auto">Testimonials</h2>
        <div className="wrapper grid gap-y-4 md:grid-cols-2 gap-x-4 lg:grid-cols-3">
          <div className="review">
            <div className="stars flex">
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              officiis assumenda voluptatum dolor quaerat labore quis commodi
              impedit quod inventore reiciendis beatae, ab molestias veniam quam
              sequi magnam natus aut?
            </p>
            <span className="name">Leah M</span>
          </div>
          <div className="review">
            <div className="stars flex">
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              officiis assumenda voluptatum dolor quaerat labore quis commodi
              impedit quod inventore reiciendis beatae, ab molestias veniam quam
              sequi magnam natus aut?
            </p>
            <span className="name">Leah M</span>
          </div>
          <div className="review">
            <div className="stars flex">
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
              <Image
                loading="lazy"
                decoding="async"
                src="images/star.svg"
                alt=""
                height="30"
                width="30"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              officiis assumenda voluptatum dolor quaerat labore quis commodi
              impedit quod inventore reiciendis beatae, ab molestias veniam quam
              sequi magnam natus aut?
            </p>
            <span className="name">Leah M</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
