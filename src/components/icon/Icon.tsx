import { IconContext } from 'react-icons'
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiCalendar,
  FiCheckCircle,
  FiGithub,
  FiTrash,
  FiXCircle
} from "react-icons/fi"
import {ReactNode} from "react";

type Props = {
  size?: "s" | "m" | "l"
}

type BaseProps = {
  children: ReactNode
} & Props

const Icon = ({size = 'm', children }: BaseProps) => <IconContext.Provider value={{style: {fontSize: sizeMap[size]}}}>{children}</IconContext.Provider>

const sizeMap = {
  s: "10px",
  m: "16px",
  l: "24px",
} as const

Icon.Github = (props: Props) => <Icon {...props}><FiGithub/></Icon>
Icon.Check = (props: Props) => <Icon {...props}><FiCheckCircle/></Icon>
Icon.Trash = (props: Props) => <Icon {...props}><FiTrash/></Icon>
Icon.Info = (props: Props) => <Icon {...props}><FiAlertCircle/></Icon>
Icon.Warning = (props: Props) => <Icon {...props}><FiAlertTriangle/></Icon>
Icon.Error = (props: Props) => <Icon {...props}><FiXCircle/></Icon>
Icon.Calender = (props: Props) => <Icon {...props}><FiCalendar/></Icon>

export { Icon }
