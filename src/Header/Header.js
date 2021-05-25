import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "EMPTY_BASKET",
      });
    }
  };

  const menus = [
    "All",
    "Today's Deals",
    "Customer Service",
    "Gift Cards",
    "Registry",
    "Sell",
  ];

  return (
    <nav className="header">
      <div className="header__upper">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon"></SearchIcon>
        </div>
        <div className="header__nav">
          <Link to={!user && "/signin"} className="header__link">
            <div className="header__option">
              {user ? (
                <span className="header__optionLineOne">
                  Hello, {user.email}
                </span>
              ) : (
                <span className="header__optionLineOne">Sign In</span>
              )}
              <span className="header__optionLineTwo">Account & Lists</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__basket">
              <ShoppingCartIcon style={{ fontSize: 30 }} />
              <span className="header__basketCount">{basket?.length}</span>
            </div>
          </Link>
          {user && (
            <Link to="/" className="header__link">
              <div onClick={login} className="header__option">
                <span className="header__optionLineTwo">Sign Out</span>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="header__lower">
        <div className="header__menus">
          {menus.map((menu, idx) => (
            <span className="header__menu" key={idx}>
              {menu}
            </span>
          ))}
        </div>
        <div className="header__campaign">Amazon's response to COVID-19</div>
      </div>
    </nav>
  );
}

export default Header;
