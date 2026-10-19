// Eksperimen Mandiri

// Eksperimen 1: Latihan 3 dengan input prompt (dikonversi ke number)
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", b !== 0 ? a % b : "Tidak dapat dibagi nol");
}

function eksperimen1() {
  const teksA = prompt("Masukkan bilangan pertama:");
  const teksB = prompt("Masukkan bilangan kedua:");
  if (teksA === null || teksB === null || teksA.trim() === "" || teksB.trim() === "") {
    alert("Input tidak boleh kosong.");
    return;
  }
  const a = Number(teksA);
  const b = Number(teksB);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Input harus berupa angka.");
    return;
  }
  operasiDasar(a, b);
  alert("Hasil operasi ditampilkan di Console.");
}

//Eksperimen 2: Tabel perkalian 7 dari 1 sampai 10 
function eksperimen2() {
  let teks = "";
  for (let i = 1; i <= 10; i++) {
    const baris = "7 x " + i + " = " + (7 * i);
    console.log(baris);
    teks += baris + "\n";
  }
  document.getElementById("tabel7").textContent = teks;
}

// Eksperimen 3: Function cekGenap 
function cekGenap(angka) {
  return angka % 2 === 0;
}

function eksperimen3() {
  const input = document.getElementById("inputGenap").value;
  const hasil = document.getElementById("hasilGenap");
  const angka = Number(input);
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }
  hasil.textContent = angka + " -> cekGenap() = " + cekGenap(angka);
}

//Eksperimen 4: Validasi kolom tidak boleh kosong 
document.getElementById("formKosong").addEventListener("submit", (event) => {
  event.preventDefault();
  const nama = document.getElementById("kolomNama").value.trim();
  const kota = document.getElementById("kolomKota").value.trim();
  const hasil = document.getElementById("hasilForm");

  if (nama === "" || kota === "") {
    hasil.textContent = "Semua kolom wajib diisi.";
    hasil.style.color = "#c62828";
  } else {
    hasil.textContent = "Data diterima: " + nama + " dari " + kota + ".";
    hasil.style.color = "#2e7d32";
  }
});

// Eksperimen 5: Menu makanan dengan 5 pilihan 
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => item.addEventListener("change", hitungTotal));

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

//Eksperimen 6: Tombol tampil/sembunyi
function toggleKotak() {
  const kotak = document.getElementById("kotakToggle");
  kotak.style.display = kotak.style.display === "none" ? "block" : "none";
}
