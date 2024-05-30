import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
    id: string;
    title: string;
    price: number;
    img: string;
    quantity: number;
}

const initialState : Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>)=>{
            const itemIndex = state.findIndex((product) => product.id === action.payload.id)
            if(itemIndex === -1){
                return [...state, action.payload]
            }else{
                return [...state, {...action.payload, quantity: action.payload.quantity + 1}]
            }
        },
        removeFromCart: (state, action:PayloadAction<IProduct>)=>{
            return state.filter(product => product.id !== action.payload.id)
        },
        decreaseQuantity: (state, action: PayloadAction<IProduct>)=>{
            const itemIndex = state.findIndex((product) => product.id === action.payload.id)
            if(itemIndex > -1){
                return [...state, {...action.payload, quantity: action.payload.quantity - 1}]
            }
        },
        clearCart: (state)=>{
            return []
        }
    },
})

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer