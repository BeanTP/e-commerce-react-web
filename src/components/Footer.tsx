import letterIcon from "../assets/icon/letter-icon.svg"
import twitterIcon from "../assets/icon/twitter-icon.svg"
import fbIcon from "../assets/icon/fb-icon.svg"
import igIcon from "../assets/icon/ig-icon.svg"
import githubIcon from "../assets/icon/github-icon.svg"
import visaIcon from "../assets/icon/visa-icon.svg"
import masterCardIcon from "../assets/icon/master-card-icon.svg"
import paypalIcon from "../assets/icon/paypal-icon.svg"
import applePayIcon from "../assets/icon/apple-pay-icon.svg"
import ggPayIcon from "../assets/icon/gg-pay-icon.svg"

const Footer = () => {
	return (
    <footer className="w-full max-h-[589px] mt-[80px]">
      <div className="flex items-center justify-around h-[180px] bg-black rounded-[20px] mx-25 px-[64px] relative z-10 -mb-[90px]">
        <div className="flex-1/2">
          <h1 className="text-white font-bold text-[40px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>

        <div className="flex-1/2 flex flex-col items-end space-y-3">
          <div className="flex bg-white w-[349px] h-[48px] rounded-4xl gap-3 px-[16px] py-[12px]">
            <img src={letterIcon} alt="letter-icon" />
            <input
              className="bg-white w-full rounded-4xl"
              type="text"
              placeholder="Enter your email address"
            />
          </div>

          <button className="bg-white w-[349px] h-[48px] rounded-4xl px-[16px] py-[12px] hover:cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full h-[499px] bg-[#F0F0F0] px-25">
        <div className="flex items-stretch justify-between mt-[144px] mb-[50px]">
          <div className="flex-1/5 flex flex-col w-fit h-full justify-between space-y-[25px] max-w-[248px]">
            <h1 className="font-bold text-[32px] w-fit">SHOP.CO</h1>
            <p className="font-light text-sm w-fit">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>

            <div className="flex space-x-3 w-fit">
              <a href="#">
                <img src={twitterIcon} alt="twitter-icon" />
              </a>
              <a href="#">
                <img src={fbIcon} alt="fb-icon" />
              </a>
              <a href="#">
                <img src={igIcon} alt="ig-icon" />
              </a>
              <a href="#">
                <img src={githubIcon} alt="github-icon" />
              </a>
            </div>
          </div>

          <div className="flex-1/5 flex flex-col w-auto h-full justify-between max-w-[104px]">
            <h1 className="font-medium text-[16px]">COMPANY</h1>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>

          <div className="flex-1/5 flex flex-col w-auto h-full justify-between max-w-[136px]">
            <h1 className="font-medium text-[16px]">HELP</h1>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Term & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="flex-1/5 flex flex-col w-fit h-full justify-between max-w-[149px]">
            <h1 className="font-medium text-[16px]">FAQ</h1>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Orders</a>
            <a href="#">Payments</a>
          </div>

          <div className="flex-1/5 flex flex-col w-fit h-full justify-between max-w-[153px]">
            <h1 className="font-medium text-[16px]">RESOURCES</h1>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>

        <div className="h-[1px] w-full bg-black opacity-10 mb-[20px]"></div>

        <div className="flex items-center justify-between">
          <p className="text-[14px] font-light">
            © 2000-2021, All rights reserved
          </p>
          <div className="flex">
            <img src={visaIcon} alt="visa-icon" />
            <img src={masterCardIcon} alt="master-card-icon" />
            <img src={paypalIcon} alt="paypal-icon" />
            <img src={applePayIcon} alt="apple-pay-icon" />
            <img src={ggPayIcon} alt="gg-pay-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;