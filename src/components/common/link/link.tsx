import React, { memo } from 'react';
import classNames from 'classnames';
import styles from './link.module.scss';

export interface LinkProps {
    className?: string;
    url: string;
    mute?: boolean;
    bold?: boolean;
    children: React.ReactNode;
}

export const Link = memo<LinkProps>(function Link({
    className,
    url,
    children,
    mute,
    bold,
}) {
    return (
        <a
            href={url}
            className={classNames(styles.root, className, {
                [styles.muted]: mute,
                [styles.bolded]: bold,
            })}
        >
            {children}
        </a>
    );
});
