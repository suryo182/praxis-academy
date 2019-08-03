const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function() {
  let myBarang = input.value;

  let listBarang = document.createElement('li');
  let listText = document.createElement('span');
  let listButton = document.createElement('button');

  listBarang.appendChild(listText);
  listText.textContent = myBarang;
  listBarang.appendChild(listButton);
  listButton.textContent = 'Hapus';
  list.appendChild(listBarang);

  listButton.onclick = function(e) {
    list.removeChild(listBarang)
  }

  input.focus();
}
