import './style.css';
import Icon from './img.png';

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

  const mark = new Image();
  mark.src = Icon;
  mark.id = 'mark';

  let aTag = document.createElement('a');
  aTag.setAttribute('href', 'https://github.com/PhlegmMignon');
  aTag.appendChild(mark);
  footer.appendChild(aTag);

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

  tab1.addEventListener('click', () => switchTab('1', tab1, tab2, tab3));
  tab2.addEventListener('click', () => switchTab('2', tab1, tab2, tab3));
  tab3.addEventListener('click', () => switchTab('3', tab1, tab2, tab3));

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

  let item1 = document.createElement('div');
  let description1 = document.createElement('div');
  let description2 = document.createElement('div');
  let or1 = orGen();
  item1.classList.add('items');
  description1.classList.add('description');
  description2.classList.add('description');

  item1.innerHTML = 'Pain au Chocolat';
  description1.innerHTML = 'A decadent pastry filled with cardamom infused chocolate';
  description2.innerHTML = 'An unsuspecting trap, when ingested, causes abdominal pain akin to childbirth';
  item1.appendChild(description1);
  item1.appendChild(or1);
  item1.appendChild(description2);


  let item2 = document.createElement('div');
  let description3 = document.createElement('div');
  let description4 = document.createElement('div');
  let or2 = orGen();

  item2.classList.add('items');
  description3.classList.add('description');
  description4.classList.add('description');

  item2.innerHTML = 'Knuckle Sandwich';
  description3.innerHTML = 'This sandwich filled with provolone cheese, tomato, turkey, and our house sauceis guarantted to deliver a flavorful punch to your mouth';
  description4.innerHTML = 'When unwrapped, this sandwich delivers a horrid combination of odors that makes you feel as if you were punched in the face';

  item2.appendChild(description3);
  item2.appendChild(or2);
  item2.appendChild(description4);


  let item3 = document.createElement('div');
  let description5 = document.createElement('div');
  let description6 = document.createElement('div');
  let or3 = orGen();

  item3.classList.add('items');
  description5.classList.add('description');
  description6.classList.add('description');
  
  item3.innerHTML = "Rock 'n Baguette";
  description5.innerHTML = 'An expertly crafted crispy exterior with a soft crumb provides this baguette with versatility to be enjoyed however you wish';
  description6.innerHTML = 'A rock hard baguette, perfect for clobbering. Looks natural with tomato sauce on it';

  item3.appendChild(description5);
  item3.appendChild(or3);
  item3.appendChild(description6);

  element.appendChild(item1);
  element.appendChild(item2);
  element.appendChild(item3);
  main.appendChild(element);
}

  function orGen(item) {
    let element = document.createElement('div');
    let p1 = document.createElement('div');
    let p2 = document.createElement('div');
    let p3 = document.createElement('div');

    element.classList.add('orBox');
    p1.classList.add('dash');
    p3.classList.add('dash');
    p2.innerHTML = 'OR';

    element.appendChild(p1);
    element.appendChild(p2);
    element.appendChild(p3);
    

    return element;
  }


function tab3gen(main) {
  let element = document.createElement('div');
  element.id = 'contact';

  let el1 = document.createElement('div');
  el1.id = 'call';
  el1.innerHTML ='Call us at 1(415)888-8888';
  let el2 = document.createElement('div');
  el2.id = 'address';
  el2.innerHTML = '123 Jump Street'
  let el3 = document.createElement('div');
  el3.id = 'legal';
  el3.innerHTML = 'For legal inquiries, please contact our lawyer at 1(415)382-5968';

  element.appendChild(el1);
  element.appendChild(el2);
  element.appendChild(el3);
  main.appendChild(element);
}

function switchTab(clicked) {
  let element = document.getElementById('aboutUs');
  let element2 = document.getElementById('menu');
  let element3 = document.getElementById('contact');

  if (clicked == '1') {
    element.style.display = 'flex';
    element2.style.display = 'none';
    element3.style.display = 'none';
  }
  else if (clicked =='2') {
    element.style.display = 'none';
    element2.style.display = 'flex';
    element3.style.display = 'none';
  }
  else if (clicked == '3') {
    element.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'flex';
  }
}

document.body.appendChild(component());