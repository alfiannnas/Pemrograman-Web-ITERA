//NOMOR 1 Membuat teks kedalam id/class html tertentu
let changeText = document.querySelector("#judul");
changeText.innerText = "Daftar Riwayat Hidup (SOAL Nomor 1 JS)";

//NOMOR 2 Membuat element html kedalam id/class html tertentu
let newElement = document.createElement("p");
newElement.innerHTML = " & Dan Perilaku Saya (Ini adalah elemen html yang baru dibuat) (SOAL NOMOR 2 JS)";
console.log(newElement);
let newClass = document.querySelector("#teks");
newClass.append(newElement);

//NOMOR 3 Membuat element yang dinamis berdasarkan event handler tertentu, contoh: button di click berubah halaman
const border = ["solid #00FFFF", "solid #FFFFFF", "solid #FF8C00", "solid #008000", "solid #6A5ACD"];
let i = 0;

document.querySelector("#tombol").addEventListener("click", function (event) {
  i++;
  if (i >= border.length) {
    i = 0;
  }
  document.querySelector("table").style.border = border[i];
});
