import React from 'react'

const Food = (props) => {
  return (
    <div>
      <div className="container-fluid mt-5">
            <div className="row ">
                <div className="col-11 mx-auto">
                <div className="row" >
                {
                    props.items.map((elem)=>{
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

export default Food;
