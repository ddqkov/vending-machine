/**
 * External dependencies.
 */
import classNames from 'classnames';

/**
 * Internal dependencies.
 */

const Heading = ({ level, children, className }) => {
	const Tag = `h${level}`;

	return <Tag className={classNames(className)}>{children}</Tag>;
};

export default Heading;
