var link = document.querySelector(".buy");
var popup = document.querySelector(".modal-cart");
var close = popup.querySelector(".modal-close");
var btn2 = popup.querySelector("[class=btn2]");
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");

var writeUsBtn = document.querySelector(".write-us-btn");
var writeUs = document.querySelector(".modal-write-us");

var writeUsForm = writeUs.querySelector("form");
var email = writeUs.querySelector("[name=email]");
var name = writeUs.querySelector("[name=name]");
var text = writeUs.querySelector("[name=text]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  btn2.focus();
});

btn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

writeUsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.add("modal-show");
});

if (writeUs) {
  var writeUsClose = writeUs.querySelector(".modal-close");

  writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.remove("modal-show");
    writeUs.classList.remove("modal-error");
  });
}

writeUsForm.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !text.value ) {
    evt.preventDefault();
    writeUs.classList.remove("modal-error");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUs.classList.contains("modal-show")) {
      writeUs.classList.remove("modal-show");
      writeUs.classList.remove("modal-error");
    }
  }
});
