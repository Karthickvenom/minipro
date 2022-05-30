import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Harish Mobiles
        </span>
        
        
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i class="fas fa-cart-plus"></i>
          </span>

          <span> cart {size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;