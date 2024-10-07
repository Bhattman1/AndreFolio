"use client"
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import projectImage from './public/project.png';

export default function Home() {
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    imgRefs.current.forEach((img) => img && observer.observe(img));

    return () => observer.disconnect();
  }, []);

  const projects = [
    { width: 800, height: 600, class: "col-span-4 row-span-2" },
    { width: 400, height: 300, class: "col-span-2" },
    { width: 400, height: 300, class: "col-span-2" },
    { width: 600, height: 400, class: "col-span-3" },
    { width: 600, height: 400, class: "col-span-3" },
    { width: 800, height: 600, class: "col-span-4 row-span-2" },
    { width: 400, height: 300, class: "col-span-2" },
    { width: 400, height: 300, class: "col-span-2" },
    { width: 600, height: 400, class: "col-span-3" },
    { width: 600, height: 400, class: "col-span-3" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Andre Dao - Digital Creator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-6 px-4 animate-fade-down">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold animate-pulse">Andre Dao</h1>
          <div>
            <Link href="/about" className="mr-4 hover:text-gray-300 text-2xl transition-colors duration-300 ease-in-out">About</Link>
            <Link href="/work" className="hover:text-gray-300 text-2xl transition-colors duration-300 ease-in-out">Work</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-6 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${project.class} opacity-0`} 
              ref={(el) => (imgRefs.current[index] = el)}
            >
              <Image 
                src={projectImage} 
                alt={`Project ${index + 1}`} 
                width={project.width} 
                height={project.height} 
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-8 mt-12 animate-fade-up">
        <p className="text-gray-400">&copy; 2024 Andre Dao. All rights reserved.</p>
      </footer>
    </div>
  );
}