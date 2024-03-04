import { createBoard } from '@wixc3/react-board';
import { TopBar } from '../../../components/pages/top-bar/top-bar';
import type { ApiUser } from '../../../model/api-user';

const JohnDoe: ApiUser = {
    avatar: 'https://static.wixstatic.com/media/610b66_004fa62e3323486dba584c38fa7f8c6d~mv2.jpg', // janedoe-avatar.jpg (764x955)
    bio: 'Some bio information',
    username: 'jane-doe',
    location: 'USA',
    name: 'Jane Doe',
    email: 'jane@doe.com',
    followers: 19,
    following: 20,
    twitter: '',
    url: '',
    organization: '',
    organizations: [],
    techs: {
        technologies: ['js', 'node', 'react', 'python'],
    },
};

export default createBoard({
    name: 'Top Bar',
    Board: () => <TopBar user={JohnDoe} />,
    environmentProps: {
        windowHeight: 452,
        windowWidth: 1352,
    },
    isSnippet: true,
});
