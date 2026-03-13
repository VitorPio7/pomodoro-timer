import styles from './styles.module.css';

type DefaultInputProps = {
  type: 'text' | 'number' | 'search';
  id: string;
  labelText?: string; //'?'indicate this option exists but itś not required
} & React.ComponentProps<'input'>; // allow us to implement all the properties of an input element, like placeholder, value, onChange, etc.

export function DefaultInput({
  id,
  type,
  labelText,
  ...props
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
