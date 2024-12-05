import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateProduct() {
    const [image , setImage]=useState(null)
    const [name, setName]=useState("")
    const [price , setPrice]=useState("")
    const [description , setDescription]=useState("")
    const [category , setCategory]=useState("")
    const navigate = useNavigate();
    const { id } = useParams();

    const loadProduct = async ()=>{
        const response =await axios.get(`http://localhost:8000/api/${id}/`)
        console.log(response.data)
        setImage(response.data.image);

        setName(response.data.name);
        setPrice(response.data.price);
        setCategory(response.data.category);
        setDescription(response.data.description)
    }

    useEffect(()=>{
     loadProduct();

    },[])
     
    const UpdateProductInfo = async (event) =>{
        event.preventDefault();
        let formData = new FormData();
   
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('category', category);
        if (image!==null) {
          formData.append('image', image);
        }
        try{
            await axios({
                method:'PUT',
                url :`http://localhost:8000/api/${id}/`,
                data:formData,
            }).then(()=>{
          
                navigate('/')
            })
        }catch (error) {
            console.error('There was an error adding the product!', error);
          }
    }
  return (
    <div>
           <div className="add-product-container">
      <h1>Add Product</h1>
    
      <form onSubmit={UpdateProductInfo} className="add-product-form">
        <div className="form-group">
            <img src={image} alt='product'  height="350" width="350"/>
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
      
    </div>
  )
}

export default UpdateProduct
