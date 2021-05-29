import { InputProps } from '../input-props';
import { Option } from '../option';

export interface MultiSelectProps<T> extends InputProps<T[]> {
  options: Option<T>[];
}
