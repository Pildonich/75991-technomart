for(var link=document.querySelectorAll(".buy"),popup=document.querySelector(".modal-cart"),close=popup.querySelector(".modal-close"),btn2=popup.querySelector("[class=btn2]"),writeUsBtn=document.querySelector(".write-us-btn"),writeUs=document.querySelector(".modal-write-us"),mapLink=document.querySelector(".contacts-button-map"),mapPopup=document.querySelector(".modal-map"),i=0;i<link.length;i++)link[i].addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),btn2.focus()});if(btn2.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&popup.classList.remove("modal-show"))}),mapPopup){var mapClose=mapPopup.querySelector(".modal-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show"))})}if(writeUs){var writeUsClose=writeUs.querySelector(".modal-close"),writeUsForm=writeUs.querySelector("form"),email=writeUs.querySelector("[name=email]"),userName=writeUs.querySelector("[name=user-name]"),text=writeUs.querySelector("[name=text]");writeUsForm.addEventListener("submit",function(e){userName.value&&email.value&&text.value||(e.preventDefault(),writeUs.classList.remove("modal-error"),writeUs.offsetWidth=writeUs.offsetWidth,writeUs.classList.add("modal-error"))}),writeUsClose.addEventListener("click",function(e){e.preventDefault(),writeUs.classList.remove("modal-show"),writeUs.classList.remove("modal-error")}),writeUsBtn.addEventListener("click",function(e){e.preventDefault(),writeUs.classList.add("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),writeUs.classList.contains("modal-show")&&(writeUs.classList.remove("modal-show"),writeUs.classList.remove("modal-error")))})}
