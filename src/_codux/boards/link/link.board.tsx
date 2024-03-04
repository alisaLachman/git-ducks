import { createBoard } from '@wixc3/react-board';
import { Link } from '../../../components/common/link/link';

export default createBoard({
    name: 'Link',
    Board: () => <Link url={'#'}>Link</Link>,
    isSnippet: true,
});
