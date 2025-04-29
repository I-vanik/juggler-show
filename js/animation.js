const teamEl1 = document.querySelector('.team-info-img')

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
       teamEl1.classList.add('el1')
      } else {
        // change.target.classList.remove('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.7] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  anime({
    
  });
