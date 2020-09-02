  $(document).ready(function(){
  $('body').animate({scrollTop: 70});
  highlightNavLink(document.getElementById('home'));
  simulateWrite($('#home-text'));
  generateProjectCards();
});
$("a.nav-link").click(function(e){
  e.preventDefault();
  var idOfAnchor = $(this).attr('href');
  $('body').animate({scrollTop: $(idOfAnchor).offset().top - 70});
});
$(window).scroll(function(){
  var home = document.getElementById('home');
  var work = document.getElementById('works');
  var contact = document.getElementById('contact');
  var elems = [home, work, contact];
  var currentElem = home;
  elems.forEach(function (elem) {
    var topOffset = elem.getBoundingClientRect().top;
    if(topOffset > -100 && topOffset < 300){
      currentElem = elem;
      highlightNavLink(currentElem);
    }
  });
});
$('#showcase-all').click(function () {
  $('#site-carousel').removeClass('animated fadeInLeft');
  $('#all-projects').removeClass('animated fadeOutRight');
  $('#site-carousel').addClass('animated fadeOutRight');
  $('#all-projects').addClass('animated fadeInLeft');
  setTimeout(function(){
    $('#site-carousel').hide();
    $('#all-projects').show();
  }, 800);
});
$('#showcase-hide').click(function () {
  $('#site-carousel').removeClass('animated fadeOutRight');
  $('#all-projects').removeClass('animated fadeInLeft');
  $('#site-carousel').addClass('animated fadeInLeft');
  $('#all-projects').addClass('animated fadeOutRight');
  setTimeout(function(){
    $('#site-carousel').show();
    $('#all-projects').hide();
  }, 800);
});
function highlightNavLink(domNode){
  var id = '#' + domNode.id;
  $("a.nav-link").css({'color': '#196966'});
  $("a[href='"+id+"'").css({'color': '#fff'});
}
function generateProjectCards() {
  var parent = $('#all-projects');
  var child = $('#project-template');
  child.remove();
  for(var i = 0; i < 8; i++){
    var newChild = child.clone();
    parent.prepend(newChild);
  }
}
function simulateWrite(domNode) {
  let text = domNode.text(),
      newText = "",
      suspendInterval = 1,
      randMultiple = 0,
      index = 0;
  domNode.text("");
  let intvl = setInterval(function(){
    if(text.charCodeAt(index) === 32) {
      randMultiple = randMultiple === 0
        ? Math.floor(Math.random()*5+1) : randMultiple;
      if(suspendInterval === randMultiple){
        randMultiple = 0, suspendInterval = 1, index++;
      } else {
        suspendInterval++;
      }
    } else {
      index++;
    }
    newText = text.substr(0, index);
    domNode.text(newText);
    if(index >= text.length) clearInterval(intvl);
  }, 50);
}