import {ReactNode, useId} from "react";
import {TextField, TextFieldProps} from "../text-field/TextField.tsx";

type BaseProps = {
  label: string;
}

type Props = BaseProps & {
  /** Set any input element */
  input: (id: string) => ReactNode;
}

/** Form attached label */
const Labeled = ({label, input}: Props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {input(id)}
    </div>
  )
};

Labeled.TextField = ({label, ...props}: BaseProps & TextFieldProps) => <Labeled label={label} input={(id) => <TextField id={id} {...props} />} />

export { Labeled };
