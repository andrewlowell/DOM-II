const blocks = Array.from(document.getElementsByClassName('block'));

let moveIt;
let isMouseDown = false;
let isHovered = false;

function cb() {
  console.log('Callback firing');
  if (isMouseDown && isHovered) { 
    if (cb.elem.style.marginLeft == '') {
      cb.elem.style.marginLeft = '10px';
    }
    else {
      cb.elem.style.marginLeft = `${parseInt(cb.elem.style.marginLeft) + 10}px`;
    }
  }
}

blocks.forEach(i => {

  i.addEventListener('click', e => {
    let parent = i.parentNode;
    parent.insertBefore(i, parent.firstChild);
  });

  i.addEventListener('mouseenter', e => {
    isHovered = true;
  });

  i.addEventListener('mouseleave', e => {
    isHovered = false;
    clearInterval(moveIt);
  });

  i.addEventListener('mousedown', e => {
    isMouseDown = true;
    cb.elem = i;
    moveIt = setInterval(cb, 100);
  });

  i.addEventListener('mouseup', e => {
    isMouseDown = false;
    clearInterval(moveIt);
  });

});