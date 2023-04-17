import {useContext,Fragment} from 'react';
import {CategoriesContext} from '../../Contexts/categories-context'
import CategoryPreview from '../../Components/Category-Preview/category-preview';

const CategoriesPreview = () => {

	const {categoriesMap} = useContext(CategoriesContext);




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