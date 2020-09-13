import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />

      <span className="header__logoCountry">.in</span>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__flag">
        <div className="header__option">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/25px-Flag_of_India.svg.png"
            alt="indian_flag"
          />
        </div>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Sign In</span>
          <span className="header__optionLineTwo">Accounts & Lists</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo"> &Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Try</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <AddShoppingCartIcon />
          <span className=" header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
