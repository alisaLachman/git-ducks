import type { Fetcher } from '../../hooks/use-fetcher';
import type { ApiUser } from '../../model/api-user';
import { Profile } from './profile';

export interface ProfilePageProps {
    userInfo: Fetcher<ApiUser | null>;
    className?: string;
}

export const ProfilePage = ({ userInfo, className }: ProfilePageProps) => {
    if (userInfo.isLoading) {
        document.title = 'Loading...';
        return <div>Loading...</div>;
    }

    if (userInfo.hasError || !userInfo.data) {
        document.title = 'Error';

        const errorMessage =
            typeof userInfo.error === 'object' &&
            userInfo.error !== null &&
            'toString' in userInfo.error
                ? userInfo.error?.toString()
                : 'Unknown error';

        return <div>{errorMessage}</div>;
    }

    document.title = `${userInfo.data.name} (${userInfo.data.username})`;

    return <Profile className={className} user={userInfo.data} />;
};
