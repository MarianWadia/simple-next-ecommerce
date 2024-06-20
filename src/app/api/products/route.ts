import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/mongoConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        await connectMongoDB();
        const data = await Product.find();
        console.log(data);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ 
            error,
            message: "Something went wrong"
        }, {status: 400});
    }
}

export async function POST(request: NextRequest){
    try {
        const {category, price, imgSrc, fileKey, name} = await request.json();
        await connectMongoDB();
        const data = await Product.create({
            category, price, imgSrc, fileKey, name
        });
        console.log(data);
        return NextResponse.json({msg: 'Product created', data});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ 
            error,
            message: "Something went wrong"
        }, {status: 400});
    }
}