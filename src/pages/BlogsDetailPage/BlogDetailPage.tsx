

const BlogDetailPage = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 antialiased font-sans">
      <div className="container mx-auto px-4 py-12">
        
        {/* --- Main Hero Image --- */}
        <div className="w-full aspect-[21/9] bg-gray-300 rounded-3xl mb-8"></div>

        {/* --- Article Header --- */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            <div className="text-sm font-semibold text-gray-500">
              Oliver Bennett • 18 Jan 2022
            </div>
          </div>
        </header>

        {/* --- Article Content --- */}
        <article className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. 
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10">Lorem Ipsum Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. 
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
          </p>

          {/* Side-by-Side Images in Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl"></div>
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl"></div>
          </div>

          <h2 className="text-xl font-bold text-gray-900">Lorem Ipsum Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </article>

        {/* --- Suggested Posts --- */}
        <section className="mt-20 border-t pt-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Suggested Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-200 rounded-2xl mb-4 group-hover:opacity-90 transition"></div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 mb-2">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span>Oliver Bennett • 18 Jan 2022</span>
                </div>
                <h4 className="font-bold text-sm text-gray-800 leading-snug line-clamp-2">
                  Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog
                </h4>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default BlogDetailPage;