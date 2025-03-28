
import React from 'react';
import { Header } from '../../Layouts/Header/Header';
import { Footer } from '../../Layouts/Footer/Footer';
import { CardBlog } from '../../Layouts/CardBlog';
import { blogs } from '../../Layouts/Data/DataCard.js';
import "./Studies.css"
export const Studies = () => {
  const carouselBlogs = [...blogs, ...blogs]; 

  return (
    <>
      <Header ></Header>
       <video id="miVideo" muted autoPlay loop>
          <source src='/background1.mp4' />
        </video>
        <div className="capa"></div>
        <main className="containerStudies my-5 px-4 md:px-8 lg:px-12">
        <div className="overflow-hidden w-full">
          <div className="flex gap-4 flex-nowrap animate-scroll">
            {carouselBlogs.map((blog, index) => (
              <CardBlog blog={blog} key={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};