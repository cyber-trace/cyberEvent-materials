const btn = document.querySelector("#btn");

console.log(btn.innerHTML);
btn.addEventListener("click", function () {
  console.log("button clicked");
  btn.innerHTML = "clicked";
  alert("this is an alert");
});
