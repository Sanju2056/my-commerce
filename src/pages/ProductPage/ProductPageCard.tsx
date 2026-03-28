import { ShoppingCart } from "lucide-react";

const ProductPageCard = ({ product }: any) => {
  return (
    <div className="group border cursor-pointer border-gray-100 rounded-xl p-4 hover:shadow-md transition bg-white">
      
      {/* Image */}
      <div className="h-64 flex items-center justify-center  rounded-lg mb-4 overflow-hidden">
        <img
          src={product?.image}
          alt={product?.title}
          className="h-full object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Info */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product?.title}
        </h4>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">
            ${product?.price}
          </span>

          <button className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;