"use client";
import { BigBannerProps } from "./big-banner.types";
import NewsLetter from "./newsletter/newsletter";

const BigBanner: React.FC<BigBannerProps> = ({ title, content, img, url }) => {
  return (
    <div className="bg-[#F0F3F8] py-10">
      <div className="containerD flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">

        {/* متن سمت چپ */}
        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Subscribe &amp; Get
            <span className="px-2 text-shop-gray-1000">10%</span>
            Discount
          </h3>

          <p className="mt-3 text-gray-600 text-sm lg:text-base">
            Get E-mail updates about our latest shop and
            <span className="font-semibold text-gray-800 px-1">special offers.</span>
          </p>
        </div>

        {/* Newsletter Input */}
        <div className="w-full lg:w-auto">
          <NewsLetter />
        </div>
        
      </div>
    </div>
  );
};

export default BigBanner;
