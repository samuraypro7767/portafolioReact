
import React from 'react';
import { Header } from '../../Layouts/Header/Header';
import { Footer } from '../../Layouts/Footer/Footer';
import { CardBlog } from '../../Layouts/CardBlog';
import { blogs } from '../../Layouts/Data/data';
import "./Studies.css"
export const Studies = () => {
  const carouselBlogs = [...blogs, ...blogs]; 

  return (
    <>
       <Header /> 
       <video id="miVideo" muted autoPlay loop>
          <source src='/background2.mp4' />
        </video>
        <div className="capa"></div>
      <main className="containerStudies my-5 px-4 md:px-8 lg:px-12">
        <div className="overflow-hidden w-full">
          <div className="containerStudies flex gap-2 flex-nowrap animate-scroll"> {/* Reducir el gap */}
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