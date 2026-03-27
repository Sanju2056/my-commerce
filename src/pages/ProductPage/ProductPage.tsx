import { Search, ChevronDown, ShoppingCart } from 'lucide-react';

const ProductPage = () => {
  // Mock data for the categories
  const categories = [
    { name: "Lorem ipsum", count: 11 },
    { name: "Lorem ipsum", count: 0 },
    { name: "Lorem ipsum", count: 11 },
    { name: "Lorem ipsum", count: 2 },
    { name: "Lorem ipsum", count: 11 },
    { name: "Lorem ipsum", count: 11 },
  ];

  // Mock data for the products
  const products = Array(12).fill({
    title: "Double Bed & Side Tables",
    price: "$200.00",
    oldPrice: "$230.00",
    discount: "-12%"
  });

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        
        {/* --- Left Sidebar --- */}
        <aside className="w-full md:w-1/4 space-y-10">
          {/* Categories Section */}
          <div className="border border-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 border-l-4 border-gray-900 pl-3">Categories</h3>
            <ul className="space-y-4">
              {categories.map((cat, i) => (
                <li key={i} className="flex justify-between items-center text-sm text-gray-500 hover:text-black cursor-pointer group">
                  <span>{cat.name} ({cat.count})</span>
                  <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Section */}
          <div className="border border-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 border-l-4 border-gray-900 pl-3">Price Range</h3>
            <div className="space-y-3">
              {["$10.00 - $50.00", "$20.00 - $30.00", "$30.00 - $50.00", "$50.00 - $100.00"].map((range, i) => (
                <label key={i} className="flex items-center gap-3 text-sm text-gray-500 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-black border-gray-300 rounded" checked={i === 0} readOnly />
                  {range}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* --- Main Content Area --- */}
        <main className="w-full md:w-3/4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Our Collection Of Products</h1>
            
            {/* Search Bar */}
            <div className="relative mb-4">
              <input 
                type="text" 
                placeholder="Search Here" 
                className="w-full p-3 pr-12 bg-gray-50 border border-gray-100 rounded-md outline-none focus:ring-1 focus:ring-gray-200"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white">
                <Search size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-1 text-sm text-gray-400">
              <p>Showing 1-12 of 24 items</p>
              <p className="max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </header>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] bg-gray-300 rounded-xl overflow-hidden mb-4">
                  {/* Discount Badge */}
                  <span className="absolute top-3 left-3 bg-black/40 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-sm">
                    {item.discount}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-900 truncate">{item.title}</h4>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center text-sm">
                      <span className="text-gray-400 line-through">{item.oldPrice}</span>
                      <span className="font-bold">{item.price}</span>
                    </div>
                    <button className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-colors">
                      <ShoppingCart size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Footer */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-sm text-gray-400">Showing 12 of 24 items</p>
            <div className="w-64 h-1 bg-gray-100 mx-auto rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-gray-900"></div>
            </div>
            <button className="mt-4 bg-gray-900 text-white px-10 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-800 transition shadow-lg">
              Load More <span className="text-xs">❯</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;