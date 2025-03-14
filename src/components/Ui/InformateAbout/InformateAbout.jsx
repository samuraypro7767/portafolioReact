import React from 'react'

export const InformateAbout = ({Title,TextInformate,className}) => {
  return (
    <>
    <section className={className}>
        <h2>{Title}</h2>
        <p>{TextInformate}</p>
    </section>
    </>
  )
}
