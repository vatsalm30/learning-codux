import classNames from 'classnames';
import styles from './submitbutton.module.scss';

export interface SubmitProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element|string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SubmitButton = ({ className, children }: SubmitProps) => {
    return <div className={classNames(styles.root, className)}>
        <button>{children}</button>
    </div>;
};
