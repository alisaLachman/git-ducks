import { Tech } from './tech';
import styles from './techs.module.scss';

type techs = 'react' | 'html' | 'node' | 'python' | 'js' | 'csharp';

export interface TechsProps {
    technologies?: techs[];
}

const TechStacks = ({ technologies }: TechsProps): JSX.Element => {
    return (
        <>
            <div className={styles.techs}>
                {technologies!
                    .slice(0, technologies!.length / 2)
                    .map((tech, i) => (
                        <Tech tech={tech} key={tech + i} />
                    ))}
            </div>
            <div className={styles.techs}>
                {technologies!
                    .slice(technologies!.length / 2)
                    .map((tech, i) => (
                        <Tech tech={tech} key={tech + i} />
                    ))}
            </div>
        </>
    );
};

export const Techs = ({ technologies }: TechsProps) => {
    return (
        <div>
            <p className={styles.title}>Tech Stack</p>
            {technologies ? <TechStacks technologies={technologies} /> : null}
        </div>
    );
};
