
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';
// import {Link} from 'react-router-dom'
import ProductCard from '../Product-Card/product-card'


const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;









