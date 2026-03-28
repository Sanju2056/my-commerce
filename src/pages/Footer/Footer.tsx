import {
  ApplePayImage,
  MasterCardImage,
  PayPalImage,
  VisaImage,
} from "../../assets/images";
import { footerData } from "../../static";
import { ArrowRightIcon } from "lucide-react";

const Footer = () => {
  const icons = [
    { image: MasterCardImage, alt: "MasterCard" },
    { image: VisaImage, alt: "Visa" },
    { image: PayPalImage, alt: "PayPal" },
    { image: ApplePayImage, alt: "Apple Pay" },
  ];

  return (
    <footer className="bg-gray-100  px-5 md:px-12  lg:px-24">
      <div className=" mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerData.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{item.title}</h4>

                <div className="flex flex-col gap-2">
                  {item.children.map((child, i) => (
                    <p
                      key={i}
                      className="text-sm text-gray-600 cursor-pointer hover:text-black transition"
                    >
                      {child.title}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in the Know</h4>

            <div className="flex items-center border-b border-gray-400 pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none w-full text-sm"
              />
              <ArrowRightIcon className="cursor-pointer" size={18} />
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Subscribe to get updates on new products and offers.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left */}
          <div className="text-sm text-gray-600 text-center md:text-left">
            © 2026 NorthStar eCommerce. All rights reserved.
            <div className="flex gap-4 justify-center md:justify-start mt-2">
              <p className="cursor-pointer hover:text-black">Privacy Policy</p>
              <p className="cursor-pointer hover:text-black">
                Terms & Conditions
              </p>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="flex gap-4 items-center">
            {icons.map((item, index) => (
              <div
                key={index}
                className="h-10 w-10 flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
