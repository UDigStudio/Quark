import { InputProps } from '../input-props';
import { Option } from '../option';

export interface SelectProps<T> extends InputProps<T> {
  options: Option<T>[];
}
