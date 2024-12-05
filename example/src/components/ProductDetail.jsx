import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetail() {
    const [product, setProduct]=useState({})
    const {id} = useParams();
    const getProductDetail=async()=>{
        const response = await axios.get(`http://localhost:8000/api/${id}`);
        setProduct(response.data);
    }

    useEffect(()=>{
        getProductDetail();
    },[])
return (
    <div className="product-detail">
       
        <div className="product-info">
            <img className="product-image" src={product.image} alt='product' />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-actions">
                <Link className="product-update" to={`/${product.id}/update`}>Update</Link>
                <Link className="product-delete" to={`/${product.id}/delete`}>Delete</Link>
            </div>
        </div>
    </div>
)
}

export default ProductDetail
