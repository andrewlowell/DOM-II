// Your code goes here

const busContainer = document.getElementById('bus-container');
const bus = document.getElementById('bus');
const place = document.getElementById('place');
const links = Array.from(document.getElementsByTagName('a'));
const buttons = Array.from(document.getElementsByClassName('btn'));
const title = document.getElementById('title');

let hoverBus = false;
const options = ['fa-city', 'fa-university', 'fa-mosque', 'fa-synagogue', 'fa-school', 'fa-hospital', 'fa-hotel', 'fa-warehouse'];

window.onload = function() {
  TweenMax.to('img', 2, {rotation:360});
}
window.addEventListener('wheel', e => {
  if (hoverBus) {
    if (e.deltaY < 0) {
      if (bus.style.marginLeft == '') {
        bus.style.marginLeft = '10px';
      }
      else {
        bus.style.marginLeft = `${parseInt(bus.style.marginLeft) + 10}px`;
      }
    }
    if (e.deltaY > 0) {
      if (bus.style.marginLeft == '' || bus.style.marginLeft == '0px') {
        bus.style.marginLeft = '0px';
      }
      else {
        bus.style.marginLeft = `${parseInt(bus.style.marginLeft) - 10}px`;
      }
    }
  }
});
place.ondblclick = function() {
  let rand = Math.floor(Math.random() * options.length);
  place.classList.remove(place.classList.item(2));
  place.classList.add(options[rand]);
}
busContainer.onmouseover = function() {
  hoverBus = true;
  document.body.style.overflow = 'hidden';
}
busContainer.onmouseout = function() {
  hoverBus = false;
  document.body.style.overflow = '';
}
window.onkeydown = function() {
  title.style.color = 'red';
}
window.onkeyup = function() {
  title.style.color = 'black';
}
window.oncontextmenu = function() {
  alert('No rest for the weary, dude :P');
}
links.forEach(l => {
  l.addEventListener('click', e => {
    l.style.display = 'none';
  });
});
document.addEventListener('copy', e => {
  e.clipboardData.setData('text/plain', 'Oh no you didn\'t!');
  e.preventDefault();
});