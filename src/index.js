import './style.css';

function component() {
  const content = document.createElement('div');
  content.id = 'content';
  

  const main = document.createElement('div');
  main.id = 'main';
  
  const header = document.createElement('div');
  renderHeader(header, content, main);
  content.appendChild(main);





  //Footer stuff
  const footer = document.createElement('div');
  footer.id = 'footer';
  footer.innerHTML = 'Copyright © 2022 PhlegmMignon'
  content.appendChild(footer);

  

  //<a href="https://github.com/PhlegmMignon">
  // <img class="images" src="file:///home/darren/Downloads/GitHub-Mark/PNG/GitHub-Mark-64px.png" alt="">
  // </a>

  return content;
}


function renderHeader(header, content, main) {
  header.id = 'header';

  
  let name = document.createElement('div');
  name.id = 'name';
  name.innerHTML = 'Pain Bakery';
  header.appendChild(name);

  let navbar = document.createElement('div');
  navbar.id = 'navbar';

  const tab1 = tab('1', 'About us', navbar);
  const tab2 = tab('2', 'Menu', navbar);
  const tab3 = tab('3', 'Contact', navbar);

  tab1gen(main);
  tab2gen(main);
  tab3gen(main);

  //Add each tab function call here
  //tab2gen();
  //tab3gen();




  header.appendChild(navbar);
  content.appendChild(header);

  return content;
}


const tab = (id, text, navbar) => {
  let element = document.createElement('div');
  element.id = 'tab' + id;
  element.classList.add('tabs');
  element.innerHTML = text;
  navbar.appendChild(element);

  return element;
}

function tab1gen(main) {
  let element = document.createElement('div');
  element.id = 'aboutUs';

  let el1 = document.createElement('div');
  el1.id = 'ourMission';
  el1.innerHTML = 'Our Mission';

  let el2 = document.createElement('div');
  el2.id = 'missionText';
  el2.innerHTML = "Here at Pain Bakery, our goal is to provide decadent delicacies, as well as sub-lethal creations at your request, no questions asked. Fit for the occasion. Pain bakery. ";

  element.appendChild(el1);
  element.appendChild(el2);

  main.appendChild(element);
}

function tab2gen(main) {
  let element = document.createElement('div');
  element.id = 'menu';
  element.style.display = 'none';

  element.innerHTML = 'zxcvasd';
  main.appendChild(element);
}

function tab3gen(main) {
  let element = document.createElement('div');
  element.id = 'contact';
  element.style.display = 'none';

  main.appendChild(element);
}

document.body.appendChild(component());