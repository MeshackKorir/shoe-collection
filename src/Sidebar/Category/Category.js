import React from 'react'
import "./Category.css"

const Category = () => {
  return (
    <h2 className='sidebar-title'>
      
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
            <span className='checkmark'></span>All
        </label>
      </div>

      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
            <span className='checkmark'></span>Sneakers
        </label>
      </div>

      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
            <span className='checkmark'></span>Flats
        </label>
      </div>

      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
            <span className='checkmark'></span>Sandals
        </label>
      </div>

      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
            <span className='checkmark'></span>Heels
        </label>
      </div>
    </h2>
  )
}

export default Category