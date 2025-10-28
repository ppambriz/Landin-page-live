import {
  Header,
  Hero,
  Features,
  MoreInformation,
  Testimonials,
} from "./Components";

function App() {
  return (
    <main className="w-[375px] m-auto">
      <section className="bg-navy-850 p-8 h-[420px] relative">
        <Header />

        <img
          className="relative z-10 mt-10"
          src="/public/images/illustration-intro.png"
          alt="Intro ilustration"
        />

        <img
          className="absolute left-0 bottom-0"
          src="/images/bg-curvy-mobile.svg"
          alt="bg-curvy-mobile"
        />
      </section>

      <section className="bg-navy-900 p-5">
        <Hero />
        <Features />
        <MoreInformation />
        <Testimonials />
      </section>
    </main>
  );
}

export default App;
