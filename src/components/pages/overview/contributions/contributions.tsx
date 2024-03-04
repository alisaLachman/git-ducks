import { memo, useContext } from 'react';
import { AppContext } from '../../../../app.context';
import styles from './contributions.module.scss';
import { Heatmap } from './heatmap/heatmap';
import type { Week } from '../../../../model/api-contributions';

export interface ContributionsProps {
    className?: string;
}

const DEFAULT_HEATMAP_WEEKS: Week[] = [];

export const Contributions = memo<ContributionsProps>(function Contributions({
    className,
}) {
    const { userContributions } = useContext(AppContext);

    const heatmapWeeks =
        userContributions?.data?.weeks ?? DEFAULT_HEATMAP_WEEKS;

    return (
        <div className={className}>
            <div className={styles.title}>
                <div className={styles.numberOfContributes}>
                    {userContributions?.data?.total}
                </div>
                &nbsp; contributions in 2023
            </div>
            <div>
                <Heatmap weeks={heatmapWeeks} />
            </div>
        </div>
    );
});
