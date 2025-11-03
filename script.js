// script.js
function sayHello() {
  alert("こんにちは！JavaScriptが動きました 🎉");
}
function showMessage(event) {
  event.preventDefault(); // ページがリロードされるのを防ぐ

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const output = document.getElementById("output");
  output.innerHTML = `${name} さん、メッセージありがとうございます！<br>"${message}" を受け取りました 😊`;
}
