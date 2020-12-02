import React from 'react'
import Data from './data'
function Home() {
    return (
        <div className="main">
           <Data/>
         <div className="menu">
            <ul>    
                <li> <img src="https://www.flaticon.com/svg/static/icons/svg/1046/1046857.svg" width="40px" height="15px"/>Restaurant</li>
                <li ><img src="https://static.thenounproject.com/png/3473638-200.png" width="35px" height="15px"/>Products </li>
                <li>  <img src="https://cdn2.iconfinder.com/data/icons/business-social-media-and-marketing-basic/64/influencer-star-512.png" width="33px" height="15px"/>Influencers </li>
                <li><img src="https://icons.iconarchive.com/icons/icons8/ios7/256/Ecommerce-Shopping-Bag-icon.png"width="34px" height="15px"/> Cart </li>
                <li><img src="https://icon-library.com/images/my-account-icon-png/my-account-icon-png-5.jpg" width="36px" height="15px"/> Account</li>
            </ul>
         </div>
        </div>
    )
}
export default Home