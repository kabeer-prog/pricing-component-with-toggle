
// let checking = document.getElementsByClassName("")

// function changePrice(){
//   let lew = document.getElementById('#annually')

//   lew.style.display ="none"
// }

const checkBox = document.querySelector('#clickSwitch');
const monthly = document.querySelectorAll('.annually')

checkBox.addEventListener('click', function(){
  
// alert ('it got clicked')
document.getElementById("annually").style.display = "block";
document.getElementById("monthly").style.display = "none";

// document.querySelectorAll('.annually').forEach.style.display = "block"
// document.querySelectorAll('.monthly').forEach.style.display = "none"
}
);

// document.querySelector('#clickSwitch').addEventListener('click',change)
// function change(){
//     document.querySelector('.monthly').style.display = 'none'
    
// }
// function myFunc() {
//     var para = document.getElementById("p");
//     para.classList.toggle("paragraphClass");
// }

// document.querySelectorAll('.classname').forEach(function(el) {
//     el.style.display = 'none';
//  });