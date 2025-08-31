export const EDUCATION = [
  {
    degree: "BACHLOR OF SCIENCE",
    institution: "CHHATRAPATI SHAHU JI MAHARAJ UNIVERSITY, Kanpur, UP",
    duration: "August 2023 - Present",
    description:
      "This program has strengthened my analytical thinking, problem-solving abilities, and logical reasoning skills. Alongside my academic studies, I have explored applications of mathematics in computer science, developing expertise in programming languages such as Java and Python. My coursework and projects have enhanced my ability to tackle complex problems and build efficient algorithms, laying a strong foundation for a career in software development.",
  },
  {
    degree: "HIGHER SECONDARY EDUCATION",
    institution: " BRILLIANT ACADEMY INTER COLLEGE, Unnao, UP",
    duration: "APRIL 2022 - APRIL 2023",
    description:
      "Successfully completed Higher Secondary Education with a robust foundation in Mathematics and Science, which fostered strong analytical and problem-solving skills. During this period, I developed a deep interest in technology and programming, laying a solid groundwork for a future career in software development.",
  },
];

import { motion } from "framer-motion";
const Education = () => {
  return (
    <>
      <section className="py-8 justify-center mx-auto" id="education">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-center text-3xl font-semibold mt-14"
        >
          Education
        </motion.h2>

        {EDUCATION.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            key={index}
            className=" p-10 mt-4"
          >
            <h3 className="text-xl font-semibold">{edu.degree} </h3>
            <p className="text-lg"> {edu.institution}</p>
            <p className="text-sm text-stone-300">{edu.duration}</p>
            <p className="mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Education;
