$(document).ready(function(){
  $('.sidenav').sidenav();
});
new fullpage('#fullpage', {
  sectionsColor: ['#EEE2DC', '#BAB2B5', '#C0C0C0', '#ADD8E6'],
  menu: '#myNavbar',
  anchors: ['process1', 'process2', 'process3', 'process4'],
});