import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/mongoConnection";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectMongoDB();
        const data = await Product.find();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ 
            error,
            message: "Something went wrong"
        }, {status: 400});
    }
}