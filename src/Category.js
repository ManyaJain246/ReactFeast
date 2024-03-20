import React from 'react'

const Category = ({filteritems}) => {
  return (
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
  )
}

export default Category