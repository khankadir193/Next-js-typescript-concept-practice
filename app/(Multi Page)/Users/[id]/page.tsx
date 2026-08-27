import Link from "next/link";

type PageProp = {
    params:Promise<{
      id:string  
    }>;
}
const UserDetailsPage = async ({params}:PageProp)=>{

    const { id } = await params;

    return(
        <div>
            <h1>User Details:-</h1>
            <p>UserId:- {id}</p>
            <Link href='/Users'>Back to User Page</Link>
        </div>
    )

}

export default UserDetailsPage;