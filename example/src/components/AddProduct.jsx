import axios from 'axios';

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function AddProduct() {
  const [image , setImage]=useState(null)
  const [name, setName]=useState("")
  const [price , setPrice]=useState("")
  const [description , setDescription]=useState("")
  const [category , setCategory]=useState("")
  const navigate = useNavigate();

  const AddProductInfo = async (e) => {
    e.preventDefault();
  
    let formData = new FormData();
   
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    if (image!==null) {
      formData.append('image', image);
    }

    // You can replace the URL with your API endpoint
  try {
    const response = await axios({
      method: 'post',
      url:'http://localhost:8000/api/',
      data: formData,
    });
    console.log(response.data);
      navigate('/');
  } catch (error) {
    console.error('There was an error adding the product!', error);
  }
  };
  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
    
      <form onSubmit={AddProductInfo} className="add-product-form">
        <div className="form-group">
          <label>Select Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddProduct
