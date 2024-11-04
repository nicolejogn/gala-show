import styles from './styles.module.css';


interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheckbox: React.FC<CheckboxProps> = ({label, checked, onChange}) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      <span className={styles.checkboxCustom}></span>
      {label}
    </label>
  );
};

