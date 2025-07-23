"use client";

import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'


const HeroSection = () => {
    const imageRef = useRef(null);

    useEffect(() => {
    const imageElement = imageRef.current;

    
    const handleScroll = () => {
     const scrollPosition = window.scrollY;
     const scrollThreshold = 100;
    
     if (scrollPosition > scrollThreshold) {
       imageElement.classList.add("scrolled");
     } else {
       imageElement.classList.remove("scrolled");
     }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (


    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            The Ultimate AI Assistant 
            <br />
             For Your Career
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            {/* Personalized career guidance,skill analysis and job prep—powered by AI. */}
            {/* Advance your career with AI-powered tools for job success. */}
             Empower your career with personalized guidance, resume insights, skill gap analysis and more — all powered by AI.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://drive.google.com/file/d/1MeBQBGLnxbkO_yvCyu5-8nCQrOOzPSVC/view">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={700}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
