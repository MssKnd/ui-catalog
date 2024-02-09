import { ReactNode, useContext } from "react";
import { ModalContext } from "./ModalProvider.tsx";
import { ModalType } from "./Modal.tsx";

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
		contextOpenModal(content(props), type);
	};

	return { openModal, closeModal, isModalOpen };
};

export { useModal };
