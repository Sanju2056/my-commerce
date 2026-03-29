import { ArrowRight } from "lucide-react";
import { blogs } from "../../../static";
import { Link } from "react-router-dom";

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

          <Link to="/blog" className="flex items-center w-max gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Read All Blogs
            <ArrowRight size={16} />
          </Link >
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog.id} className="flex flex-col gap-4">
              <div className="w-full h-72 bg-gray-300 rounded-xl overflow-hidden">
                <img className="h-full w-full object-cover " src={blog.thumbnail} />
              </div>

              <div className="flex items-center  gap-2 text-sm text-gray-500">
                <div className="w-6 bg-gray-400 rounded-full"><img src={blog.userProfile} alt={blog.userName} className="w-full h-full object-cover rounded-full" /></div>
                {/* <p>{blog.title}</p> */}
               
              <h3 className=" font-medium text-gray-600 leading-snug">
                {blog.title}
              </h3>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContainer;
