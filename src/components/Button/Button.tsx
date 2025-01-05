import styles from './Button.module.scss'
import classNames from 'classnames';

const cx = classNames.bind(styles);

type Props = {
    type: 'main' | 'secondary';
    size: 'small' | 'medium' | 'large';
    Icon?: JSX.Element;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({ type, size, Icon, onClick, disabled }: Props) {
  const classes = cx('button', `button--${type}`, `button--${size}`);
  
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {Icon && Icon}
      primary
    </button>
  )
}
