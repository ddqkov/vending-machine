/**
 * External dependencies.
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import Layout from '@/layouts/default';
import HomePage from '@/pages/home';
import ProductDetail from '@/pages/product-detail';

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/product-detail' element={<ProductDetail />}></Route>
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
