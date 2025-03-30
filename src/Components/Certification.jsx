export const CERTIFICATION = [
  {
    degree: "Full Stack java Training Program",
    duration: "August 2023 - March 2024 ",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and Java. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
  {
    degree: "Python Training Program",
    duration: "April 2024 - June 2024",
    description:
      "In this training Program is designed to provide participants with a solid foundation in Python programming, equipping them with the skills necessary to develop applications, analyze data, and solve real-world problems. This program covers a wide range of topics, from basic syntax to advanced concepts, ensuring a well-rounded understanding of the language and its applications.",
  },
  {
    degree: "AI TOOLS AND CHAT GPT WORKSHOP  ",
    duration: "",
    description:
      "I participated in the AI Tools and Chat GPT Workshop, where I gained hands-on experience with various AI tools, including Perplexity, Gemini, and OpenAI etc. The workshop focused on the practical application of AI in daily development and work processes, equipping me with the skills to create presentations and analyze data efficiently within 10-15 minutes. Additionally, I learned how to code and debug effectively in under 5-10 minutes, leveraging AI assistance to enhance productivity and streamline workflows.",
  },
];
import { motion } from "framer-motion";
const Certification = () => {
  return (
    <>
      <section className="py-8" id="certification">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-center text-3xl font-semibold mt-14"
        >
          Certification
        </motion.h2>

        {CERTIFICATION.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            key={index}
            className="px-10 py-5 mt-5"
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

export default Certification;
