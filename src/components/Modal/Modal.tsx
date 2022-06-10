import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import './Modal.scss';

interface ModalConfig {
  title: string;
  handleClose: () => void;
}

let Modal = ({ title, handleClose, children }) => <div>SSR mode</div>;

// TODO: check process
if ((process as any).browser) {
  const modalRoot = document.getElementById('modal-container');

  Modal = ({ title, handleClose, children }: PropsWithChildren<ModalConfig>) => {
    useEffect(() => {
      document.body.classList.add('no-scroll');

      return () => {
        document.body.classList.remove('no-scroll');
      };
    }, []);

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

    return ReactDOM.createPortal(modalLayout, modalRoot as HTMLElement);
  };
}

export default Modal;
