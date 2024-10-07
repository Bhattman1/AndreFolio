import React from 'react';

const projects = [
  { src: '/project1.png', type: 'image', alt: 'Project 1' },     { src: '/project3.mp4', type: 'video', alt: 'Project 3' },     { src: '/project4.png', type: 'image', alt: 'Project 4' },     { src: '/project5.mp4', type: 'video', alt: 'Project 5' },     { src: '/project6.jpg', type: 'image', alt: 'Project 6' },     { src: '/project7.mp4', type: 'video', alt: 'Project 7' },     { src: '/project8.mp4', type: 'video', alt: 'Project 4' },     { src: '/project10.jpg', type: 'image', alt: 'Project 6' },     { src: '/project11.mp4', type: 'video', alt: 'Project 7' },     { src: '/project12.png', type: 'image', alt: 'Project 7' },     { src: '/project13.mp4', type: 'video', alt: 'Project 7' }
];

const ProjectItem = ({ project, className }) => (
  <div className={`relative overflow-hidden ${className}`}>
    {project.type === 'image' ? (
      <img
        src={project.src}
        alt={project.alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    ) : (
      <video
        src={project.src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
        <section className="grid grid-cols-12 gap-4 auto-rows-[200px]">
          <ProjectItem project={projects[0]} className="col-span-8 row-span-2" />
          <ProjectItem project={projects[1]} className="col-span-4 row-span-2" />
          <ProjectItem project={projects[2]} className="col-span-4 row-span-2" />
          <ProjectItem project={projects[3]} className="col-span-4 row-span-2" />
          <ProjectItem project={projects[4]} className="col-span-4 row-span-2" />
          <ProjectItem project={projects[5]} className="col-span-6 row-span-3" />
          {/* Add more ProjectItems as needed */}
        </section>
      </main>
    </div>
  );
}