import "./Modal.css";

function Modal({ modal__title, cancelModal, confirmModal}) {
  return (
    <>
      <div className="modal">
        <div className="modal__title">{modal__title}</div>
        <div className="modal__buttons">
          <button
            className="btn ntb__cancel" 
            onClick={cancelModal}
          >
            Cancel
          </button>
          <button
            className="btn"
            onClick={confirmModal}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
