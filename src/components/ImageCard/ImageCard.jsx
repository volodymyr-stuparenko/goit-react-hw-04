import css from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={css.imgWrapper}>
      <img
        className={css.img}
        src={image.small}
        alt={image.alt}
        data-src={image.regular}
      />
    </div>
  );
};

export default ImageCard;
