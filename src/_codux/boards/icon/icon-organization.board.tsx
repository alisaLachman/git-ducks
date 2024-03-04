import { createBoard } from '@wixc3/react-board';
import { Icon } from '../../../components/common/icon/icon';

export default createBoard({
    name: 'Icon - Organization',
    Board: () => <Icon name="organization" />,
    isSnippet: true,
});
