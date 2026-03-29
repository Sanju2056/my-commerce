import { useParams, Link } from "react-router-dom";
import { blogs } from "../../static";

const BlogDetailPage = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) return <p>Blog not found</p>;

  // Get 3 suggested blogs excluding the current one
  const suggestedBlogs = blogs
    .filter((item) => item.id !== Number(id))
    .slice(0, 3); // take first 3 other blogs

  return (
    <div className="bg-white text-gray-800 antialiased font-sans">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <button
          onClick={() => window.history.back()}
          className="text-sm text-gray-500 hover:text-gray-700 mb-5"
        >
          &larr; Back to Blogs
        </button>

        {/* --- Main Hero Image --- */}
        <div className="w-full bg-gray-300 rounded-lg mb-8">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full lg:h-[600px] object-cover rounded-lg"
          />
        </div>

        {/* --- Article Header --- */}
        <header className="mb-5 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-400 rounded-full">
              <img
                src={blog.userProfile}
                alt={blog.userName}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-sm font-semibold text-gray-500">
              {blog.userName} • {blog.date}
            </div>
          </div>
        </header>

        {/* --- Article Content --- */}
        <article className="prose prose-gray max-w-none text-sm md:text-base text-gray-600 leading-relaxed">
          <p>{blog.fullDesc}</p>
        </article>

        <section className="mt-12 border-t-[1px] border-gray-300 pt-10">
          <h2 className="text-xl md:text-2xl font-bold mb-10 text-gray-900">
            You might also like
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {suggestedBlogs.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="group block bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <img
                      src={item.userProfile}
                      alt={item.userName}
                      className="w-5 h-5 rounded-full inline-block object-cover"
                    />
                    <p className="text-sm text-gray-500 mt-1 ">
                      {item.userName}
                    </p>
                    </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetailPage;