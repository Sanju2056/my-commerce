import { useState } from "react";
import { blogs } from "../../static";
import { Link } from "react-router-dom";
const Blog = () => {
  const no_of_post = 6;
  const [visibleBlogs, setVisibleBlogs] = useState(no_of_post);
  const [isloading, setIsLoading] = useState(false);
  const posts = blogs.slice(0, visibleBlogs);
  const LoadMore = () => {
    setIsLoading(true);
    setVisibleBlogs((prev) => Math.min(prev + no_of_post, blogs.length));
    setIsLoading(false);
  };

  return (
    <div className="bg-white  text-gray-800 antialiased">
      <div className=" mx-auto px-4 py-8 md:py-12 container">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-8 text-gray-700">
            Our Featured Posts
          </h2>

          <div className="grid grid-cols-1 gap-8 items-center">
            <Link to={`/blog/${posts[0].id}`} className="rounded-lg">
              <img
                src={posts[0].thumbnail}
                alt={posts[0].title}
                className="w-full lg:h-[600px] object-cover rounded-lg"
              />
            </Link>
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
                {posts[0].title}
              </h1>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {posts[0].shortDesc}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 bg-gray-400 rounded-full">
                  <img
                    src={posts[0].userProfile}
                    alt={posts[0].userName}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-xs font-semibold text-gray-500">
                  {posts[0].userName} • {posts[0].date}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 border-t-[1px] border-gray-300  pt-10">
          <h2 className="text-2xl font-bold mb-8 text-gray-700">
            Latest Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {isloading ? (
              <div>Loading...</div>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group block bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition"
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 flex flex-col gap-1">
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <img
                        src={post.userProfile}
                        alt={post.userName}
                        className="w-5 h-5 rounded-full inline-block object-cover"
                      />
                      <p className="text-sm text-gray-500 mt-1 ">
                        {post.userName}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* Load More Button */}
          {visibleBlogs < blogs.length && (
            <div className="text-center mt-10 flex items-center justify-center">
              <button
                onClick={LoadMore}
                disabled={isloading}
                className="flex items-center w-max gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              >
                {isloading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Loading...
                  </>
                ) : (
                  "Load More"
                )}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Blog;
