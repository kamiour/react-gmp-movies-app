import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

interface ModalConfig {
  title: string;
  handleClose: () => void;
}

const modalRoot = document.getElementById('modal-container');

const Modal = ({ title, handleClose, children }: PropsWithChildren<ModalConfig>) => {
  const el: HTMLElement = document.createElement('div');

  useEffect(() => {
    modalRoot!.appendChild(el);
    document.body.classList.add('no-scroll');

    return () => {
      modalRoot!.removeChild(el);
      document.body.classList.remove('no-scroll');
    };
  });

  const closeBtn = (
    <button onClick={() => handleClose()} className="modal-close-btn">
      <FontAwesomeIcon icon={faClose} />
    </button>
  );

  const modalLayout = (
    <div className="modal-overlay">
      <div className="modal">
        {closeBtn}

        <div className="modal-header">
          <span className="modal-header-title">{title}</span>
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalLayout, el);
};

export default Modal;
