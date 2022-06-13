import { ChangeEventHandler } from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLSelectElement | HTMLInputElement> {
  handleChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  selected?: any;
}
