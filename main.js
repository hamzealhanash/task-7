const codes = document.querySelectorAll(".code ");
codes[0].focus();
codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(() => {
        codes[idx + 1].focus();
      }, 10);
    } else if (e.key === "backspace") {
    }
  });
});
const phone = document.querySelector(".phone");
phone.focus();
document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".verification-page").classList.add("active");
  document.querySelector(".phone-page").classList.add("inactive");
});
document.querySelector(".closing-btn").addEventListener("click", function () {
  document.querySelector(".verification-page").classList.remove("active");
  document.querySelector(".phone-page").classList.remove("inactive");
});

function write_firstname(elem) {
  var fnid = document.getElementById("p");
  fnid.innerHTML = elem.value;
}
document.querySelector("strong").addEventListener("click", function () {
  alert("the code was successfully generated");
});
