import './style.css';

function component() {
  let content = document.createElement('div');
  content.id = 'content';
  
  let header = document.createElement('div');
  header.id = 'header';
  let footer = document.createElement('div');
  footer.id = 'footer';
  content.appendChild(header);
  content.appendChild(footer);

  

  



  return content;
}

document.body.appendChild(component());