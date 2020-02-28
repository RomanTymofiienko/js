// DZ_1

// let button = document.getElementById("button");

// button.addEventListener("click", function() {
//   button.style.cssText = "display: none";
// });

// DZ_2

// let button = document.getElementById("button");
// let text = document.getElementById('hide')

// button.addEventListener('click', function() {
//     text.style.cssText = 'display: none'
// });

// DZ_3 Сделайте список, элементы которого можно выделять кликом.

// let ul = document.getElementsByTagName("ul")[0];

// let lastClickedLi = 0;

// ul.onclick = function(e) {
//   e = e || event;
//   let target = e.target || event.srcElement;

//   if (target.tagName != "LI") return;
//   if (event.metaKey || event.ctrlKey) {
//     toggleSelect(target);
//   } else if (event.shiftKey) {
//     selectFromLast(target);
//   } else {
//     selectSingle(target);
//   }

//   lastClickedLi = target;

//   selectSingle(target);
// };
// ul.onselectstart = ul.onmousedown = function() {
//   return false;
// };

// ul.onmousedown = function() {
//   return false;
// };

// function toggleSelect(li) {
//     li.classList.toggle('selected');
//   }

// function toggleSelect(li) {
//   li.classList.toggle("selected");
// }

// function selectSingle(li) {
//   deselectAll();
//   li.className = "selected";
// }

// function deselectAll() {
//   for (let i = 0; i < ul.children.length; i++) {
//     ul.children[i].className = "";
//   }
// }

// DZ_4

document.onmousewheel = document.onwheel = function() {
    return false;
  };
  
  document.addEventListener ("MozMousePixelScroll",
    function() { return false }, false);
  
  document.onkeydown = function(e) {
  }

