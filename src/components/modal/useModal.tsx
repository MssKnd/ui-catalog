import { ReactNode, useContext } from "react";
import { ModalContext } from "./ModalProvider.tsx";
import "./modal.css";

type ModalType = "dialog" | "alert" | "confirm" | "submit";

type Props<T> = {
	content: (props: T) => ReactNode;
	type: ModalType;
};

const useModal = <T,>({ content, type }: Props<T>) => {
	const {
		isModalOpen,
		openModal: contextOpenModal,
		closeModal,
	} = useContext(ModalContext);

	const openModal = (props: T) => () => {
		contextOpenModal(content(props));
	};

	return { openModal, closeModal, isModalOpen };
};

export { useModal };
