import { useEffect } from 'react';
import css from './ImageModal.module.css';

const ImageModal = ({ modalUrl, setModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModal('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div
      className={css.modal}
      onClick={(e) => {
        setModal('');
      }}
    >
      <img src={modalUrl} />
    </div>
  );
};

export default ImageModal;
