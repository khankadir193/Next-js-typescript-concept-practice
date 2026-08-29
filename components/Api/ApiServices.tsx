interface User{
    id:number,
    name:string,
    email:string,
}

async function getUser():Promise<User[]>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!response.ok){
        throw new Error('Failed to fetch user.');
    }

    return response.json();
}

const ApiServices = async ()=>{

    const users = await getUser();

    console.log('users....',users);

    return (
        <>
        <h1>Users...</h1>

        {
            users.map((user:User)=>(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                </div>
            ))
        }
        </>
    )
}

export default ApiServices;