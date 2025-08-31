const HERO = {
  name: "SAJAL TIWARI",
  greet: "Hi There !",
  description:
    "As a passionate and motivated Full Stack Developer,  I possess a solid understanding of both front-end and back-end technologies, enabling me to contribute effectively to the development of dynamic web applications.", // Add your own description here
};
import carlImg from "/profile1.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <section className="flex min-h-screen flex-wrap items-center pt-8 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
          className="w-full md:w-1/2 "
        >
          <h2 className="my-8  text-4xl font-bold md:text-5xl lg:text-[7rem]">
            {HERO.name}
          </h2>

          <p className=" text-3xl tracking-tighter lg:text-4xl">{HERO.greet}</p>

          <p className="mb-8  text-xl">{HERO.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          className="w-full md:w-1/2 lg:p-8"
        >
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={carlImg}
              width={500}
              height={500}
              alt="Sajal Tiwari"
              className="rounded-3xl"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
