import bannerImg from "../assets/image/banner.png"

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1] w-full h-auto">
      <div className="container-hero flex items-center">
        <div className="flex justify-between ml-25">
          <div className="flex flex-col flex-1">
            <div className="title pt-27.5">
              <h1 className="font-bold text-6xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
            </div>

            <div className="sub-title py-8 pr-8">
              <p className="font-light text-[16px]">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
            </div>

            <div className="btn pb-12">
              <button className="btn-shopNow w-52.5 h-13 bg-black text-white font-normal text-sm hover:cursor-pointer rounded-4xl">
                Shop Now
              </button>
            </div>

            <div className="flex divide-x divide-gray-300 pb-27.5">
              <div className="pr-8">
                <span className="font-medium text-4xl">200+</span>
                <p className="font-light text-sm">International Brands</p>
              </div>

              <div className="px-8">
                <span className="font-medium text-4xl">2,000+</span>
                <p className="font-light text-sm">High-Quality Products</p>
              </div>

              <div className="pl-8">
                <span className="font-medium text-4xl">30,000+</span>
                <p className="font-light text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img className="h-full" src={bannerImg} alt="banner-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
