import {Routes,Route} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import CategoriesPreview from '../Categories-Preview/categories-preview';
import Category from '../Category/category';
import {getCategoriesAndDocuments} from '../../Utils/Firebase/firebase'
import {setCategories} from '../../Store/Categories/category-action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;


