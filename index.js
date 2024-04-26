let name = 'Tshepo';
let surname = 'Madira';
let bio = 'Im an aspiring web developer who is passionate about creating web experiences,currently learning html,Css and JavaScript,I have experimented myself with a web design portfolio, I am detail-oriented and eager to contribute to the real-world projects.';
let project = ['Website page',];
let education = {
  Certicate: 'NCV Level 2',
  College: 'Ekurhuleni Tvet College'
};
let contact = {
  email: 'madiratshepo936@gmail.com',
  phone: '0794407376'
};

let projects = [
    {
      name: 'Website Page',
      description: 'Ensure pixel-perfect implementation of designs',
      technologies: ['Html', 'CSS', 'JavaScript'],
      link: 'https://github.com/MadiraTshepo/Website1.git'
    },
];   



const titleElement = document.createElement("h1");
titleElement.textContent = data.title;
document.body.appendChild(titleElement);

const descriptionElement = document.createElement("p");
descriptionElement.textContent = data.description;
document.body.appendChild(descriptionElement);

const resourceListElement = document.createElement("ul");
data.resources.forEach(resource => {
  const resourceElement = document.createElement("li");
  resourceElement.textContent = resource.name;
  resourceElement.innerHTML += ` <a href="${resource.url}">(${resource.url})</a>`;
  resourceListElement.appendChild(resourceElement);
});
document.body.appendChild(resourceListElement);