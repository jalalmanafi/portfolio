import About from "./sections/About";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className="max-w-xl h-screen mx-auto flex flex-col justify-between max-[400px]:gap-2 py-16 px-4">
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
