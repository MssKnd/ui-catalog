import { ReactNode, createContext, useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.css";
import { Modal, ModalType } from "./Modal.tsx";

const ModalContext = createContext<{
	isModalOpen: boolean;
	openModal: (Content: ReactNode, type: ModalType) => void;
	closeModal: () => void;
}>({
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
});

const clickOverlay = (event: MouseEvent) => {
	if (!isDialogElement(event.target)) return;
	event.target.close();
};

const isDialogElement = (element: unknown): element is HTMLDialogElement =>
	element !== null &&
	element instanceof HTMLElement &&
	element.nodeName === "DIALOG";

const ModalProvider = ({ children }: { children: ReactNode }) => {
	const ref = useRef<HTMLDialogElement>(null);
	const [Content, setContent] = useState<ReactNode>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [type, setType] = useState<ModalType>("dialog");

	const openModal = (ModalBody: ReactNode, type: ModalType) => {
		setContent(ModalBody);
		setType(type);
		ref.current?.showModal();
		setIsModalOpen(true);
		if (type !== "confirm") return;
		document.addEventListener("click", clickOverlay);
	};
	const closeModal = () => {
		ref.current?.close();
		setIsModalOpen(false);
		document.removeEventListener("click", clickOverlay);
	};

	return (
		<ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
			{children}
			{createPortal(
				<Modal
					ref={ref}
					title="Modal"
					type={type}
					closeModal={closeModal}
					modalBody={Content}
				/>,
				document.body,
			)}
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalProvider };
