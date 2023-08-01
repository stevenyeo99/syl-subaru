import ImageGallery from 'react-image-gallery';

import './ImageGallery.css';

const ImageGalleryDisplay = (props) => {
    const {items} = props;

    return (
        <ImageGallery items={items} />
    );
};

export default ImageGalleryDisplay;