
import React from 'react'

function buttonClick(props) {
    return (
        <div>
            <div className="btn-wrapper-item">
                <button className="button-click-left"
                    onClick={() => { props.removeFromCartHandler(props.id) }}>-</button>
                    <div className="counts"> {props.count}</div>
               
                <button className="button-click-right"
                    onClick={() => { props.addToCartHandler(props.id) }}> +</button>
                    
            </div>
        </div>
    )
}
export default buttonClick