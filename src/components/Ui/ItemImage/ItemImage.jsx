import React from 'react';

export const ItemImage = ({ src, className }) => {
  return (
    <>
      <img className={className} src={src}  />
    </>
  );
};