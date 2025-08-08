import item5 from "../assets/image/item5.png";
import item6 from "../assets/image/item6.png";
import item7 from "../assets/image/item7.png";
import item8 from "../assets/image/item8.png";
import starIcon from "../assets/icon/star-icon.svg";
import halfStarIcon from "../assets/icon/half-star-icon.svg";

const NewArrivals = () => {
  return (
    <section className="flex flex-col items-center w-full px-25">
      <h1 className="font-bold text-5xl pt-[72px] pb-[55px]">Top Selling</h1>

      <div className="flex items-center space-x-5">
        <div className="flex flex-col">
          <div className="item-img w-[295px] h-[298px] bg-[#F0EEED] rounded-3xl">
            <img className="rounded-3xl" src={item5} alt="image-5" />
          </div>

          <h3 className="font-bold text-[20px] pt-[16px] pb-[8px]">
            Vertical Striped Shirt
          </h3>

          <div className="flex space-x-[13px] h-[19px] items-center pb-[8px]">
            <div className="list-star">
              <ul className="flex [&>li]:h-[19px] gap-1">
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
              </ul>
            </div>
            <p className="text-sm font-light">
              5/<span className="text-amber-800">5</span>
            </p>
          </div>

          <p className="font-bold text-2xl">$212</p>
        </div>

        <div className="flex flex-col">
          <div className="item-img w-[295px] h-[298px] bg-[#F0EEED] rounded-3xl">
            <img className="rounded-3xl" src={item6} alt="image-6" />
          </div>

          <h3 className="font-bold text-[20px] pt-[16px] pb-[8px]">
            Courage Graphic T-shirt
          </h3>

          <div className="flex space-x-[13px] h-[19px] items-center pb-[8px]">
            <div className="list-star">
              <ul className="flex [&>li]:h-[19px] gap-1">
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
              </ul>
            </div>
            <p className="text-sm font-light">
              4.0/<span className="text-amber-800">5</span>
            </p>
          </div>

          <p className="font-bold text-2xl">$145</p>
        </div>

        <div className="flex flex-col">
          <div className="item-img w-[295px] h-[298px] bg-[#F0EEED] rounded-3xl">
            <img className="rounded-3xl" src={item7} alt="image-7" />
          </div>

          <h3 className="font-bold text-[20px] pt-[16px] pb-[8px]">
            Loose Fit Bermuda Shorts
          </h3>

          <div className="flex space-x-[13px] h-[19px] items-center pb-[8px]">
            <div className="list-star">
              <ul className="flex [&>li]:h-[19px] gap-1">
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
              </ul>
            </div>
            <p className="text-sm font-light">
              3.0/<span className="text-amber-800">5</span>
            </p>
          </div>

          <p className="font-bold text-2xl">$80</p>
        </div>

        <div className="flex flex-col">
          <div className="item-img w-[295px] h-[298px] bg-[#F0EEED] rounded-3xl">
            <img className="rounded-3xl" src={item8} alt="image-8" />
          </div>

          <h3 className="font-bold text-[20px] pt-[16px] pb-[8px]">
            Faded Skinny Jeans
          </h3>

          <div className="flex space-x-[13px] h-[19px] items-center pb-[8px]">
            <div className="list-star">
              <ul className="flex [&>li]:h-[19px] gap-1">
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={starIcon} alt="" />
                </li>
                <li>
                  <img src={halfStarIcon} alt="" />
                </li>
              </ul>
            </div>
            <p className="text-sm font-light">
              4.5/<span className="text-amber-800">5</span>
            </p>
          </div>

          <p className="font-bold text-2xl">$210</p>
        </div>
      </div>

      <button
        className="border w-[218px] h-[52px] rounded-4xl hover:cursor-pointer mt-[32px] mb-[64px]"
        style={{ borderColor: "rgba(0,0,0,0.1)" }}
      >
        View All
      </button>
    </section>
  );
};

export default NewArrivals;
