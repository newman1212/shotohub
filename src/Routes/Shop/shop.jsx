import {Routes,Route} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './shop.scss';
import CategoriesPreview from '../Categories-Preview/categories-preview';
import Category from '../Category/category';
// import {getCategoriesAndDocuments} from '../../Utils/Firebase/firebase'
// import {setCategories} from '../../Store/Categories/category-action';
import { fetchCategoriesStartAsync } from '../../Store/Categories/category-action';


const Shop = () => {

	const dispatch = useDispatch();


	useEffect( () =>{

		// const getCategoriesMap = async()=>{

		// const categoriesArray = await getCategoriesAndDocuments();
		// console.log(categoriesArray,'categoriesArray')

		// dispatch(setCategories(categoriesArray));

 
		// }

		// getCategoriesMap()

		 dispatch(fetchCategoriesStartAsync());


	}, [dispatch]);




	return(

			<Routes>	

				<Route index element = {<CategoriesPreview />} />
				<Route path = ':category' element = {<Category/>} />

			</Routes>


		);


};
 
export default Shop;