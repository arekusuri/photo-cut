import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCropper = () => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });

  // This function will be called when the image is loaded
  const onImageLoaded = (image) => {
    setSrc(image);
  };

  const onCropComplete = (crop) => {
    console.log('Crop: ', crop);
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  return (
    <div>
      <ReactCrop
        src={src}
        crop={crop}
        onImageLoaded={onImageLoaded}
        onComplete={onCropComplete}
        onChange={onCropChange}
      />
    </div>
  );
};

export default ImageCropper;
