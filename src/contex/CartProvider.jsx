
import { useReducer } from "react"
import{ CartContext } from "./CartContext"

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const initialState=[]
  const cartReducar= (state = initialState, action ={})=>{
    switch(action.type){
      case "[CART] Add Product":
        return[...state,action.payload]
        case "[CART] Remove Product":
          return state.filter(product => product.id !== action.payload)
          case "[CART] increment Quantity":
            return state.map(product =>{const cant = product.quantity + 1
              if(product.id === action.payload) return{...product, quantity: cant}
              return product
            })
            case "[CART] decrement Quantity":
              return state.map(product =>{const cant = product.quantity - 1
                if(product.id === action.payload && product.quantity > 1) return{...product, quantity: cant}
                return product
              })
              
              default:
                return state
        
    }
  }
const[shoppingList, dispatch] = useReducer(cartReducar,initialState)
const addProduct=(product) =>{
  product.quantity= 1
  const action={
    type:"[CART] Add Product",
    payload: product
  }
  dispatch(action)
}
const removeProduct=(id) =>{
  const action={
    type:"[CART] Remove Product",
    payload:id
  }
  dispatch(action)
}
const incrementQuantity=(id) =>{
  const action={
    type:"[CART] increment Quantity",
    payload:id
  }
  dispatch(action)
}
const decrementQuantity=(id) =>{
  const action={
    type:"[CART] decrement Quantity",
    payload:id
  }
  dispatch(action)
}



  return (
    <CartContext.Provider value={{shoppingList,addProduct,removeProduct,incrementQuantity, decrementQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
