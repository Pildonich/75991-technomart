var link = document.querySelectorAll(".buy");
var popup = document.querySelector(".modal-cart");
var close = popup.querySelector(".modal-close");
var btn2 = popup.querySelector("[class=btn2]");
var writeUsBtn = document.querySelector(".write-us-btn");
var writeUs = document.querySelector(".modal-write-us");
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");


for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    btn2.focus();
  });
}

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

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

if (writeUs) {
  var writeUsClose = writeUs.querySelector(".modal-close");
  var writeUsForm = writeUs.querySelector("form");
  var email = writeUs.querySelector("[name=email]");
  var userName = writeUs.querySelector("[name=user-name]");
  var text = writeUs.querySelector("[name=text]");

  writeUsForm.addEventListener("submit", function (evt) {
    if (!userName.value || !email.value || !text.value ) {
      evt.preventDefault();
      writeUs.classList.remove("modal-error");
      writeUs.offsetWidth = writeUs.offsetWidth;
      writeUs.classList.add("modal-error");
    }
  });

  writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.remove("modal-show");
    writeUs.classList.remove("modal-error");
  });

  writeUsBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.add("modal-show");
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
}
