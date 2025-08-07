import item1 from "../assets/image/item1.png"
import item2 from "../assets/image/item2.png"
import item3 from "../assets/image/item3.png";
import item4 from "../assets/image/item4.png";
import starIcon from "../assets/icon/star-icon.svg"
import halfStarIcon from "../assets/icon/half-star-icon.svg"

const NewArrivals = () => {
	return (
    <section className="flex flex-col items-center w-full px-25">
      <h1 className="font-bold text-5xl pt-[72px] pb-[55px]">New Arrivals</h1>

      <div className="flex items-center space-x-5">
        <div className="flex flex-col">
          <div className="item-img w-[295px] h-[298px] bg-[#F0EEED] rounded-3xl">
            <img className="rounded-3xl" src={item1} alt="image-1" />
          </div>

          <h3 className="font-bold text-[20px] pt-[16px] pb-[8px]">
            T-shirt with Tape Details
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

          <p className="font-bold text-2xl">$120</p>
        </div>

        <div className="flex flex-col">
          <div className="item-img w-[295px] h-[298px] bg-[#F0EEED] rounded-3xl">
            <img className="rounded-3xl" src={item2} alt="image-2" />
          </div>

          <h3 className="font-bold text-[20px] pt-[16px] pb-[8px]">
            Skinny Fit Jean
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
                  <img src={halfStarIcon} alt="" />
                </li>
              </ul>
            </div>
            <p className="text-sm font-light">
              3.5/<span className="text-amber-800">5</span>
            </p>
          </div>

          <p className="font-bold text-2xl">$240</p>
        </div>

        <div className="flex flex-col">
          <div className="item-img w-[295px] h-[298px] bg-[#F0EEED] rounded-3xl">
            <img className="rounded-3xl" src={item3} alt="image-3" />
          </div>

          <h3 className="font-bold text-[20px] pt-[16px] pb-[8px]">
            Checkered Shirt
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

          <p className="font-bold text-2xl">$180</p>
        </div>

        <div className="flex flex-col">
          <div className="item-img w-[295px] h-[298px] bg-[#F0EEED] rounded-3xl">
            <img className="rounded-3xl" src={item4} alt="image-4" />
          </div>

          <h3 className="font-bold text-[20px] pt-[16px] pb-[8px]">
            Sleeve Striped T-shirt
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

          <p className="font-bold text-2xl">$130</p>
        </div>
      </div>

      <button
        className="border w-[218px] h-[52px] rounded-4xl hover:cursor-pointer mt-[32px] mb-[64px]"
        style={{ borderColor: "rgba(0,0,0,0.1)" }}
      >
        View All
      </button>

      <div className="h-[1px] w-full bg-black opacity-10"></div>
    </section>
  );
	
}

export default NewArrivals;