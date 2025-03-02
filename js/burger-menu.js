const boxBtn = document.querySelector('.box')
const boxList = document.querySelector('.box-list')

let btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('active not-active');
});

boxBtn.onclick = function () {
  boxList.classList.toggle('box-list-active')
  return
}