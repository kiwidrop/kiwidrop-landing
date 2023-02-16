import cn from 'classnames';
import React, { CSSProperties } from 'react';

import css from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: 'dark' | 'light_dark' | 'white';
  shape?: 'rounded' | 'right_angle';
  style?: CSSProperties;
  bordered?: boolean;
  type?: 'link' | 'button';
  href?: string;
  target?: '_blank' | '_self';
};

const Button = ({
  children,
  onClick,
  className,
  color = 'dark',
  shape = 'rounded',
  style = null,
  bordered,
  type = 'button',
  href,
  target = '_blank',
}: Props) => {
  if (type === 'link') {
    return (
      <a
        style={style}
        type="button"
        href={href}
        className={cn(css.kiwi_button, `${color}`, `${shape}`, { [css.bordered]: bordered }, className)}
        target={target}
      >
        <>{children}</>
      </a>
    );
  }
  return (
    <button
      style={style}
      type="button"
      onClick={onClick}
      className={cn(css.kiwi_button, `${color}`, `${shape}`, { [css.bordered]: bordered }, className)}
    >
      <>{children}</>
    </button>
  );
};

export default Button;
