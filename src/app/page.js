"use client"
import $ from "jquery"
import Image from 'next/image'
import styles from './page.module.css'
import Header from './pages/header/Header'
import Footer from './pages/footer/Footer'
import Homepage from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/custom.css';
import 'bootstrap/dist/js/bootstrap.bundle'

import React, { useEffect, useRef, useState } from 'react';
import BackToTopButton from "./pages/home/BackToTopButton"
import Loader from "./pages/Loader"


export default function Home() {
  const[loader,setloader]=useState(true)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.pageYOffset > 50) {
          document.querySelector('.header').classList.add('FixedHeader');
        } else {
          document.querySelector('.header').classList.remove('FixedHeader');
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }


  }, []);


  useEffect(() => {
   
    setTimeout(() => {
     setloader(false)
    }, 1500);
  }, []);

  return (
<> 
{loader?<Loader/>:<><Header/>
<Homepage/>
<Footer/>
<BackToTopButton/> </>}


</>
  
   
  )
}
