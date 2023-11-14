import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";


// Database
import products from "./db/data"

function App() {
const [selectedCategory, setSelectedCategory] = useState(null)

// Input Filter
const [query,SetQuery] = useState("")

const handleInputChange = event => {
  SetQuery(event.target.value)
}

const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1)
);

// Input/RadioFilter
const handleChange = event => (
  setSelectedCategory(event.target.value)
) 


// ButtonFilter

const handleClick = event => {
  setSelectedCategory(event.target.value)
}

function filteredData(products,selected,query) {
  let filteredProducts = products

  // Filtering Input Items

  if(query) {
    filteredProducts = filteredItems
  }

  //Selected Filter

  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    );
}

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
   
    );
}

export default App;
