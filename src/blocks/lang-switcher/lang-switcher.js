(function(){
  const item = document.querySelector('.lang-switcher__item.uk');

  if (!item) return;

  item.addEventListener('click', function (e) {
    //if ((e.offsetX > item.offsetWidth) || (e.offsetY > item.offsetHeight)) {
      //window.location.href = 'http://example.com/';
    //}

    if (item.classList.contains('active')) {
      console.log(item.previousElementSibling.querySelector('a').href);
      //window.location.href = item.previousElementSibling.querySelector('a').href;
    }
    else {
      console.log(item.querySelector('a').href);
    }

  });
}());
