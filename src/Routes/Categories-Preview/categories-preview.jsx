import {useContext,Fragment} from 'react';
import {useSelector} from 'react-redux';
import {
  selectCategoryMap,
  selectIsLoading,
} from '../../Store/Categories/category-selector';
import CategoryPreview from '../../Components/Category-Preview/category-preview';
import Spinner from '../../Components/Spinner/spinner';

const CategoriesPreview = () => {


	const categoriesMap = useSelector(selectCategoryMap);
	const isLoading = useSelector(selectIsLoading);

	console.log(categoriesMap,'categoriesMap')

	





	return(

		<Fragment>

	{isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} product={products} />
          );
        })
      )}

		

		</Fragment>


		);













};

export default CategoriesPreview  ;