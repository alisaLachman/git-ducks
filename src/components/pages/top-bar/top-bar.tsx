import type React from 'react';
import type { ApiUser } from '../../../model/api-user';
import { UserInfo } from './user-info/user-info';
import { ConnectButton } from './connect-button/connect-button';
import { Techs } from '../overview/techs/techs';
import { Connections } from '../../connections/connections';
import { Avatar } from './avatar/avatar';
import classNames from 'classnames';
import styles from './top-bar.module.scss';

export interface TopBarProps {
    className?: string;
    user?: ApiUser;
}

export const TopBar: React.FC<TopBarProps> = ({ className, user }) => {
    const avatar =
        user?.avatar ||
        'https://static.wixstatic.com/media/610b66_a9c2eb161c8d455cb7b4a4eac122ef84~mv2.jpg'; // avatar-default.jpg (240x240)
    return (
        <aside className={classNames(styles.root, className)}>
            <Avatar url={avatar} username={user?.username} />

            <div className={styles.userinfo}>
                <div className={styles.names}>
                    <ConnectButton />
                    <span className={styles.name}>{user?.name}</span>
                    <span className={styles.username}>{user?.username}</span>
                    <span className={styles.members}>Member since 1984</span>
                    <Connections count={user?.followers} />
                </div>

                <UserInfo
                    organization={user?.organization}
                    location={user?.location}
                    email={user?.email}
                    twitter={user?.twitter}
                    url={user?.url}
                />

                <Techs technologies={user?.techs?.technologies} />
            </div>
        </aside>
    );
};
