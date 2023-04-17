import './category.scss';
import {useContext,useState,useEffect,Fragment} from 'react'
import {useParams} from 'react-router-dom'

import {CategoriesContext} from '../../Contexts/categories-context'
import ProductCard from '../../Components/Product-Card/product-card'


const Category = () => {

	const {category} = useParams();
	const {categoriesMap} = useContext(CategoriesContext);
	const [products,setProducts] = useState(categoriesMap[category]);


	useEffect(()=>{

		setProducts(categoriesMap[category])

	},[category,categoriesMap])


	console.log(products,category)



	return (

		<Fragment>

				<h2>{category.toUpperCase()}</h2>

				<div className ='category'>
					{products && products.map((product)=> <ProductCard key={product.id} product={product}/>) }
				</div>

		
		</Fragment>


		)




}


export default Category;