import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import ProductPageCard from "./ProductPageCard";
import { useState, useRef, useEffect } from "react";

const ITEMS_PER_PAGE = 10;

const ProductPage = ({ products }: any) => {
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    setProductList(products);
  }, [products]);
  console.log("Products in ProductPage:", productList);

  const [page, setPage] = useState(0);
  const [slideDir, setSlideDir] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(productList.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const currentProducts = productList.slice(start, start + ITEMS_PER_PAGE);

  const categories = [
    { name: "Lorem ipsum", count: 11 },
    { name: "Lorem ipsum", count: 0 },
    { name: "Lorem ipsum", count: 11 },
    { name: "Lorem ipsum", count: 2 },
    { name: "Lorem ipsum", count: 11 },
    { name: "Lorem ipsum", count: 11 },
  ];

  const triggerSlide = (direction: "left" | "right", newPage: number) => {
    if (animating) return;
    setSlideDir(direction);
    setAnimating(true);

    setTimeout(() => {
      setPage(newPage);
      setSlideDir(direction === "left" ? "right-enter" : ("left-enter" as any));
      setTimeout(() => {
        setAnimating(false);
        setSlideDir(null);
      }, 350);
    }, 350);
  };

  const handleNext = () => {
    if (page < totalPages - 1) triggerSlide("left", page + 1);
  };

  const handlePrev = () => {
    if (page > 0) triggerSlide("right", page - 1);
  };

  const getGridClass = () => {
    if (!slideDir) return "slide-idle";
    if (slideDir === "left") return "slide-out-left";
    if (slideDir === "right") return "slide-out-right";
    if (slideDir === ("right-enter" as any)) return "slide-in-right";
    if (slideDir === ("left-enter" as any)) return "slide-in-left";
    return "slide-idle";
  };
  // const handleSearch = () => {
  //   console.log("Search initiated with:", searchValue);
  //   productList.filter((filtered: any, index: any) => {
  //     if (filtered.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //       setProductList(searchValue ? [filtered] : products);
  //     }
  //     });
  // };
  // useEffect(() => {
  //   const filteredProducts = products.filter((item: any) =>
  //     item.title.toLowerCase().includes(searchValue.toLowerCase())
  //   );

  //   setProductList(searchValue ? filteredProducts : products);
  // }, [searchValue, products]);
 useEffect(() => {
  const filteredProducts = products.filter((item: any) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  setProductList(searchValue ? filteredProducts : products);
  setPage(0);
}, [searchValue, products]);
  return (
    <>
      <style>{`
        .slide-wrapper {
          overflow: hidden;
          position: relative;
        }

        .slide-idle {
          transform: translateX(0);
          opacity: 1;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
        }

        .slide-out-left {
          transform: translateX(-60px);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
        }

        .slide-out-right {
          transform: translateX(60px);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
        }

        .slide-in-left {
          transform: translateX(0);
          opacity: 1;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
          animation: slideFromRight 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .slide-in-right {
          transform: translateX(0);
          opacity: 1;
          animation: slideFromLeft 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideFromRight {
          from { transform: translateX(60px); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }

        @keyframes slideFromLeft {
          from { transform: translateX(-60px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }

        .page-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          transition: background 0.2s, transform 0.2s;
          cursor: pointer;
        }

        .page-dot.active {
          background: #111827;
          transform: scale(1.3);
        }
      `}</style>

      <div className="bg-white min-h-screen font-sans text-gray-800">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-1/4 space-y-10">
            <div className="border border-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-6 border-l-4 border-gray-900 pl-3">
                Categories
              </h3>
              <ul className="space-y-4">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center text-sm text-gray-500 hover:text-black cursor-pointer group"
                  >
                    <span>
                      {cat.name} ({cat.count})
                    </span>
                    <ChevronDown
                      size={14}
                      className="group-hover:translate-y-0.5 transition-transform"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-6 border-l-4 border-gray-900 pl-3">
                Price Range
              </h3>
              <div className="space-y-3">
                {[
                  "$10.00 - $50.00",
                  "$20.00 - $30.00",
                  "$30.00 - $50.00",
                  "$50.00 - $100.00",
                ].map((range, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-500 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-black border-gray-300 rounded"
                      defaultChecked={i === 0}
                    />
                    {range}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <main className="w-full md:w-3/4">
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-6">
                Our Collection Of Products
              </h1>
              <div className="relative mb-4">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search Here"
                  className="w-full p-3 pr-12 bg-gray-50 border border-gray-100 rounded-md outline-none focus:ring-1 focus:ring-gray-200"
                />
                {searchValue ? (
                  <button
                    className="absolute right-12 top-1/2 -translate-y-1/2 p-2 rounded-full text-gray-80 transition"
                    onClick={() => {
                      setSearchValue("");
                      
                    }}
                  >
                    <X size={20} />
                  </button>
                ) : null}

                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white"
                 
                >
                  <Search size={16} />
                </button>
              </div>
              <div className="flex flex-col gap-1 text-sm text-gray-400">
                <p>
                  Showing {start + 1}–
                  {Math.min(start + ITEMS_PER_PAGE, products.length)} of{" "}
                  {products.length} items
                </p>
              </div>
            </header>

            {/* Animated grid */}
            <div className="slide-wrapper">
              <div ref={gridRef} className={getGridClass()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProducts.length > 0 ? (
                    currentProducts.map((item: any) => (
                      <ProductPageCard key={item.id} product={item} />
                    ))
                  ) : (
                    <p>Loading products...</p>
                  )}
                </div>
              </div>
            </div>

            {/* Pagination controls */}
            <div className="mt-16 text-center space-y-4">
              <p className="text-sm text-gray-400">
                Page {page + 1} of {totalPages || 1}
              </p>

              {/* Prev / Next buttons */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <button
                  onClick={handlePrev}
                  disabled={page === 0 || animating}
                  // className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-700 transition shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={page >= totalPages - 1 || animating}
                  // className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-700 transition shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
