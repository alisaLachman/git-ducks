import { createBoard } from '@wixc3/react-board';
import { Link } from '../../../components/common/link/link';

export default createBoard({
    name: 'Link - muted',
    Board: () => (
        <Link url={'#'} mute>
            Muted Link
        </Link>
    ),
    isSnippet: true,
});
