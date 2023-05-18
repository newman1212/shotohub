import {useContext,Fragment} from 'react';
import {useSelector} from 'react-redux';
// import {CategoriesContext} from '../../Contexts/categories-context'
import {selectCategoryMap} from '../../Store/Categories/category-selector'
import CategoryPreview from '../../Components/Category-Preview/category-preview';

const CategoriesPreview = () => {


	const categoriesMap = useSelector(selectCategoryMap)

	console.log(categoriesMap,'categoriesMap')

	

	// const {categoriesMap} = useContext(CategoriesContext);




	return(

		<Fragment>

		{
			Object.keys(categoriesMap).map((title) => {

				const product = categoriesMap[title];

				return <CategoryPreview key ={title} title={title} product={product}/>


			})

		}
		

		</Fragment>


		);


};

export default CategoriesPreview  ;