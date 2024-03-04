import { memo } from 'react';
import classNames from 'classnames';
import styles from './avatar.module.scss';

export interface AvatarProps {
    className?: string;
    url?: string;
    username?: string;
}

export const Avatar = memo<AvatarProps>(function Avatar({
    className,
    url,
    username,
}) {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles.imagePerson}
            />
        </div>
    );
});
