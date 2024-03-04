import { memo } from 'react';
import classNames from 'classnames';
import styles from './heatmap-axis-y.module.scss';

export interface HeatmapAxisYProps {
    className?: string;
}

export const HeatmapAxisY = memo<HeatmapAxisYProps>(function HeatmapAxisY({
    className,
}) {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.tick} />
            <div className={styles.tick}>M</div>
            <div className={styles.tick} />
            <div className={styles.tick}>W</div>
            <div className={styles.tick} />
            <div className={styles.tick}>F</div>
        </div>
    );
});
