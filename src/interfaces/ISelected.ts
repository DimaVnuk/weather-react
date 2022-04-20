import { ChangeEventHandler } from "react";

export interface ISelected extends React.HTMLAttributes<HTMLSelectElement | HTMLInputElement>{
  handleOnChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  value?: string;
}
