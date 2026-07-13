import styles from './UserCard.module.css';
import Image from 'next/image';

type User = {
    id: number,
    name: string,
    email: string,
    age: number,
    image:string
}

type UserProfileCardProps = {
    user: User
}
const UserProfileCard = ({ user }: UserProfileCardProps) => {

    return (
        <div className={styles.card}>
            <Image src={user.image} alt={user.name} width={120} height={120} className={styles.profileImage} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>Age:{user.age}</p>
        </div>
    )

};
export default UserProfileCard;