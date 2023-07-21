import './view.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { MdSecurity } from 'react-icons/md';
import {
  TbReplace,
  TbTruckDelivery,
} from 'react-icons/tb';
import { useParams } from 'react-router-dom';

const View = () => {
    const [user, setUser] = useState({
      name: "",
      username: "",
      title: "",
      image: "",
    description: ""
    });
   
    const { id } = useParams();
    useEffect(() => {
      loadUser();
    }, []);

    const loadUser = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log('id');
      setUser(res.data);
      console.log(setUser);
    };

return(
 
<div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
          <img src ={user.image} alt="images" height={350} width={400} className="card-media"/>
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h1 style={{color:'black'}}>{user.category}</h1>
         
        
            <p className="product-data-title">
          
              <h3 style={{color:'blue'}}>{user.title}</h3>
            </p>
            <p className="product-data-price product-data-real-price">
              <h1 style={{color:"green"}}>Deal of the Day: Rs {user.price}</h1>
            </p>
            <p className='text'>{user.description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon1" />
                <p className='letter'>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon2" />
                <p className='letter'>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon3" />
                <p className='letter'>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon4" />
                <p className='letter'>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                
                <span>Available: Stock. </span>
              </p>
              <p>
                Product-id: <span> {id} </span>
              </p>
              <p>
                Brand :<span>Raymonds.  </span>
              </p>
              
            </div><br/><br/>
            <button className="btn"> Add to Cart</button>
          </div>
        </div>

)



}
















/*

    return (
      <div className="container py-4">
      <h1>welcomem to view pages</h1>
        <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
        <h1 className="display-4">Product: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">category: {user.category}</li>
          <li className="list-group-item">title: {user.title}</li>

          <li><img src ={user.image} alt="images" height={200} width={300} className="card-media"/></li>

          <li className="list-group-item">price: {user.price}</li>
         

   
        </ul>
      </div>
    );
  };
  */
  export default View;