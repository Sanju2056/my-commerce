import { useState } from "react";
import {
  PhoneImage1,
  PhoneImage2,
  PhoneImage3,
  PhoneImage4,
} from "../../assets/images";

function ProductDetailPage() {
  const images = [PhoneImage1, PhoneImage2, PhoneImage3, PhoneImage4];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [zoomStyle, setZoomStyle] = useState({});
  const [quantity, setQuantity] = useState(1);

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: "scale(1.5)" });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  return (
    <div className="bg-white text-gray-800 antialiased">
      {/* Header (Minimal - as per screenshot reference) */}
      <header className="p-4 border-b">
        <div className="container mx-auto text-gray-500 text-sm">
          <span>Product Listing</span> &gt; <span>Dummy Product Page</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <section className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-3">
            {images.map((img) => (
              <img
                key={img}
                src={img}
                alt="Product Thumbnail"
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 md:w-24 md:h-24 object-cover border-2 ${
                  selectedImage === img ? "border-gray-900" : "border-gray-200"
                } cursor-pointer hover:border-gray-400 transition`}
              />
            ))}
          </div>

          {/* Main Large Image (with Hover Zoom) */}
          <div className="flex-grow aspect-square bg-gray-100 overflow-hidden relative">
            <img
              src={selectedImage}
              alt="Product Main"
              className="w-full h-full object-cover transition-transform duration-300 ease-out"
              style={zoomStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </section>

        {/* Product Details */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-light text-gray-900">
              Double Bed & Side Tables
            </h1>
            <button className="text-gray-400 hover:text-gray-600">
              {/* Wishlist Icon */}
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-4 border-b pb-4 border-gray-100">
            <p className="text-2xl font-semibold text-gray-900">$54.98</p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-2">(32 reviews)</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magn.
          </p>

          <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2">
            <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipi scing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipi</li>
          </ul>

          <div className="border-t border-b py-6 border-gray-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-sm">
                <button
                  onClick={() => {
                    // Math.max(1, ...) ensures the value never drops below 1
                    setQuantity(Math.max(1, quantity - 1));
                  }}
                  className={`px-3 py-2 text-gray-500 hover:text-gray-900 ${
                    quantity <= 1
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  }`}
                  disabled={quantity <= 1}
                >
                  -
                </button>

                <span className="px-4 py-2 text-gray-900 font-medium">
                  {quantity}
                </span>

                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  className="px-3 py-2 text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  +
                </button>
              </div>
              <button className="flex-grow bg-gray-900 text-white font-medium py-2 rounded-sm hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
            <button className="w-full text-center text-gray-900 border border-gray-900 py-3 rounded-sm hover:bg-gray-50 transition">
              Buy Now
            </button>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Free worldwide shipping on all orders over $100</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Delivers in: 3-7 Working Days.</span>
              <a href="#" className="underline ml-1">
                Shipping & Return
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Description / Reviews Section */}
      <section className="mt-12 md:mt-16 bg-gray-50 border-t">
        <div className="container mx-auto p-4 md:p-8">
          <div className="border-b mb-6 flex gap-6 text-lg font-medium">
            <button className="pb-3 border-b-2 border-gray-900 text-gray-900">
              Description
            </button>
            <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900">
              Reviews
            </button>
          </div>
          <div className="text-gray-600 space-y-4 max-w-4xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetailPage;
