import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";


const prismaClient = new PrismaClient();

// export default function Get(){
//     return Response.json({
//         email: "nitinkush@gmail.com",
//         password: "nitin"
//     })
// }

export async function POST(req: NextRequest) {

    const body = await req.json();
    console.log(body);

    await prismaClient.user.create({
        data : {
            username : body.username,
            password : body.password
        }
    })
    
    
    // extract the body 
    return Response.json({
        message : "you are logged in"
    });
}