import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => setDarkMode(!darkMode);

  const projects = [
    {
      title: "React To-Do List (MDN Sample)",
      tech: "React",
      link: "https://mdn.github.io/todo-react/",
      description: "Built using React components, state, and client-side rendering."
    },
    {
      title: "Todo App with Mantine UI",
      tech: "React + Mantine UI",
      link: "https://javascriptbear.github.io/todo_react_app/",
      description: "Includes dark/light mode and data persistence in Local Storage."
    },
    {
      title: "React + TypeScript Todo Demo",
      tech: "React, TypeScript, Vite",
      link: "https://chocolat5.github.io/react-todo-list-demo/",
      description: "Simple and clean To-Do app using Webpack/Vite and TS."
    }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="min-h-screen px-6 py-12 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Anushka Meena</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Frontend Developer | React • Firebase • Next.js</p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Download Resume</button>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=anushkam251@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-800">
                Contact Me
              </button>
            </a>

            <button onClick={toggleDark} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto mt-10">
          {projects.map((project, index) => (
            <div key={index} className="p-6 border rounded-xl hover:shadow-xl transition-shadow dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.tech}</p>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Live</a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://mail.google.com/mail/?view=cm&to=anushkam251@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-800">
              Contact Me
            </button>
          </a>

        </div>
      </main>
    </div>
  );
}