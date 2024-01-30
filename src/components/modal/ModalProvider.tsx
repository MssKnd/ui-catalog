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
	};
	const closeModal = () => {
		ref.current?.close();
		setIsModalOpen(false);
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
