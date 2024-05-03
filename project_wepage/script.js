document.addEventListener("DOMContentLoaded", function () {
  const projectsWrapper = document.getElementById("projectsWrapper");

  // Sample project data
  const projects = [
    {
      title: "Dictionary App",
      imageSrc: "./assets/project-2.jpg",
      description: "Description of Project 1.",
    },
    {
      title: "Project 2",
      imageSrc: "./assets/project-1.jpg",
      description: "Description of Project 2.",
    },
    {
      title: "Project 3",
      imageSrc: "./assets/project-1.jpg",
      description: "Description of Project 3.",
    },
    {
      title: "Project 3",
      imageSrc: "./assets/project-1.jpg",
      description: "Description of Project 3.",
    },
    {
      title: "Project 3",
      imageSrc: "./assets/project-1.jpg",
      description: "Description of Project 3.",
    },
    {
      title: "Project 3",
      imageSrc: "./assets/project-1.jpg",
      description: "Description of Project 3.",
    },
    // Add more projects as needed
  ];

  // Function to create project card HTML
  function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project");

    const projectHTML = `
        <h2>${project.title}</h2>
        <img src="${project.imageSrc}" alt="${project.title} Image">
        <p>${project.description}</p>
        <div class="btn-container">
          <button class="btn" onclick="viewCode('${project.title}')">View Code</button>
          <button class="btn" onclick="viewProject('${project.title}')">View Project</button>
        </div>
      `;

    projectCard.innerHTML = projectHTML;
    projectsWrapper.appendChild(projectCard);
  }

  // Function to handle viewing code
  function viewCode(projectTitle) {
    alert(`Viewing code of ${projectTitle}`);
  }

  // Function to handle viewing project
  function viewProject(projectTitle) {
    alert(`Viewing project ${projectTitle}`);
  }

  // Render project cards
  projects.forEach((project) => {
    createProjectCard(project);
  });
});
