// ImageUpload.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import '../../utils/imageUpload.css'

const ImageUploader = ({setSelectedImages,onDrop,selectedImages}) => {
 
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="image-upload-container">
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some images here, or click to select images</p>
      </div>

      <div className="selected-images">
        {selectedImages.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt={`Selected ${index + 1}`} className="uploaded-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
