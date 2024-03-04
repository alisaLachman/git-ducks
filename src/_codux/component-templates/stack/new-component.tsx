import classNames from 'classnames';
import styles from './new-component.module.scss';

export interface NewComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div className={classNames(className, styles.grid)}>
            <div className={styles.area}>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_01 (1).jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_06 (1).jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_03 (1).jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
        </div>
    );
};
