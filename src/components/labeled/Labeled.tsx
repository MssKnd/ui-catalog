import {ReactNode, useId} from "react";

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

Labeled.TextField = ({label}: BaseProps) => <Labeled label={label} input={(id) => <input id={id} type='text' />} />

export { Labeled };
