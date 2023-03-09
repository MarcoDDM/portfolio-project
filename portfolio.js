const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.classList.add('noScroll');
});

close.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('noScroll');
});

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('noScroll');
  });
});

/*Render cards*/

const projectsData = [
  { 
    id: "0",
    class: "card-1",
    name: "Multi-Post Stories",
    img: "images/card-featured.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    keywords: ["css", "html", "botstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/featured-project",
    buttonClass: "button-card1",
    keyClass: "keywords",
  },
  { 
    id: "1",
    class: "card one",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
  },
  {
    id: "2",
    class: "card two",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
  },
  {
    id: "3",
    class: "card three",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
  },
  {
    id: "4",
    class: "card four",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
  },
  {
    id: "5",
    class: "card five",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
  },
  {
    id: "6",
    class: "card six",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
  },
];

// Create project section dynamically
const projectsSection = document.getElementById("works");

for (let i = 0; i < projectsData.length; i++) {
  const project = projectsData[i];

  // Create project element
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");

  projectElement.innerHTML = `
  <div class="card-container">
    <div class="${project.class}">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <ul class="${project.keyClass}">${project.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
        </ul>
        <button class="${project.buttonClass} project-details" onclick="showModal(${project.id})">See Project</button>
    </div>
  </div>
  `;

  // Add project element to projects section
  projectsSection.appendChild(projectElement);
}

// Define the showModal function
const showModal = (id) => {
  const myModal = document.getElementById("myModal");
  myModal.style.display = "flex";

  const project = projectsData[id];

    // Create the modal content elements using innerHTML
    myModal.innerHTML = `
      <div id="modal">
        <a  class="closeBtn"><img src="images/cancel.png"/></a>
        <h1>${project.name} ${id}</h1>
        <p>${project.description}</p>
        <img src="${project.img}" />
        <ul class="${project.keyClass}">${project.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
        </ul>
        <a class="liveBtn" href='${project.liveLink}'>See live</a>
        <a class="sourceBtn" href='${project.sourceLink}'>See source</a>
      </div>
    `;
  };


// Define the closeModal function
function closeModal() {
  close.classList.add("hidden");

};

// Attach the event listener to the "Close" button
const closeBtn = document.querySelector("closeBtn");
closeBtn.addEventListener("click", closeModal);

 


