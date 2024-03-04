import React from 'react';
import { APIService } from './services/api-service';
import type { Fetcher } from './hooks/use-fetcher';
import type { ApiContributions } from './model/api-contributions';
import type { APIProject } from './model/api-project';
import type { ApiUser } from './model/api-user';

export interface IAppContext {
    apiService: APIService;
    userInfo?: Fetcher<ApiUser | null>;
    userProjects?: Fetcher<APIProject[]>;
    userContributions?: Fetcher<ApiContributions>;
}

export const AppContext = React.createContext<IAppContext>({
    apiService: new APIService(),
});
