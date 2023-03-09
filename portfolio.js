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
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
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
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
    keyClass: "keys",
  },
  {
    id: "2",
    class: "card two",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
    keyClass: "keys",
  },
  {
    id: "3",
    class: "card three",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
    keyClass: "keys",
  },
  {
    id: "4",
    class: "card four",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
    keyClass: "keys",
  },
  {
    id: "5",
    class: "card five",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
    keyClass: "keys",
  },
  {
    id: "6",
    class: "card six",
    name: "Profesional Art Printing Data",
    img: "images/snapshoot.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.",
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ["html", "bootstrap", "Ruby"],
    liveLink: "https://www.example.com/",
    sourceLink: "https://github.com/example/",
    keyClass: "keys",
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

const showModal = (id) => {
  const myModal = document.getElementById("myModal");
  myModal.style.display = "flex";

  const project = projectsData[id];

  // Create the modal content elements using innerHTML
  myModal.innerHTML = `
    <div>
      <a class="closeBtn">&times;</a> 
      <h1>${project.name} ${id}</h1>
      <p>${project.descriptionPopUp}</p>
      <img src="${project.img}" />
      <ul>${project.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
      </ul>
      <div class="btns">
        <a class="liveBtn" href='${project.liveLink}'>See live</a>
        <a class="sourceBtn" href='${project.sourceLink}'>See source</a>
      </div>
    </div>
  `;

  // Add event listeners to close modal when outside is clicked
  const modalContainer = myModal.firstElementChild;
  modalContainer.addEventListener("click", (event) => {
    if (event.target !== modalContainer) {
      closeModal();
    }
  });


  // Add event listener to close button
  const closeBtn = myModal.querySelector(".closeBtn");
  closeBtn.addEventListener("click", closeModal);
};

// Define the closeModal function
function closeModal() {
  const myModal = document.getElementById("myModal");
  myModal.style.display = "none";
};

