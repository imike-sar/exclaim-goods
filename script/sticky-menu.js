console.log("hey");

var scrollTop = document.body.scrollTop;
var menuNode = document.querySelector('.menu');
var offset = menuNode.getBoundingClientRect();
//console.log(offset.top + scrollTop);
var menuOffsetTop = offset.top + scrollTop;
var isMenuSticked = false;

document.addEventListener('scroll', function () {
  var scrollTop = document.body.scrollTop;

  if (scrollTop > menuOffsetTop && !isMenuSticked) {
    menuNode.classList.add('menu--stiky');
    isMenuSticked = true;
  } else if (scrollTop <= menuOffsetTop && isMenuSticked) {
    menuNode.classList.remove('menu--stiky');
    isMenuSticked = false;
  }
})
