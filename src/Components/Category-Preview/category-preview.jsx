import './category-preview.scss';
import {Link} from 'react-router-dom'
import ProductCard from '../Product-Card/product-card'


const CategoryPreview = ({title,product}) =>{




	return(

		<div className='category-preview-container'>

			<h2> 
				<Link to={title} className='title'>{title.toUpperCase()}</Link>

			</h2>

			<div className='preview'>
				{
					product.filter((_,idx) => idx < 4)
					.map((product) => <ProductCard key={product.id} product={product}/>)


				}
			</div>

		</div>

		)
}



export default CategoryPreview;