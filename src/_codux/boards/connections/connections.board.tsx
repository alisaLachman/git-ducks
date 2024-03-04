import { createBoard } from '@wixc3/react-board';
import { Connections } from '../../../components/connections/connections';

export default createBoard({
    name: 'Connections',
    Board: () => <Connections count={4} />,
    environmentProps: {
        windowWidth: 968,
    },
    isSnippet: true,
});
