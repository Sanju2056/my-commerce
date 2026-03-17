import { bg } from "../../../assets/images";

const Hero = () => {
  return (
    <section
      className="w-full py-52 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10    flex flex-col items-center md:gap-10">
        <div className="text-center max-w-4xl px-2">
          <h1 className="text-2xl md:text-6xl font-bold text-white leading-tight">
            Discover Products You'll Love
          </h1>

          <p className="mt-4 md:mt-6 text-gray-200 text-lg md:text-2xl">
            Shop the latest trends with premium quality and unbeatable prices.
            Find everything you need, all in one place.
          </p>

          <div className="flex justify-center mt-10 gap-4">
            <button className="px-6 md:px-10  py-2   md:py-3 bg-white text-black rounded-lg hover:bg-gray-400 transition">
              Shop Now
            </button>

            <button className="px-6 md:px-10  py-2   md:py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
