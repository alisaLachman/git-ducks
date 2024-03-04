import { memo, useReducer, useMemo } from 'react';
import classNames from 'classnames';
import styles from './connect-button.module.scss';

export interface ConnectButtonProps {
    defaultIsConnected?: boolean;
    className?: string;
}

export const ConnectButton = memo<ConnectButtonProps>(
    ({ className, defaultIsConnected = false }) => {
        const [isConnected, toggleConnectionStatus] = useReducer(
            (v) => !v,
            defaultIsConnected
        );
        const buttonText = useMemo(
            () => getButtonText(isConnected),
            [isConnected]
        );

        return (
            <div className={classNames(styles.root, className)}>
                <button
                    className={styles.button}
                    onClick={toggleConnectionStatus}
                >
                    {buttonText}
                </button>
            </div>
        );
    }
);

const getButtonText = (isConnected: boolean) =>
    isConnected ? 'Disconnect' : 'Connect';
