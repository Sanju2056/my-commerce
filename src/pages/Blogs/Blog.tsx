
const Blog = () => {
  const posts = Array(9).fill({
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    author: "Oliver Bennett",
    date: "18 Jan 2022",
    excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
  });

  return (
    <div className="bg-white  text-gray-800 antialiased">
        <div className=" mx-auto px-4 py-12 container">

        {/* --- Our Featured Posts Section --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-gray-700">Our Featured Posts</h2>
          
          {/* Main Hero Post */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="aspect-[16/10] bg-gray-300 rounded-3xl"></div>
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
                {posts[0].title}
              </h1>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {posts[0].excerpt} Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <div className="text-xs font-semibold text-gray-500">
                  {posts[0].author} • {posts[0].date}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Sub-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-[4/3] bg-gray-300 rounded-2xl"></div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span>{post.author} • {post.date}</span>
                </div>
                <h3 className="font-bold text-sm leading-snug text-gray-800 line-clamp-2">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* --- Latest Posts Section --- */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-700">Latest Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-[4/3] bg-gray-300 rounded-2xl"></div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span>{post.author} • {post.date}</span>
                </div>
                <h3 className="font-bold text-sm leading-snug text-gray-800 line-clamp-2">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 flex justify-center">
            <button className="bg-[#2D2D2D] text-white px-10 py-3 rounded-full text-sm font-bold hover:bg-black transition-colors shadow-md">
              Load More Blogs
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Blog;