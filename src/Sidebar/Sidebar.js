import React from 'react';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors"; 
import { FaShoppingCart } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({handleChange}) => {
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
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>
    </>
  );
};

export default Sidebar;
