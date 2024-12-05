import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ShowProduct() {
    const [products,setProducts]=useState([])

    const  getProducts= async ()=>{
      const response = await axios.get('http://localhost:8000/api/')
      setProducts(response.data)
    }
    useEffect(()=>{
getProducts()
    },[])
  return (
    <div className='cards-component'>
      
      {
            products.map((product, index) => {
                return (
                <div key={index} className="product-card">
                  
                   <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Card.Text>{product.category}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <Link to={`/${product.id}/`} >
              <Button variant="primary">detail</Button>
               </Link>
              </Card.Body>
              </Card>
          
                </div>
                )
            })
      }
    </div>
  )
}

export default ShowProduct
