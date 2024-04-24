import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export async function getAllWorkSpaceService (){
    const session = await getServerSession(authOption);
    console.log("session :", session)
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces',{
        headers: {
            Authorization: `Bearer ${session?.user?.token}`,
        }
    });
    const data = await res.json();
    return data;
};


export async function getWorkSpaceById({params :{id}}){
    const session = await getServerSession(authOption);
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`,{
        method: "GET",
        headers: {
            Authorization: `bearer ${session?.user?.token}`
        }
    });
    const data = await res.json();
    return data;
};
