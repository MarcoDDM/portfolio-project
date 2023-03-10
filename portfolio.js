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

const projectsData = [
  {
    id: '0',
    class: 'card-1',
    name: 'Multi-Post Stories',
    img: 'images/card-featured-pop.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ['css', 'html', 'botstrap', 'Ruby'],
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/example/featured-project',
    buttonClass: 'button-card1',
    keyClass: 'keywords',
  },
  {
    id: '1',
    class: 'card one',
    name: 'Profesional Art Printing Data',
    img: 'images/screenshoot1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.',
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/example/',
    keyClass: 'keys',
  },
  {
    id: '2',
    class: 'card two',
    name: 'Profesional Art Printing Data',
    img: 'images/screenshoot3.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.',
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/example/',
    keyClass: 'keys',
  },
  {
    id: '3',
    class: 'card three',
    name: 'Profesional Art Printing Data',
    img: 'images/screenshoot2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.',
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/example/',
    keyClass: 'keys',
  },
  {
    id: '4',
    class: 'card four',
    name: 'Profesional Art Printing Data',
    img: 'images/screenshoot1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.',
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/example/',
    keyClass: 'keys',
  },
  {
    id: '5',
    class: 'card five',
    name: 'Profesional Art Printing Data',
    img: 'images/screenshoot3.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.',
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/example/',
    keyClass: 'keys',
  },
  {
    id: '6',
    class: 'card six',
    name: 'Profesional Art Printing Data',
    img: 'images/screenshoot2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard.',
    descriptionPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    keywords: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/example/',
    keyClass: 'keys',
  },
];

const projectsSection = document.getElementById('works');

projectsData.forEach((project) => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project');

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

  projectsSection.appendChild(projectElement);
});

const closeModal = () => {
  const myModal = document.getElementById('myModal');
  myModal.style.display = 'none';
};

const showModal = (id) => {
  const myModal = document.getElementById('myModal');
  myModal.style.display = 'flex';

  const project = projectsData[id];

  myModal.innerHTML = `
    <div>
      <a class="closeBtn">&times;</a> 
      <h1>${project.name}</h1>
      <p>${project.descriptionPopUp}</p>
      <img src="${project.img}" />
      <ul>${project.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
      </ul>
      <div class="btns">
        <a class="liveBtn" target="_blank" href='${project.liveLink}'>See live</a>
        <a class="sourceBtn" target="_blank" href='${project.sourceLink}'>See source</a>
      </div>
    </div>
  `;

  const closeBtn = myModal.querySelector('.closeBtn');
  closeBtn.addEventListener('click', closeModal);

  const modal = document.getElementById('myModal');
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
};

const projects = document.querySelectorAll('.project');
projects.forEach((project) => {
  project.addEventListener('click', () => {
    showModal(project.dataset.id);
  });
});

const form = document.querySelector('.form-start');
const submitBtn = document.querySelector('.start');

const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (emailInput.value !== emailInput.value.toLowerCase()) {
    if (!form.querySelector('.error-message')) {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Email address must be in lowercase.';
      errorMessage.classList.add('error-message');
      errorMessage.style.color = 'red';
      emailInput.parentNode.insertBefore(errorMessage, emailInput.nextElementSibling);

      submitBtn.style.marginTop = '65px';

      submitBtn.disabled = true;
    }
  } else {
    form.submit();
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.value === emailInput.value.toLowerCase()) {
    const errorMessage = form.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();

      submitBtn.style.marginTop = '';
      submitBtn.disabled = false;
    }
  }
});

const nameInpt = document.getElementById('name');
const emailInpt = document.getElementById('email');
const messageInpt = document.getElementById('message');

const savedData = localStorage.getItem('formData');
if (savedData) {
  const { name, email, message } = JSON.parse(savedData);
  nameInpt.value = name;
  emailInpt.value = email;
  messageInpt.value = message;
}

form.addEventListener('input', () => {
  const formData = {
    name: nameInpt.value,
    email: emailInpt.value,
    message: messageInpt.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});
