import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/mongoConnection";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, urlParams: any){
    try {
        const {name, category, price} = await request.json();
        const id = urlParams.params.id;
        await connectMongoDB();
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            name, category, price
        })

        return NextResponse.json({
            msg: 'Product updated successfully',
            data: updatedProduct
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            msg: 'error updating product'
        }, {status: 400})
    }
}

export async function DELETE(request: NextRequest, urlParams: any){
    try {
        const id = urlParams.params.id;
        await connectMongoDB();
        await Product.findByIdAndDelete(id)

        return NextResponse.json({
            msg: 'Product deleted successfully',
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            msg: 'error updating product'
        }, {status: 400})
    }
}