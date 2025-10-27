import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="-mt-20 relative ">
      <h1 className="text-center text-2xl font-Raleway font-bold px-4">
        All your files in one secure location, accesible anywere.
      </h1>
      <p className="mt-2.5 text-center text-sm px-4">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <div className="text-center mt-6 mb-10">
        <Button text="Get Started" styles="w-[240px]" />
      </div>
    </section>
  );
};
