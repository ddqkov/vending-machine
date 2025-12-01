/**
 * External dependencies.
 */
import classNames from 'classnames';

/**
 * Internal dependencies.
 */

const Shell = ({ size, children, gutters }) => (
	<div
		className={classNames({
			shell: true,
			[`shell--${size}`]: size,
		})}
		style={{
			'--shell-gutters': gutters != null ? `${gutters}px` : undefined,
		}}>
		{children}
	</div>
);

export default Shell;
