import { NextResponse } from "next/server";

let url = "https://reqres.in/api/users";

export async function GET(){
    let response = await fetch(url);
    let data = await response.json();
    return NextResponse.json({users: data});
}

export async function POST(request: Request){
    const reqBody = await request.json();
    let response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(reqBody),
    });
    let jsonRes = await response.json();
    return NextResponse.json(jsonRes, {status: 201});
}