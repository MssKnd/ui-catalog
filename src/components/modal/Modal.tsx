import { forwardRef, ReactNode, useId } from "react";
import { Button } from "../button/Button.tsx";

/**
 * dialog: normal button on footer without title
 * danger: danger button on footer
 * confirm: normal button on footer
 * submit: primary button on footer
 **/
type ModalType = "dialog" | "danger" | "confirm" | "submit";

type Props = {
	closeModal: () => void;
	title: string;
	modalBody: ReactNode;
	type: ModalType;
};

const Modal = forwardRef<HTMLDialogElement, Props>(
	({ closeModal, modalBody, title, type }, ref) => {
		const id = useId();
		return (
			<dialog ref={ref} onClose={closeModal} aria-labelledby={id}>
				<header>
					<h1 id={id}>{title}</h1>
				</header>
				{modalBody}
				<footer>{footerByType(closeModal, id)[type]}</footer>
			</dialog>
		);
	},
);

const footerByType = (closeModal: () => void, id?: string) =>
	({
		dialog: <Button label="Close" onClick={closeModal} />,
		danger: (
			<>
				<Button label="Cancel" onClick={closeModal} />
				<Button.Danger label="Danger" onClick={closeModal} />
			</>
		),
		confirm: <Button label="Confirm" onClick={closeModal} />,
		submit: (
			<>
				<Button label="Cancel" onClick={closeModal} />
				<Button.Primary label="Submit" form={id} onClick={closeModal} />
			</>
		),
	}) as const;

export type { ModalType };
export { Modal };
