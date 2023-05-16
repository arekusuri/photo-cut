import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


const ImageCropper = () => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1, unit: '%', width: 30 });

  // Load image file
  const onImageUpload = (e) => {
    console.log("---")
    if (e.target.files && e.target.files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setSrc(fileReader.result);
      };
      console.log("---" + e.target.files[0])
      fileReader.onloadend = () => {
        console.log('File read:', fileReader.result);
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
      <img src={src} alt="Preview" />
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
