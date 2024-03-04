import { createBoard } from '@wixc3/react-board';
import { HeatmapDay } from '../../../components/pages/overview/contributions/heatmap/heatmap-day/heatmap-day';

export default createBoard({
    name: 'HeatmapDay',
    Board: () => <HeatmapDay />,
    environmentProps: {
        windowWidth: 300,
        windowHeight: 413,
        canvasPadding: {
            top: 24,
            right: 24,
            bottom: 24,
            left: 24,
        },
    },
    isSnippet: true,
});
