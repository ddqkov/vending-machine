/**
 * External dependencies.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Internal dependencies.
 */
import App from '@/app';

import '@/styles/style.scss';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
