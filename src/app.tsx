import { useContext, useMemo } from 'react';
import { useFetcher } from './hooks/use-fetcher';
import { AppContext } from './app.context';
import styles from './app.module.scss';
import { Header } from './components/layout/header/header';
import { ProfilePage } from './components/pages/profile-page';
import { parseUserResponse } from './model/api-user';
import { parseProjectsResponse } from './model/api-project';
import { parseContributionsResponse } from './model/api-contributions';
import { response_user } from './mocks/mock-user';
import { response_projects } from './mocks/mock-projects';
import { response_contributions } from './mocks/mock-contributions';

export interface AppProps {
    /**
     * Which profile you want to view.
     */
    username?: string;
}

const defaultUserInfo = parseUserResponse(response_user);
const defaultProjects = parseProjectsResponse(response_projects);
const defaultContributions = parseContributionsResponse(response_contributions);

export const App = ({ username }: AppProps) => {
    const { apiService } = useContext(AppContext);

    if (username) {
        apiService.setUsername(username);
    }

    const userInfo = useFetcher(
        useMemo(() => apiService.getUserInfo(), [apiService]),
        defaultUserInfo
    );

    const userProjects = useFetcher(
        useMemo(() => apiService.getUserProjects(), [apiService]),
        defaultProjects
    );

    const userContributions = useFetcher(
        useMemo(() => apiService.getContributions(), [apiService]),
        defaultContributions
    );

    return (
        <AppContext.Provider
            value={{
                apiService,
                userInfo,
                userProjects,
                userContributions,
            }}
        >
            <div className={styles.root}>
                <Header />

                <ProfilePage className={styles.page} userInfo={userInfo} />
            </div>
        </AppContext.Provider>
    );
};

export default App;
