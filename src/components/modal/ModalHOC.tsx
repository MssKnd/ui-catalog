import { ReactNode, useId } from "react";

type Props = {
	isModalOpen: boolean;
	closeModal: () => void;
	title: string;
	modalBody: ReactNode;
};

const ModalHOC =
	({ isModalOpen, closeModal, modalBody, title }: Props) =>
	() =>
	{
		const id = useId();
		return (
			<dialog open={isModalOpen} onClose={closeModal} aria-labelledby={id}>
				<header>
					<h1 id={id}>{title}</h1>
				</header>
				{modalBody}
				<footer>
					<button onClick={closeModal}>Close</button>
				</footer>
			</dialog>
		);
	};

export { ModalHOC };
