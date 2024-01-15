import dbConnection from "@/db/connection";
import User from "@/models/users";
import { NextResponse } from "next/server";

let url = "https://reqres.in/api/users";

export async function GET(){
    let response = await fetch(url);
    let data = await response.json();
    return NextResponse.json({users: data});
}

export async function POST(request: Request){
    try {
        const reqBody = await request.json();
        // let response = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': "application/json",
        //     },
        //     body: JSON.stringify(reqBody),
        // });
        // const jsonRes = await response.json();
        
        await dbConnection();
        const res = await User.create(reqBody);
        
        return NextResponse.json(res, {status: 201});
    } catch (e) {
        return NextResponse.json({error: e});
    }
}