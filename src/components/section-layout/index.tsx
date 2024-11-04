import {PropsWithChildren} from "react";
import styles from './styles.module.css'
import classNames from "classnames";

interface SectionLayoutProps extends PropsWithChildren {
  className?: string;
  variant?: 'default' | 'small';
}

export function SectionLayout({children, variant = 'default', className}: Readonly<SectionLayoutProps>) {
  return (
    <div className={classNames(styles.wrapper, className, {
      [styles.smallLayout]: variant === 'small',
    })}>
      <div className={classNames({
        [styles.contentWrapperSmall]: variant === 'small'
      }, styles.contentWrapper)}>
        {children}
      </div>
    </div>
  );
};
