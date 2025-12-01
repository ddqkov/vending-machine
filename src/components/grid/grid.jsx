/**
 * External dependencies.
 */
import classNames from 'classnames';

/**
 * Internal dependencies.
 */

const Grid = ({ className, children, gapY, gapX }) => (
	<div
		className={classNames({ grid: true, [className]: className })}
		style={{
			'--gap-y': gapY != null ? `${gapY}px` : undefined,
			'--gap-x': gapX != null ? `${gapX}px` : undefined,
		}}>
		{children}
	</div>
);

const GridCol = ({ children, columnCount }) => (
	<div
		className={classNames({
			grid__col: true,
			[`grid__col--1of${columnCount}`]: columnCount,
		})}>
		{children}
	</div>
);

Grid.Col = GridCol;

export default Grid;
