// Soal H.7 - Validasi form: nama tidak kosong dan nilai 0-100
function validasiForm(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const teksNilai = document.getElementById("nilai").value;
  const nilai = Number(teksNilai);
  const pesan = document.getElementById("pesan");

  const daftarError = [];

  if (nama === "") {
    daftarError.push("Nama tidak boleh kosong.");
  }

  if (teksNilai.trim() === "" || Number.isNaN(nilai)) {
    daftarError.push("Nilai harus diisi dengan angka.");
  } else if (nilai < 0 || nilai > 100) {
    daftarError.push("Nilai harus berada pada rentang 0-100.");
  }

  if (daftarError.length > 0) {
    pesan.className = "pesan error";
    pesan.textContent = daftarError.join(" ");
    return;
  }

  pesan.className = "pesan sukses";
  pesan.textContent = "Data valid: " + nama + " dengan nilai " + nilai + ".";
}

document.getElementById("formValidasi").addEventListener("submit", validasiForm);
