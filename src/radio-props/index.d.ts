import { InputProps } from '../input-props';
import { Option } from '../option';

export interface RadioProps<T> extends InputProps<T> {
  options: Option<T>[];
}
