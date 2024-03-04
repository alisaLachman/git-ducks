import { memo } from 'react';
import classNames from 'classnames';
import { Logo } from '../../common/logo/logo';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = memo<HeaderProps>(function Header({ className }) {
    return (
        <header className={classNames(styles.root, className)}>
            <Logo className={styles.logo} />
        </header>
    );
});
