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
    <div className="relative h-screen w-full overflow-y-auto overflow-x-hidden bg-[#050b14] text-slate-100 antialiased scroll-smooth selection:bg-teal-500/30">
      
      {/* Structural Tech Grid Layer */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] -z-30 pointer-events-none opacity-40" />
      
      {/* High-End Deep Emerald & Teal Ambient Aurora Lights */}
      <div className="fixed top-[-25%] left-[-10%] h-[800px] w-[800px] rounded-full bg-gradient-to-br from-teal-500/10 to-transparent blur-[160px] -z-20 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] h-[700px] w-[700px] rounded-full bg-gradient-to-bl from-indigo-500/10 to-transparent blur-[140px] -z-20 pointer-events-none" />
      <div className="fixed top-[30%] left-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px] -z-20 pointer-events-none" />

      {/* --- STICKY DOCK CONTAINER --- */}
      {/* Yeh wrapper page flow ke andar rahega taaki content ko automatically niche push kare */}
      <div className="sticky top-0 w-full z-50 px-4 md:px-8 flex justify-center pt-6 pointer-events-none">
        <div className="w-full max-w-5xl pointer-events-auto">
          <Navbar />
        </div>
      </div>

      {/* Main Layout Axis */}
      {/* Ab padding perfectly balance rahegi bina content block kiye */}
      <main className="relative z-10 flex flex-col items-center px-4 sm:px-8 lg:px-12 space-y-36 max-w-7xl mx-auto w-full pt-8 pb-24">
        <Hero />
        <Project />
        <Bio />
        <Skills />
        <Education />
        <Certification />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Landing;