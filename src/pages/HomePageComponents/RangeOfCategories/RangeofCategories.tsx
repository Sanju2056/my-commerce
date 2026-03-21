import {
  BedroomTmage,
  diningImage,
  LivingImage,
  SofaImage,
} from "../../../assets/images";

const RangeofCategories = () => {
  return (
    <div className="pb-14  px-5 md:px-12 lg:pb-20 lg:px-24 flex flex-col lg:items-center gap-8 lg:gap-16">
      <div className="flex flex-col">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#3D3D3D]">
          View Our Range of Categories
        </h1>
        <p className="text-xs md:text-base lg:text-center mt-1 lg:mt-3 text-[#666]">
          Explore a variety of categories tailored to your interests.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8  w-full">
        <div className="bg-gray-50 overflow-hidden relative h-[285px] lg:h-[600px] rounded-md cursor-pointer hover:scale-105 transition-transform duration-300">
          {" "}
          <img className="h-full w-full object-cover " src={BedroomTmage} />
          <p className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
            Bedroom Furniture
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-gray-400 relative overflow-hidden h-[285px] rounded-md cursor-pointer hover:scale-105 transition-transform duration-300">
            {" "}
            <img className="h-full w-full object-cover " src={SofaImage} />
            <p className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
              Sofa Furniture
            </p>
          </div>
          <div className="bg-gray-400 relative overflow-hidden h-[285px] rounded-md cursor-pointer hover:scale-105 transition-transform duration-300">
            {" "}
            <img className="h-full w-full object-cover " src={diningImage} />
            <p className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
              Dining Furniture
            </p>
          </div>
        </div>
        <div className="bg-gray-500  relative overflow-hidden h-[285px] lg:h-[600px]  rounded-md cursor-pointer hover:scale-105 transition-transform duration-300">
          {" "}
          <img className="h-full w-full object-cover " src={LivingImage} />
          <p className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
            Living Furniture
          </p>
        </div>
      </div>
    </div>
  );
};

export default RangeofCategories;
