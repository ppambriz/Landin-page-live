import {
  Header,
  Hero,
  Features,
  MoreInformation,
  Testimonials,
  Form,
  Footer,
} from "./Components";

function App() {
  return (
    <main className="m-auto">
      <section className="bg-gray-400 p-8 h-[420px] relative md:h-[650px]">
        <Header />

        <img
          className="relative z-10 mt-10 md:max-w-[450px] mx-auto"
          src="/public/images/illustration-intro.png"
          alt="Intro ilustration"
        />

        <img
          className="absolute left-0 bottom-0 w-full xl:hidden"
          src="/images/bg-curvy-mobile.svg"
          alt="bg-curvy-mobile"
        />

        <img
          className="absolute left-0 bottom-0 w-full hidden xl:block"
          src="/images/bg-curvy-desktop.svg"
          alt="bg-curvy-desktop"
        />
      </section>

      <section className="bg-navy-900 p-5 pb-[300px]">
        <Hero />
        <Features />
        <MoreInformation />
        <Testimonials />
      </section>

      <section className="bg-navy-950 relative md:pl-20">
        <Form />
        <Footer />
      </section>      
    </main>
  );
}

export default App;
