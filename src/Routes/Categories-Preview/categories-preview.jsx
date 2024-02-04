import {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {
 
 selectCategoriesMap,
} from '../../Store/Categories/category-selector';
import CategoryPreview from '../../Components/Category-Preview/category-preview';
// import Spinner from '../../Components/Spinner/spinner';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;







