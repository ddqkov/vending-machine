/**
 * External dependencies.
 */
import { useState, useContext } from 'react';
/**
 * Internal dependencies.
 */
import Section from '@/components/section/section';
import Shell from '@/components/shell/shell';
import Heading from '@/components/heading/heading';
import Tabs from '@/components/tabs/tabs';
import Products from '@/components/products/products';
import Filters from '@/components/filters/filters';
import ProductPopup from '@/components/product-popup/product-popup';

import ProductContext from '@/components/contexts/product-context';

const SectionProducts = () => {
	const { productsData, setCartData } = useContext(ProductContext);
	const [productPopupIsOpen, setProductPopupIsOpen] = useState(false);
	const [productPopupId, setProductPopupId] = useState(null);

	const getHighestPrice = () => {
		return productsData.reduce((acc, product) => {
			return acc > product.price ? acc : product.price;
		}, 0);
	};

	const [checked, setChecked] = useState('All');
	const [filters, setFilters] = useState({
		brand: [],
		category: 'All',
		price: [0, getHighestPrice()],
		sort: [
			{
				date: 'auto',
				price: 'auto',
			},
		],
	});

	const handleCategoryChange = (value) => {
		setChecked(value);

		setFilters((prev) => ({ ...prev, category: value }));
	};

	const handleBrandChange = (values) => {
		setFilters((prev) => ({ ...prev, brand: values }));
	};

	const handlePriceChange = (values) => {
		setFilters((prev) => ({ ...prev, price: values }));
	};

	const handleSortChange = (item) => {
		const currentSort = item.sortType;

		setFilters((prev) => {
			return {
				...prev,
				sort: [{ ...prev.sort[0], [item.name]: currentSort }],
			};
		});
	};

	const handleProductPopupOpen = (id) => {
		setProductPopupIsOpen((prev) => !prev);
		setProductPopupId(id);
	};

	const getProductById = () => {
		return productsData.find((product) => product.id === productPopupId);
	};

	return (
		<Section className='section-products'>
			<Shell>
				<Section.Head>
					<Heading level={2}>Products</Heading>
				</Section.Head>

				<Section.Actions>
					<Tabs checked={checked} onChange={(e) => handleCategoryChange(e.target.value)} />

					<Filters
						handleBrandChange={(value) => handleBrandChange(value)}
						maxPrice={getHighestPrice()}
						handlePriceChange={(value) => handlePriceChange(value)}
						handleSortChange={(item) => handleSortChange(item)}
					/>
				</Section.Actions>

				<Products filters={filters} productsData={productsData} onProductToggle={handleProductPopupOpen} />

				<div className='pagination'>
					<button className='pagination__prev'>Previews</button>

					<ol>
						<li>
							<button>1</button>
						</li>

						<li>
							<button>2</button>
						</li>

						<li>
							<button>3</button>
						</li>

						<li>
							<button>4</button>
						</li>

						<li>
							<button>5</button>
						</li>

						<li>
							<button>6</button>
						</li>

						<li>
							<button>7</button>
						</li>
					</ol>

					<button className='pagination__next'>Next</button>
				</div>

				{productPopupIsOpen && getProductById() && (
					<ProductPopup product={getProductById() || null} handleProductPopupOpen={handleProductPopupOpen} />
				)}
			</Shell>
		</Section>
	);
};

export default SectionProducts;
