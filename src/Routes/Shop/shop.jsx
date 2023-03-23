import {useContext} from 'react';
import {ProductsContext} from '../../Contexts/products.context'
import ProductCard from '../../Components/Product-Card/product-card'
import './shop.scss'

const Shop = () => {

	const {products} = useContext(ProductsContext);




	return(

			<div className='products-container'>

			{products.map((product) =>(

				<ProductCard key ={product.id} products={product}/>

				))}

			</div>


		)




}

export default Shop;