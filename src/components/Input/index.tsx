import classNames from 'classnames';
import styles from './index.module.scss'

const cx = classNames.bind(styles);

type Props = {
  value: string;
  setValue: (value: string) => void;
  size?: 'normal' | 'small';
  placeholder?: string;
  label?: string;
  Icon?: JSX.Element;
  error?: string;
};

export default function Input({ size = 'normal', value, setValue, placeholder, label, Icon ,error }: Props) {
  const classes = cx(styles.label, {
    [styles.error]: error,
  }, styles[size]);


  return (
    <label className={classes}>
      {label}
      <div className={styles.inputWrapper}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
          placeholder={placeholder}
        />
        {Icon && Icon}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </label>
  )
}
