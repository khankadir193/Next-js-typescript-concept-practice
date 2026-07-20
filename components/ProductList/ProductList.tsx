import {Product} from '@/components/types/product';

type productListProps = {
    productListData:Product[],
}

const ProductList = ({productListData}:productListProps)=>{
    

    return (
        <div>
            {
                productListData.map((item)=>{
                    return (
                    <p key={item.id}>{`id: ${item.id} title: ${item.title} price: ${item.price}`}</p>
                    )
                })
            }
        </div>
    )
}

export default ProductList;