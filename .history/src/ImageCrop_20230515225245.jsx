import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCropper = () => {
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [src, setSrc] = useState(null);

  // Load image file
  const onImageUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setSrc(fileReader.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  // When crop is complete
  const onCropComplete = (crop) => {
    console.log('Crop: ', crop);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onImageUpload} />
      {src && (
        <ReactCrop
          src={src}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          onComplete={onCropComplete}
        />
      )}
    </div>
  );
};

export default ImageCropper;
