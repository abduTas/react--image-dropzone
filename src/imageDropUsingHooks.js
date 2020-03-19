import React, { useCallback} from 'react';

import { useDropzone } from "react-dropzone"
const ImageDropzone = () => {
  const maxSize = 1048576;

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    accept: 'image/png , image/jpg ',
    minSize: 0,
    maxSize,
    isDragActive :false
  });

  
  return (
    <div className="container text-center mt-5">
      <h3> Uploading using Hooks</h3>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && 'Click here to upload a file'}
        {isDragActive && !isDragReject && "image Dropzone "}
        {isDragReject && "File type not accepted, sorry!"}
      </div>
    </div>
  );
};
export default  ImageDropzone ;