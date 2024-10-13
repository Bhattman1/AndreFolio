//@ts-nocheck
import React from 'react';

const projects = [
  { src: '/project1.png', type: 'image', alt: 'Project 1' },
  { src: '/project3.mp4', type: 'video', alt: 'Project 3' },
  { src: '/project4.png', type: 'image', alt: 'Project 4' },
  { src: '/project5.mp4', type: 'video', alt: 'Project 5' },
  { src: '/project6.jpg', type: 'image', alt: 'Project 6' },
  { src: '/project7.mp4', type: 'video', alt: 'Project 7' },
  { src: '/project8.mp4', type: 'video', alt: 'Project 8' },
  { src: '/project10.jpg', type: 'image', alt: 'Project 10' },
  { src: '/project11.mp4', type: 'video', alt: 'Project 11' },
  { src: '/project12.png', type: 'image', alt: 'Project 12' },
  { src: '/project13.mp4', type: 'video', alt: 'Project 13' }
];

const ProjectItem = ({ project }) => (
  <div className="mb-4 break-inside-avoid">
    {project.type === 'image' ? (
      <img
        src={project.src}
        alt={project.alt}
        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
      />
    ) : (
      <video
        src={project.src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
      >
        Your browser does not support the video tag.
      </video>
    )}
  </div>
);

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Andre Dao's Portfolio</h1>
      </header>
      <main>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}