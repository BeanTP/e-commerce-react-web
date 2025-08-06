import searchIcon from "../assets/icon/search-icon.svg";
import cartIcon from "../assets/icon/cart-icon.svg";
import userIcon from "../assets/icon/user-icon.svg";
import downArrow from "../assets/icon/down-arrow-icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between h-12 mx-25 my-6 bg-white">
      <div className="brand-name font-bold text-4xl py-3.5">
        <span>SHOP.CO</span>
      </div>

      <div className="categories py-3.5">
        <ul className="flex [&>li]:text-sm gap-6">
          <li className="flex items-center gap-1">
            Shop <img className="w-3 h-3" src={downArrow} />
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </div>

      <div className="search-box flex bg-gray-100 rounded-xl py-3 px-4 min-w-100 gap-3">
        <img src={searchIcon} alt="search" />
        <input
          className="flex-1 border-none outline-none forcus:ring-0 text-sm"
          type="text"
          placeholder="Search for product..."
        />
      </div>

      <div className="flex icon-cart-brand gap-3">
        <img src={cartIcon} alt="cart-icon" />

        <img src={userIcon} alt="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
