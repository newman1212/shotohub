import {useState,useEffect,Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
// import {selectCategoryMap} from '../../Store/Categories/category-selector';
import {  
 selectCategoriesMap,
} from '../../Store/Categories/category-selector';

import ProductCard from '../../Components/Product-Card/product-card';
// import Spinner from '../../Components/Spinner/spinner';
import { CategoryContainer, Title } from './category.styles';







const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
