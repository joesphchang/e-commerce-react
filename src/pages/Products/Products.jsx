import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import './Products.scss'

const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort , setSort] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
 
  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCategory(isChecked ? [...selectedSubCategory, value] : selectedSubCategory.filter((item) => item !== value))
  };

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type='checkbox' id='1' value={item.id} onChange={handleChange} />
              <label htmlFor={item.id} >{item.attributes.title}</label>
            </div>  
          ))}
          </div>
        <div className="filterItem">
         <h2>Filter By Price</h2>
         <div className="inputItem">
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type='radio' id='asc' value='asc' name='price' onChange={e=> setSort("asc")} /> 
            <label html='asc'>Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type='radio' id='asc' value='asc' name='price' onChange={e=> setSort("asc")} />
            <label html='asc'>Price (Highest First First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src='' alt='' />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCategory} />
      </div>
    </div>
  )
}

export default Products