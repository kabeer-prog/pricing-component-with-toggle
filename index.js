// Write a function to change the prices displayed when the checkbox through the toggle switch is triggered

//Checkbox has a method to know if checked or not("checked" and "unchecked")

//Best to use same class name for all the two different prices, monthly and annually

// Get the DOM to be able to manipulate the element through queryselectorAll which create a nodelist

// With a Nodelist, each of the elements containing same class is worked on

//The challenge can be solved using a for loop or the forEach method 

// When the check box is clicked i.e triggered, make the display for monthly to be none while that of the annually to be block

const checkBox = document.querySelector('#clickSwitch')
const text1 = document.querySelectorAll(".monthly")
const text2 = document.querySelectorAll(".annually")

function change(){
 
//     for(let i= 0; i < text1.length; i++){

//       if (checkBox.checked == true){
//     text1[i].style.display = "none"
//     text2[i].style.display = "block"
// }else  {
//   text1[i].style.display = "block"
//     text2[i].style.display = "none"
// }
//   }

//Check if the checkbox is triggered, perform the actions on the display else perform another action
 if(checkBox.checked ==true){
    text1.forEach(item => item.style.display ="none")
    text2.forEach(item => item.style.display = "block")
 }else{
  text1.forEach(item => item.style.display ="block")
  text2.forEach(item => item.style.display = "none")
 }
}
  