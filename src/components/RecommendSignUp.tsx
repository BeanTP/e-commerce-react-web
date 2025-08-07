import { useState } from "react";
import xIcon from "../assets/icon/x-icon.svg";

const RecommendSignUp = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="flex items-center justify-between h-auto bg-black text-white text-sm font-light">
      <p className="mx-auto py-2.5">
        Sign up and get 20% off to your first order.{" "}
        <span className="font-normal underline decoration-0">
          <a href="#">Sign Up Now</a>
        </span>
      </p>

      <button
        className="px-5 py-2.5 hover:cursor-pointer"
        onClick={() => setShow(false)}
      >
        <img className="w-5 h-5" src={xIcon} alt="close-icon" />
      </button>
    </div>
  );
};

export default RecommendSignUp;
