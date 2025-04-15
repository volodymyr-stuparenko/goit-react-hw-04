import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, setModal }) => {
  return (
    <div className={css.gallery}>
      <ul
        className={css.imgList}
        onClick={(e) => {
          e.target.nodeName === 'IMG' && setModal(e.target.dataset.src);
        }}
      >
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
