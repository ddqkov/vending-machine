/**
 * External dependencies.
 */
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

/**
 * Internal dependencies.
 */

/**
 * Internal dependencies.
 */
import Header from '@/components/header/header';
import productsJson from '@/data/products.json';
import ProductContext from '@/components/contexts/product-context';

const Layout = () => {
	const [productsData, setProductsData] = useState(productsJson);
	const [cartData, setCartData] = useState([]);

	return (
		<ProductContext.Provider value={{ productsData, setProductsData, cartData, setCartData }}>
			<Header />

			<Outlet />
		</ProductContext.Provider>
	);
};

export default Layout;
