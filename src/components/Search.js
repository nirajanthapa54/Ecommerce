import './SearchBar.css';

import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Search=()=> {
  
    
    const [users, setUser] = useState([]);
    const [query,setQuery]= useState("");
    //console.log(query)

    useEffect(() => {
      loadUsers();
    }, []);
  //loading  all College and university Data from usa but it take 2 3 sec to load data in home page because of 
  //high volume
    const loadUsers = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
     
      setUser(result.data);
      console.log(result);
  
    };
    
  
  
    return (
<div>
      <center>
          <div>
          <br/>
           <h1> You Can buy anything according to your need.</h1> <br/>
           <h2> Mini E-commerce </h2> <br/>
            
          </div>
          <div className='input-wrapper'>
<FaSearch id="search-icon"/>
          <input type="text" placeholder='Search product by Name ................' className='search' 
            onChange={e=>setQuery(e.target.value)}
          />
           </div>
           </center>
<br/>

   <section className="main-card--cointainer">

        {users.filter((user)=>user.title.toUpperCase().includes(query)).map(user =>   {


          const { id,price,image,title,description} = user;
return(
    <>
    <div className="card-container" key={user.id}>
      <div className="card">
    <div className="card-body">
       
        <span className="card-author subtle">{title}</span>
        <br/>
       
        </div>
   <img src ={image} alt="images" height={200} width={300} className="card-media"/>
   <center><h4 className="card-title"> Rs.{price}.000</h4></center>

<div className='Add-to-cart'>
 <Link
    class="btn btn-outline-primary mr-2" to={`/View/${user.id}`}>
   View Product
     </Link>
</div>
</div>
</div>
 </>
);
    })}
        
    </section>
  




</div>
    
    )



        }
        export default Search;