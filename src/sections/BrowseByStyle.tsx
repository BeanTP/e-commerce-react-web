import sampleStyle1 from "../assets/image/sample-style-1.png"
import sampleStyle2 from "../assets/image/sample-style-2.png";
import sampleStyle3 from "../assets/image/sample-style-3.png";
import sampleStyle4 from "../assets/image/sample-style-4.png";

const BrowseByStyle = () => {
	return (
    <section className="h-[866px] w-full px-25">
      <div className="flex flex-col items-center bg-[#F0F0F0] w-auto h-full rounded-4xl">
        <h1 className="font-bold text-[48px] py-[70px]">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="flex px-[64px] pb-[20px] w-full h-[289px] space-x-5">
          <div
            className="flex-1/3 bg-white rounded-4xl bg-no-repeat bg-right bg-[length:100%_100%]"
            style={{ backgroundImage: `url(${sampleStyle1})` }}
          >
            <p className="font-medium text-[36px] pt-[15px] pl-[25px]">
              Casual
            </p>
          </div>

          <div
            className="flex-2/3 bg-white rounded-4xl bg-no-repeat bg-right bg-[length:100%_100%]"
            style={{ backgroundImage: `url(${sampleStyle2})` }}
          >
            <p className="font-medium text-[36px] pt-[15px] pl-[25px]">
              Formal
            </p>
          </div>
        </div>

        <div className="flex px-[64px] pb-[20px] w-full h-[289px] space-x-5">
          <div
            className="flex-2/3 bg-white rounded-4xl bg-no-repeat bg-right bg-[length:100%_100%]"
            style={{ backgroundImage: `url(${sampleStyle3})` }}
          >
            <p className="font-medium text-[36px] pt-[15px] pl-[25px]">
              Party
            </p>
          </div>

          <div
            className="flex-1/3 bg-white rounded-4xl bg-no-repeat bg-right bg-[length:100%_100%]"
            style={{ backgroundImage: `url(${sampleStyle4})` }}
          >
            <p className="font-medium text-[36px] pt-[15px] pl-[25px]">
              Gym
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrowseByStyle;