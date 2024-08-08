const intialProductData = {
    products: [],
    cart: [],
    initialFormData: [],
    initialRegisterData: [],
    isLogin: false,
    
    profilename:""
}

const productReducer = (state = intialProductData, action) => {
    switch (action.type) {
        case "products":
            state = {
                ...state,
                products: action.payload
            }
            break;


        case "cart":
            const existingProduct = state.cart.find((product) => product.id === action.payload.id);

            if (existingProduct) {
                // Product already exists in the cart, update the quantity
                const updatedCart = state.cart.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );

                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                // Product doesn't exist in the cart, add it
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
            // state={
            //     ...state,
            //     cart:[...state.cart, action.payload]
            // }
            break;
        case "removeCart":
            state = {

                ...state,
                cart: state.cart.filter((ele) => ele.id !== action.removeCart)
            }
            break;

        case "ChangeQuentity":
            const { id, updateQuentity } = action.quentity;
            const updatedCart = state.cart.map((ele) =>
                ele.id === id ? { ...ele, quantity: updateQuentity } : ele
            );
            return {
                ...state,
                cart: updatedCart,
            };
            break;
        case "checkout":
            state = {
                ...state,
                initialFormData: action.address
                // initialFormData: action.address
            }
            break;
        case "login":
            state = {
                ...state,
                isLogin: action.loginData

            }
            break;
        case "register":
            state = {
                ...state,
                // initialRegisterData: action.registerData 
                initialRegisterData: [...state.initialRegisterData, { ...action.registerData }]

            }
            break;
        case "profile":
            state={
                ...state,
                profilename:action.profileData
            }
            break;
        case "clear":
            state={
                ...state,
                cart:state.cart.splice(0, state.cart.length)
            }
            console.log(state.cart);
    }
    console.log("state", state)
    return state
}

export default productReducer;