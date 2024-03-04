import { memo } from 'react';
import classNames from 'classnames';
import { Project } from './project/project';
import type { APIProject } from '../../../../model/api-project';
import styles from './projects.module.scss';

export interface NavigationTabsProps {
    className?: string;
    projects?: APIProject[];
}

export const Projects = memo<NavigationTabsProps>(function Projects({
    className,
    projects = [],
}) {
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.title}>Projects</p>
            <ul className={styles.list}>
                {projects.map((project) => (
                    <Project
                        className={styles.item}
                        key={project.name}
                        name={project.name}
                        description={project.description}
                    />
                ))}
            </ul>
        </div>
    );
});
