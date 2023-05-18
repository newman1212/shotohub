import './category.scss';
import {useContext,useState,useEffect,Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {selectCategoryMap} from '../../Store/Categories/category-selector'

// import {CategoriesContext} from '../../Contexts/categories-context'
import ProductCard from '../../Components/Product-Card/product-card'


const Category = () => {

	const {category} = useParams();
	// const {categoriesMap} = useContext(CategoriesContext);
	const categoriesMap= useSelector(selectCategoryMap);
	console.log(categoriesMap,'CATEGORIESMAP>>>>>>>>>');
	const [products,setProducts] = useState(categoriesMap[category]);


	useEffect(()=>{

		setProducts(categoriesMap[category])

	},[category,categoriesMap])




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