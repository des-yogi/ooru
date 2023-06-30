(function(){
  //if (!autosize()) return;
  autosize(document.querySelectorAll('textarea'));
})();

(function(){
  const phoneElems = document.getElementsByClassName('phone-mask');
  Array.prototype.forEach.call(phoneElems, function (item) {
    const phoneMask = IMask(
      item, {
        mask: '+{38} (\\000) 000 00 00',
        lazy: false // make placeholder always visible
    });
  });
}());
