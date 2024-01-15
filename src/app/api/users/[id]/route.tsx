import { NextResponse } from "next/server";

let url = "https://reqres.in/api/users"

export async function GET(req: Request, context: any){
    let response = await fetch(`${url}/${context.params.id}`);
    let data = await response.json();
    return NextResponse.json(data);
}

export async function PUT(req: Request, context: any){
    let reqBody = await req.json();
    if (!reqBody.name) {
        return NextResponse.json({error: "name is required"});
    }
    if (!reqBody.job) {
        return NextResponse.json({error: "job is required"});
    }
    let response = await fetch(`${url}/${context.params.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(reqBody),
    });
    const jsonRes = await response.json();
    return NextResponse.json(jsonRes);
}

export async function DELETE(req: Request, context: any){
    let response = await fetch(`${url}/${context.params.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json",
        }
    });
    return NextResponse.json({message: "user deleted successfully"}, {status: 404});
}