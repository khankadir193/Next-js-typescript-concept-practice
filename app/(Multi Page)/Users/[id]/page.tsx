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
        </div>
    )

}

export default UserDetailsPage;