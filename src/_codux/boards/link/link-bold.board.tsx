import { createBoard } from '@wixc3/react-board';
import { Link } from '../../../components/common/link/link';

export default createBoard({
    name: 'Link - bold',
    Board: () => (
        <Link url={'#'} bold>
            Bold Link
        </Link>
    ),
    isSnippet: true,
});
