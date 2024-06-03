import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "@/app/admin/dashboard/page";

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