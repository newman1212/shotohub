import './category.scss';
import {useContext,useState,useEffect,Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
// import {selectCategoryMap} from '../../Store/Categories/category-selector';
import {
  selectCategoryMap,
  selectIsLoading,
} from '../../Store/Categories/category-selector';
import ProductCard from '../../Components/Product-Card/product-card';
import Spinner from '../../Components/Spinner/spinner';


const Category = () => {

	const {category} = useParams();

	const categoriesMap= useSelector(selectCategoryMap);
	const isLoading = useSelector(selectIsLoading);

	const [products,setProducts] = useState(categoriesMap[category]);


	useEffect(()=>{

		setProducts(categoriesMap[category])

	},[category,categoriesMap])




	return (

		<Fragment>

				<h2>{category.toUpperCase()}</h2>
     {isLoading ? (
        <Spinner />
      ) : (
        <div className='category'>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
		
		</Fragment>


		)




}


export default Category;