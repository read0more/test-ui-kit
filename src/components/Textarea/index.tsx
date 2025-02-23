import classNames from "classnames";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

type Props = {
  value: string;
  setValue: (value: string) => void;
  resize?: boolean;
  placeholder?: string;
  isShowTextCounter?: boolean;
  maxLength?: number;
};

export default function Textarea({
  value,
  setValue,
  resize,
  placeholder,
  isShowTextCounter,
  maxLength
}: Props) {
  const classes = cx(styles.textarea, {
    [styles.disableResize]: resize,
  });

  return (
    <div className={styles.container}>
      <div className={styles.textareaWrapper}>
      <textarea
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...(maxLength && { maxLength })}
      />
      </div>
      {isShowTextCounter && (
        <div className={styles.textCounter}>{value?.length}{Number.isInteger(maxLength) ? `/${maxLength}` : ''}</div>
      )}
    </div>
  );
}
