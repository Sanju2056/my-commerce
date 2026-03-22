import { ArrowRight } from "lucide-react";
import { BlogImage1, BlogImage2, BlogImage3 } from "../../../assets/images";

const blogs = [
  {
    id: 1,
    title: "Top 10 Must-Have Products for Your Everyday Lifestyle",
    author: "Oliver Bennett",
    date: "18 Jan 2022",
    cover: BlogImage1,
  },
  {
    id: 2,
    title: "How to Choose the Perfect Accessories for Any Occasion",
    author: "Oliver Bennett",
    date: "18 Jan 2022",
    cover: BlogImage2,
  },
  {
    id: 3,
    title: "Latest Trends in E-commerce You Should Know in 2026",
    author: "Oliver Bennett",
    date: "18 Jan 2022",
    cover: BlogImage3,
  },
];
const BlogContainer = () => {
  return (
    <section className=" pb-14 px-5 md:px-12 lg:pb-20 lg:px-24">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Ongoings</h2>
            <p className="text-gray-600 max-w-md text-sm">
              Explore the latest updates, ideas, and trends curated just for
              you. Fresh content to keep you informed and inspired.
            </p>
          </div>

          <button className="flex items-center w-max gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Read All Blogs
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col gap-4">
              <div className="w-full h-64 bg-gray-300 rounded-xl overflow-hidden">
                <img className="h-full w-full object-cover " src={blog.cover} />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <p>{blog.author}</p>
                <span>•</span>
                <p>{blog.date}</p>
              </div>

              <h3 className="text-lg font-medium text-gray-800 leading-snug">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContainer;
