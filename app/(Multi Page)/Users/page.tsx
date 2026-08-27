import Link from "next/link";

const users = [
  {
    id: 1,
    name: "Abdul",
  },
  {
    id: 2,
    name: "Rahul",
  },
  {
    id: 3,
    name: "John",
  },
];

export default function UsersPage(){
    return (
        <div>
            <h1>Users</h1>
            {
                users.map((user)=>(
                    <div key={user.id}> 
                        <p>{user?.id}.{user?.name}</p>
                    </div>
                ))
            }
            <Link href="/">Home Page</Link>
        </div>
    )
}