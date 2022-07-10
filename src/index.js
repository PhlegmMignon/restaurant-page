import './style.css';

function component() {
  const content = document.createElement('div');
  content.id = 'content';
  

  const header = document.createElement('div');
  renderHeader(header, content);



  

  //Creates main
  const main = document.createElement('div');
  main.id = 'main';
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


function renderHeader(header, content) {
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


  //Add each tab function call here
  // tab1.addEventListener('click', () => tab1gen());
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
  element.addEventListener('click', () => tab1gen());
  return element;
}

function tab1gen() {
  

}

document.body.appendChild(component());