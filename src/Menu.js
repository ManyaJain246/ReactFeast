import React, {useState} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import data from "./data";


const Menu = () => {
    const[items, setitems]=useState(data);

    const filteritems=(cateitems)=>{
      const updateitems=data.filter((curele)=>{
        return curele.category===cateitems;
      })

      setitems(updateitems);
    }


  return (
    <div>
        <h1 className="text-center mt-5"> Order your favourite dish now !!</h1>
        <hr/>
<div>
        <div className="main d-flex justify-content-around">
            <button className="buttons btn btn-warning" onClick={()=>filteritems("breakfast")}>Breakfast</button>
            <button className="buttons btn btn-warning" onClick={()=>filteritems("lunch")}>Lunch</button>
            <button className="buttons btn btn-warning" onClick={()=>filteritems("snacks")}>Snacks</button>
            <button className="buttons btn btn-warning" onClick={()=>filteritems("dinner")}>Dinner</button>
            <button className="buttons btn btn-warning" onClick={()=>filteritems("desserts")}>Desserts</button>
            <button className="buttons btn btn-warning" onClick={()=>filteritems("drinks")}>Drinks</button>
            <button className="buttons btn btn-warning" onClick={()=>setitems(data)}>All</button>
        </div>
        </div>

        <div className="container-fluid mt-5">
            <div className="row ">
                <div className="col-11 mx-auto">
                <div className="row" >
                {
                    items.map((elem)=>{
                     const {id, image, name, category, description, price}=elem;

                     return(
                        <>
                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div class="card">
                      <img class="card-img-top" src={image} width="300px" height="300px" alt="Card image cap"/>
                       <div class="card-body"> 
                       <h4>{name}</h4>
                       <p>{description}</p>
                       <div className="dist">
                       <h4>Price: {price}</h4>
                       <button>Order Now</button>
                       </div>
                       <p className="mt-3">Prices may vary on special days.</p>
                        </div>
                         </div>
                    </div> 
                        </>
                     )
                    })
                }
                    
                </div>
                </div>
                
            </div>
           
        </div>
        
        
      
    </div>
  )
}

export default Menu