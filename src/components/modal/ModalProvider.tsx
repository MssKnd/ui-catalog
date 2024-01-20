import { ReactNode, createContext, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import "./modal.css";
import { ModalHOC } from "./ModalHOC.tsx";

const ModalContext = createContext<{
	isModalOpen: boolean;
	openModal: (Content: ReactNode) => void;
	closeModal: () => void;
}>({
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [Content, setContent] = useState<ReactNode>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = useCallback((ModalBody: ReactNode) => {
		setContent(ModalBody);
		setIsModalOpen(true);
	}, []);
	const closeModal = useCallback(() => setIsModalOpen(false), []);

	const ModalDialog = ModalHOC({
		title: "Modal",
		modalBody: Content,
		isModalOpen,
		closeModal,
	});

	return (
		<ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
			{children}
			{createPortal(<ModalDialog />, document.body)}
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalProvider };
