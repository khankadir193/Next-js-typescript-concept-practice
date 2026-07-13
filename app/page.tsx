import UserProfileCard from "@/components/UserCard/UserCard";
import styles from '../components/UserCard/UserCard.module.css';

type User = {
    id: number,
    name: string,
    email: string,
    age: number,
    image:string
}

export default function Home() {
  const user:User = {
    id:101,
    name:"Abdul Kadir Khan",
    email:"abdulkadirk059@gmail.com",
    age:30,
    image:"/ProfileImage.jpeg"
  }  

  return (
    <div className={styles.container}>
      <UserProfileCard  user={user}/>
    </div>
  );
}
