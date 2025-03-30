import Hero from "../Hero";
import Navbar from "../Navbar";
import Project from "../Project/Project";
import Bio from "../Bio";
import Skills from "../Skills/Skills";
import Education from "../Education";
import Certification from "../Certification";
import Contact from "../Contact";
import Footer from "../Footer";

const Landing = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col item-center p-4 space-y-8 container mx-auto ">
        <Hero />
        <Navbar />
        <Project />
        <Bio />
        <Skills />
        <Education />
        <Certification />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
