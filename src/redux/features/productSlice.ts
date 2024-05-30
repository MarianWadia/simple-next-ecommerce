import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./cartSlice";

type ProductInterface = {
    _id: string,
    imgSrc: string,
    fileKey: string,
    name: string,
    price: number,
    category: string
}

const initialState : ProductInterface = {
    _id: "",
    imgSrc: "",
    fileKey: "",
    name: "",
    price: 0,
    category: ""
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action:PayloadAction<ProductInterface>)=>{
            return action.payload
        }
    }
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer 