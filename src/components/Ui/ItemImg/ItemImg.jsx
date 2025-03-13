import React from 'react';

export const ItemImg = ({ src, className }) => {
  return (
    <>
      <img className={className} src={src}  />
    </>
  );
};