import { ArrowRight } from "lucide-react";
import { BannerImage } from "../../../assets/images";

const Banner = () => {
  return (
    <div
      className="flex items-center flex-col justify-center xl:justify-normal xl:flex-row gap-10 md:gap-32 px-5 md:px-12 lg:px-24 bg-red-400 w-full h-[750px] bg-cover bg-center bg-no-repeat relative "
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="flex flex-col gap-8">
        <p className="text-3xl md:text-5xl font-semibold xl:w-[600px] text-white ">
          Have a Look at Our Unique Selling Proportions
        </p>
        <div className="flex justify-center gap-2 h-max w-max px-10 text-lg cursor-pointer py-3 rounded-[24px] items-center bg-[#e6e1e1] text-[#333] font-medium">
          Read More
          <ArrowRight className="size-4" />
        </div>
      </div>
      <div className="flex flex-col gap-8 text-white">
        <p className="md:text-xl">
          We deliver high-quality products designed to meet your everyday needs.
          Our commitment to excellence ensures reliability, performance, and
          customer satisfaction in every purchase.
        </p>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-2xl md:text-5xl font-semibold text-white">99%</p>
            <p className="text-xs md:text-sm">
              Customer Satisfaction Rate Consistently rated highly by our
              customers for quality and service.
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-5xl font-semibold text-white">95%</p>
            <p className="text-xs md:text-sm">
              On-Time Delivery Rate Our logistics network ensures timely
              delivery of your orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
