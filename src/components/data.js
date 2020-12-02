import React, { Component } from 'react'
import { connect } from 'react-redux'
import ButtonClick from './buttonClick'
import { addToCart, removeToCart } from './../service/actions/actions'

export class data extends Component {

    getTotal = () => {

        let sum = 0;

        this.props.data?.forEach(item => {

            sum += item.count * item.price;
        });

        return sum;
    }
    getDeliveryCharge = () => {

        if (this.props.data?.filter(item => item.count > 0).length >= 5) return 0;
        if (this.props.data?.filter(item => item.count > 0).length <= 5) return 1;
    }
    render() {
        console.log(this.props);
        return (
            <div className="cart-wrapper">
                <div className="cart-list"> 
                {this.props.data?.filter(item => item.count > 0).map((item) => 
               
               <div className="cart-box">
                    <div className="text-wrapper-item">
                        <img className="add-to-cart-img" src={item.image} height="95px" width="105px" />
                        <div className="item-map">
                            <span className="item-id">
                                {item.id}
                            </span>
                            <span className="item-cal">
                                <img src="https://image.flaticon.com/icons/png/128/71/71368.png" width="12px" height="12px" />
                                {item.cal}
                            </span>
                            <span className="item-price">
                                {item.price}KWD
                            </span>
                        </div>
                    </div>
                    <ButtonClick
                        count={item.count}
                        id={item.id}
                        addToCartHandler={this.props.addToCartHandler}
                        removeFromCartHandler={this.props.removeFromCartHandler} />
                </div>)}
                </div>
                <div className="textarea">
                    <h4 className="font"> Add a note</h4>
                    <textarea type="text" placeholder="Let us know any additional request"></textarea>
                </div>
                <div className="total-item">
                    <h4>Cart Total</h4> <h4>{(this.getTotal()).toFixed(3)} KWD</h4>
                    <h4>Delivery charges</h4> <h4>{(this.getDeliveryCharge()).toFixed(3)} KWD</h4>
                    <h4>Total</h4> <h4>{(this.getTotal() + this.getDeliveryCharge()).toFixed(3)} KWD</h4>
                    <button className="add-items"> + Add more  </button>
                </div>
                <button className="check-out"> Check out </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.cardItems
});

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeFromCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(data)
