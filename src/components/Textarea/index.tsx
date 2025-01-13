import classNames from "classnames";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

type Props = {
  value: string;
  setValue: (value: string) => void;
  resize?: boolean;
  placeholder?: string;
  isShowTextCounter?: boolean;
};

export default function Textarea({
  value,
  setValue,
  resize,
  placeholder,
  isShowTextCounter,
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
      />
      </div>
      {isShowTextCounter && (
        <div className={styles.textCounter}>{value.length}/100</div>
      )}
    </div>
  );
}
