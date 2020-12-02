import { ADD_TO_CART, REMOVE_TO_CART } from '../constants'
const initialState = [
    {
        image: "https://media.istockphoto.com/photos/chicken-club-sandwich-picture-id476196935",
        id: "Chicken Grill Sandwich",
        cal: "1002 Cal",
        price: 1.5,
        count: 1

    },
    {
        image: "https://media.istockphoto.com/photos/turkey-sandwich-picture-id157431311",
        id: "Turkey Sandwich",
        cal: "1002 Cal",
        price: 1.5,
        count: 1
    },
    {
        image: "https://image.freepik.com/free-photo/sandwich-white-background_93675-62254.jpg",
        id: "Toasted Sandwich",
        cal: "1002 Cal",
        price: 1.0,
        count: 1
    },
    {
        image: "https://crumblejack.com/wp-content/uploads/2018/03/demo-sandwich.jpg",
        id: "Cheese Sandwich",
        cal: "1002 Cal",
        price: 1.0,
        count: 1
    },
    {
        image: "https://previews.123rf.com/images/magone/magone1610/magone161000101/65197187-rye-bread-sandwich-with-chicken-and-egg-isolated-on-white-background.jpg",
        id: "Rye Bread Sandwich",
        cal: "1002 Cal",
        price: 1.0,
        count: 1
    },
]
export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state.map(item => {
                    if (item.id !== action.data) return item;

                    return ({ ...item, count: item.count + 1 })
                })
                
            ]
        case REMOVE_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state.map(item => {
                    if (item.id !== action.data) return item;

                    return ({ ...item, count: item.count - 1 })
                })
            ]
        default:
            return state;
    }
}