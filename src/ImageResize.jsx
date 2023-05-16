import React, { useRef } from 'react';
import { readAndCompressImage } from 'browser-image-resizer';

function ImageResize() {
  const inputRef = useRef();

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    try {
      const config = {
        quality: 0.5, // Quality of output image. Ranges from 0 to 1.
        maxWidth: 800, // Max width of output image.
        maxHeight: 800, // Max height of output image.
      };

      const resizedImage = await readAndCompressImage(file, config);

      // Do something with resizedImage...
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <input type="file" ref={inputRef} onChange={handleUpload} />
    </div>
  );
}

export default ImageResize;
