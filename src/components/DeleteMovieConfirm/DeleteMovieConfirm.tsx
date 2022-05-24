import './DeleteMovieConfirm.scss';

interface DeleteMovieConfirmProps {
  handleConfirm: () => void;
}

const DeleteMovieConfirm = ({ handleConfirm }: DeleteMovieConfirmProps) => {
  return (
    <div className="confirm-modal">
      <p className="confirm-text">Are you sure you want to delete this movie?</p>

      <button className="app-btn confirm-btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default DeleteMovieConfirm;
