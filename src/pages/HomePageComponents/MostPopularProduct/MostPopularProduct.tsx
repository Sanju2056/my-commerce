import { ArrowRight } from "lucide-react";
import { products } from "../../../static";
import { Link } from "react-router-dom";

const MostPopularProduct = () => {
  return (
    <div>
      <div className="pb-14 px-5 md:px-12 lg:pb-20 lg:px-24 ">
        <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-top mb-7 md:mb-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Most Popular Products
            </h2>

            <p className="text-sm text-gray-600 w-64 lg:w-96">
              Discover our handpicked selection of top-rated products, chosen
              for their quality and popularity.
            </p>
          </div>

          <Link to="/products" className="flex justify-center gap-2 w-max h-max px-10 text-lg cursor-pointer py-3 rounded-[24px] items-center bg-[#282828] text-white font-medium">
            View All
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Products Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white relative flex flex-col border rounded-lg"
            >
              <div className="h-80">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.name}
                />
              </div>

              <div className="bg-red-400 text-white px-3 py-1 absolute rounded-lg top-3 left-3">
                13%
              </div>

              <div className="pl-3 py-4 flex flex-col gap-2">
                <h3 className="text-lg font-medium text-gray-600">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-xl text-gray-800 font-semibold">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex lg:grid lg:grid-cols-4 gap-8 overflow-x-auto lg:overflow-visible scroll-smooth no-scrollbar">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white relative min-w-[80%] md:min-w-[45%] lg:min-w-0 flex flex-col border rounded-lg flex-shrink-0"
            >
              <div className="h-80">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.name}
                />
              </div>

              <div className="bg-red-400 text-white px-3 py-1 absolute rounded-lg top-3 left-3">
                13%
              </div>

              <div className="pl-3 py-4 flex flex-col gap-2">
                <h3 className="text-lg font-medium text-gray-600">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-xl text-gray-800 font-semibold">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopularProduct;
