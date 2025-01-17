import axios from "axios";
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";



async function getUserData() {
  // const response = await axios.get("http://localhost:3000/Api/user");
  // return response.data;
}

export default async function Home() {

  // const userData = await getUserData();

  const session = await getServerSession();

  return (
    // <div className="flex flex-col justify-center h-screen">
    //   <div className="flex justify-center">
    //     <div className="border p-8 rounded">
    //       {/* Name : {userData?.name} */}
    //     </div>
    //     {/* {userData?.email}; */}
    //   </div>
    //   root router
    // </div>


    // Client side rendering 
    // <SessionProvider>
    //   <RealHome/>
    // </SessionProvider>

    <div>
        {JSON.stringify(session)}
    </div>
  );
}

function RealHome() {
  const session = useSession();

  return (
    <div className="flex flex-col justify-center h-screen">
        {session.status == 'authenticated' && <button onClick={() => signOut() }>Logout</button>}

        {session.status == 'unauthenticated' && <button onClick={()=> signIn()}>Sigin</button>}
    </div>
  );
}
