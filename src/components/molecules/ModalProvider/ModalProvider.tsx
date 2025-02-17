import { useAppSelector, useAppDispatch } from "@/src/stores/hooks";
import { closeModal } from "@/src/stores/slices/modalSlice";
import Modal from "../../atoms/Modal/Modal";
import ModalContact from "../ModalContact/ModalContact";
import ModalOntvang from "../ModalOntvang/ModalOntvang";

const MODAL_COMPONENTS: Record<string, React.FC> = {
  ModalContact: ModalContact,
  ModalOntvang: ModalOntvang,
};

export default function ModalProvider() {
  const openModals = useAppSelector((state) => state.modal.openModals);
  const dispatch = useAppDispatch();

  return (
    <>
      {Object.entries(openModals).map(([modalKey, isOpen]) => {
        if (!isOpen) return null;
        const ModalComponent = MODAL_COMPONENTS[modalKey];
        if (!ModalComponent) return null;
        return (
          <Modal
            isOpen={true}
            onClose={() => dispatch(closeModal(modalKey))}
            size="md"
            variant="dark"
            key={modalKey}
          >
            <div className="modal-content">
              <ModalComponent />
            </div>
          </Modal>
        );
      })}
    </>
  );
}
