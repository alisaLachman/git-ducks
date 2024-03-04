import type { UserResponse } from '../model/api-user';

export const response_user: UserResponse = {
    user: {
        avatarUrl:
            'https://static.wixstatic.com/media/610b66_d5960d3befcc4d4c857e5360e9d0d2b9~mv2.png', // avatar.png (444x444)
        bio: null,
        login: 'AnnieW',
        name: 'Annie Williams',
        location: 'Boston MA USA',
        email: 'anniew@codux.com',
        twitterUsername: null,
        websiteUrl: 'http://codux.com/anniewilliams',
        techs: {
            technologies: ['react', 'html', 'node', 'python', 'js', 'csharp'],
        },
        company: 'Codux',
        following: {
            totalCount: 68,
        },
        followers: {
            totalCount: 4319,
        },
        status: null,
        organizations: {
            edges: [
                {
                    node: {
                        login: 'wix',
                        avatarUrl:
                            'https://static.wixstatic.com/media/610b66_d2cdd654c4fd4ddd93ae36bb0f5bf5ed~mv2.png', //wix-logo.png (150x150)
                    },
                },
            ],
        },
    },
};
