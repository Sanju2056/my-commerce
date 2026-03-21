import { products } from "../../../static";

const FeatureProduct = () => {
  return (
    <div className="py-14  px-5 md:px-12 lg:py-20 lg:px-24 bg-gray-100">
      <div className="flex flex-col md:flex-row md:justify-between   md:items-top mb-7 md:mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold mb-1 md:mb-0">
          Featured Products
        </h2>

        <p className="text-sm text-gray-600 w-64 lg:w-96">
          Discover our handpicked selection of top-rated products, chosen for
          their quality and popularity.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar">
        {products.map((item) => (
          <div
            key={item.id}
            className=" bg-white relative min-w-[100%] md:min-w-[40%] lg:min-w-[25%]  xl:min-w-[20%] flex-shrink-0 flex flex-col border rounded-lg overflow-hidden"
          >
            <div className="h-80">
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.name}
              />
            </div>
            <div className="bg-red-400 text-white border-none w-max px-3 py-1 absolute rounded-lg top-3 left-3">
              13%
            </div>
            <div className="pl-3 py-4 w-56 flex flex-col gap-2">
              <h3 className="text-lg font-medium text-gray-600">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-xl text-gray-800 font-semibold">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
