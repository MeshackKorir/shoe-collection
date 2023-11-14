import React from 'react';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors"; 
import { FaShoppingCart } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container'>
          <h1>
            <a href='#'>
              <FaShoppingCart />
            </a>
          </h1>
        </div>
        {/* <FaShoppingCart /> */}
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
