import React from 'react'
function Header(props)
{
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
               
            </div>
        </div>
    )
}

export default Header