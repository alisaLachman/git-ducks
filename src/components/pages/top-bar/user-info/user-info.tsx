import { memo } from 'react';
import { Icon } from '../../../common/icon/icon';
import { Link } from '../../../common/link/link';
import classNames from 'classnames';
import styles from './user-info.module.scss';

export interface UserInfoProps {
    className?: string;
    organization?: string;
    location?: string;
    email?: string;
    url?: string;
    twitter?: string | null;
}

export const UserInfo = memo<UserInfoProps>(function UserInfo({
    className,
    organization,
    location,
    email,
    twitter,
    url,
}) {
    return (
        <ul className={classNames(styles.root, className)}>
            {organization && (
                <li className={styles.detail}>
                    <span>{organization}</span>
                </li>
            )}
            {location && <li className={styles.detail}>{location}</li>}
            {email && (
                <li className={styles.detail}>
                    <Link url={`mailto:${email}`} mute>
                        {email}
                    </Link>
                </li>
            )}
            {url && (
                <li className={styles.detail}>
                    <Link url={url} mute>
                        {url}
                    </Link>
                </li>
            )}
            {twitter && (
                <li className={styles.detail}>
                    <Icon className={styles.icon} name="twitter" />
                    <Link url={`https://twitter.com/${twitter}`} mute>
                        @{twitter}
                    </Link>
                </li>
            )}
        </ul>
    );
});
