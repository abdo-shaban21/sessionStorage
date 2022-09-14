// sassoin storage
// for select box
let form = document.getElementById("form");
let selectBox = document.getElementById("select-color");
let options = document.querySelectorAll("#select-color option");
let inputUserN = document.getElementById("input1");
let inputEmail = document.getElementById("input2");
let inputPass = document.getElementById("input3");
let submit = document.getElementById("submit");
// for select box
// *******************user name***************************
// this statament will play when user do refrish
if (window.sessionStorage.getItem("userName")) {
  inputUserN.value = window.sessionStorage.getItem("userName");
}
// this statement will excit when the user keyup
inputUserN.addEventListener("keyup", () => {
  window.sessionStorage.setItem("userName", inputUserN.value);
});
// ****************email********************
// this statament will play when user do refrish
if (window.sessionStorage.getItem("email")) {
  inputEmail.value = window.sessionStorage.getItem("email");
}
// this statement will excit when the user keyup
inputEmail.addEventListener("keyup", () => {
  window.sessionStorage.setItem("email", inputEmail.value);
});
// ****************password********************
if (window.sessionStorage.getItem("password")) {
  inputPass.value = window.sessionStorage.getItem("password");
}
// this statement will excit when the user keyup
inputPass.addEventListener("keyup", () => {
  window.sessionStorage.setItem("password", inputPass.value);
  console.log(inputPass.value);
});
// *************** select color *******************
//  this statement will excit when the user change the value
selectBox.addEventListener("change", () => {
  window.sessionStorage.setItem("color", selectBox.value);
  inputUserN.style.color = window.sessionStorage.getItem("color");
  inputEmail.style.color = window.sessionStorage.getItem("color");
  inputPass.style.color = window.sessionStorage.getItem("color");
  options.forEach((ele, i, arr) => {
    ele.removeAttribute("selected");
    if (options[i].value === selectBox.value) {
      console.log(options[i].value);
      options[i].setAttribute("selected", "selected");
    }
  });
});
// this statament will play when user do refresh
if (window.sessionStorage.getItem("color")) {
  inputUserN.style.color = window.sessionStorage.getItem("color");
  inputEmail.style.color = window.sessionStorage.getItem("color");
  inputPass.style.color = window.sessionStorage.getItem("color");
  options.forEach((ele, i, arr) => {
    ele.removeAttribute("selected");
    if (options[i].value === window.sessionStorage.getItem("color")) {
      console.log(options[i].value);
      options[i].setAttribute("selected", "selected");
    }
  });
}
options.forEach((ele , i ,arr)=>
{
  if(options[i].hasAttribute("selected")){
    inputUserN.style.color = options[i].value
    inputEmail.style.color = options[i].value
    inputPass.style.color = options[i].value
  }
})
