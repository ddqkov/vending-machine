/**
 * External dependencies.
 */
import classNames from 'classnames';

/**
 * Internal dependencies.
 */

const Section = ({ className, children, bgColor, textColor, ...props }) => (
	<section className={className}>{children}</section>
);

const SectionInner = ({ className, children }) => (
	<div className={classNames('section__inner', className)}>{children}</div>
);

const SectionHead = ({ className, children }) => (
	<div className={classNames('section__head', className)}>{children}</div>
);
const SectionBody = ({ className, children }) => (
	<div className={classNames('section__body', className)}>{children}</div>
);
const SectionFoot = ({ className, children }) => (
	<div className={classNames('section__foot', className)}>{children}</div>
);
const SectionActions = ({ className, children }) => (
	<div className={classNames('section__actions', className)}>{children}</div>
);

const SectionBalance = ({ className, children }) => (
	<div className={classNames('section__balance', className)}>{children}</div>
);

Section.Inner = SectionInner;
Section.Body = SectionBody;
Section.Head = SectionHead;
Section.Actions = SectionActions;
Section.Balance = SectionBalance;
Section.Foot = SectionFoot;

export default Section;
