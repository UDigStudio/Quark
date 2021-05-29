export interface InputProps<T> {
  value: T;
  onChange: (newValue: T) => void;
}
