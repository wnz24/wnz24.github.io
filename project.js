// Example project data
const projects = {
  project1: {
    title: "Exit The Dead",
    image: "images/Exitthedead.png",
    description: "This is a short description of Project 1. Features, mechanics, and highlights go here.",
    github: "https://github.com/wnz24/Exit-the-dead",
    webgl: "https://play.unity.com/en/games/6b450b6b-09f9-41ee-8b4c-d2acc4f74af5/webgl-builds"
  },
  project2: {
    title: "Project Name 2",
    image: "images/project2-thumb.png",
    description: "This is a short description of Project 2. Features, mechanics, and highlights go here.",
    github: "https://github.com/yourusername/project2",
    webgl: "https://yourwebsite.com/project2"
  }
};

// Get project ID from URL query string ?id=project1
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

const project = projects[projectId];

// Populate page
if (project) {
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-image").src = project.image;
  document.getElementById("project-description").textContent = project.description;
  document.getElementById("github-link").href = project.github;
  document.getElementById("webgl-link").href = project.webgl;
} else {
  document.getElementById("project-detail").innerHTML = "<p>Project not found.</p>";
}
