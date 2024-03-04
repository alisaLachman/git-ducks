import { useContext, useMemo } from 'react';
import { AppContext } from '../../../app.context';
import { Contributions } from './contributions/contributions';
import Contributions_module from './contributions/contributions.module.scss';
import Profile_module from '../profile.module.scss';
import Overview_module from './overview.module.scss';

export interface OverviewProps {
    className?: string;
}

export const Overview = ({ className }: OverviewProps) => {
    const { userProjects } = useContext(AppContext);
    const projects = useMemo(
        () => userProjects?.data?.slice(0, 6) ?? [],
        [userProjects]
    );

    if (userProjects?.isLoading) {
        return <div>Loading...</div>;
    }

    if (userProjects?.hasError) {
        document.title = 'Error';
        const errorMessage =
            typeof userProjects?.error === 'object' &&
            userProjects?.error !== null &&
            'toString' in userProjects.error
                ? userProjects?.error?.toString()
                : 'Unknown error';

        return <div>{errorMessage}</div>;
    }

    return (
        <div className={className}>
            <p className={Overview_module.title}>Projects</p>
            <Contributions />
        </div>
    );
};
