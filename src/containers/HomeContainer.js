
import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../service/actions/actions'
import buttonClick from '../components/buttonClick'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:()=>dispatch(removeToCart())

})
export default connect(mapStateToProps,mapDispatchToProps)(buttonClick)
// export default Home;