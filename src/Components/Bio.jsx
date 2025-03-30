export const BIO = [
  "Sajal Tiwari studied Bachelor of Science in Mathematics at CSJM University, graduating in 2026. With a strong foundation in analytical thinking and problem-solving, he has successfully transitioned into the tech industry, honing his skills in frontend and full-stack development over the past few years.",

  "During his studies, he was introduced to the world of web development and major programming languages such as Java, Python, and C/C++. He focused on Java and its Spring Boot framework to tackle real-world problems, creating several projects that integrate backend solutions with modern frontend technologies. A selection of these projects can be found on his GitHub profile and portfolio.",

  "As a multi-disciplinary developer, Sajal brings a wealth of skills and expertise to his work. His deep understanding of HTML, CSS, and JavaScript, combined with proficiency in modern libraries like React, empowers him to craft engaging and memorable web experiences for clients and audiences alike.",
];

import { motion } from "framer-motion";
const Bio = () => {
  return (
    <>
      <section
        className="flex justify-center flex-col gap-12 pt-20 pl-6 pr-6"
        id="bio"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center text-3xl lg:3xl lg:text-4xl"
        >
          Bio
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=""
        >
          {BIO.map((bio, index) => (
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              className="mb-4 text-lg lg:text-xl  "
              key={index}
            >
              {bio}
            </motion.p>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Bio;
