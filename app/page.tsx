import UserProfileCard from "@/components/UserCard/UserCard";
import styles from '../components/UserCard/UserCard.module.css';
import ProductList from "@/components/ProductList/ProductList";
import { productListData } from "@/components/ProductList/ProductListData";
import { Product, User } from '@/components/types/product'
import UserForm from "@/components/Form/UserForm";


export default function Home() {
  // user porfile object
  const user: User = {
    id: 101,
    name: "Abdul Kadir Khan",
    email: "abdulkadirk059@gmail.com",
    age: 30,
    image: "/ProfileImage.jpeg"
  }

  //Product List object..
  const product: Product = {
    id: 101,
    title: "Laptop",
    price: 120000
  }

  return (
    <>
      {/* user objects is belong this components */}
      {/* <div className={styles.container}>
         <UserProfileCard  user={user}/>
      </div> */}

      {/* <div>
        <ProductList productListData={productListData} />
      </div> */}

      {/* user form  */}
      <div>
        <UserForm />
      </div>
    </>
  );
}
