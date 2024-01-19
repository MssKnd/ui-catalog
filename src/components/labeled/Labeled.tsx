import {ReactNode, useId} from "react";

type Props = {
  label: string;
  /** Set any input element */
  input: (id: string) => ReactNode;
}

/** Form attached label */
const Labeled = ({label, input}: Props) => {
  const id = useId();
  return (<>
    <label htmlFor={id}>{label}</label>
    {input(id)}
  </>)
};

Labeled.TextField = ({label}: Props) => <Labeled label={label} input={(id) => <input id={id} type='text' />} />

export { Labeled };
