/**
 * External dependencies.
 */
import classNames from 'classnames';

/**
 * Internal dependencies.
 */
const Btn = ({ className, color, href, size, children, type, props, onClick }) => {
	const Component = href ? 'a' : 'button';

	if (!children) {
		return;
	}

	return (
		<Component
			className={classNames({
				btn: true,
				[`btn--${color}`]: color,
				[`btn--${size}`]: size,
				[className]: className,
			})}
			onClick={onClick}
			href={href}
			type={type}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Btn;
