// Mini Project - Kalkulator Nilai Mahasiswa

// Bagian perhitungan (logika) 
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function tentukanStatus(nilai) {
  return nilai >= 60 ? "Lulus" : "Belum lulus";
}

//  Bagian validasi 
function nilaiValid(teks) {
  if (teks.trim() === "") return false;
  const angka = Number(teks);
  return !Number.isNaN(angka) && angka >= 0 && angka <= 100;
}

//  Bagian tampilan 
function tampilkanError(pesan) {
  const area = document.getElementById("hasil");
  area.innerHTML = '<div class="hasil gagal"></div>';
  area.firstChild.textContent = pesan;
}

function tampilkanHasil(akhir) {
  const area = document.getElementById("hasil");
  area.innerHTML =
    '<div class="hasil">' +
    "<strong>Nilai akhir:</strong> " + akhir.toFixed(2) + "<br>" +
    "<strong>Predikat:</strong> " + tentukanPredikat(akhir) + "<br>" +
    "<strong>Status:</strong> " + tentukanStatus(akhir) +
    "</div>";
}

//  Penghubung form 
function prosesNilai(event) {
  event.preventDefault();

  const tugas = document.getElementById("tugas").value;
  const uts = document.getElementById("uts").value;
  const uas = document.getElementById("uas").value;

  if (!nilaiValid(tugas) || !nilaiValid(uts) || !nilaiValid(uas)) {
    tampilkanError("Semua nilai harus diisi dengan angka pada rentang 0-100.");
    return;
  }

  const akhir = hitungNilaiAkhir(Number(tugas), Number(uts), Number(uas));
  tampilkanHasil(akhir);
}

document.getElementById("formNilai").addEventListener("submit", prosesNilai);

// Skenario uji (lihat di Console) 
// Skenario 1: 85, 78, 88 -> 84.10, B, Lulus
// Skenario 2: 40, 50, 45 -> 45.00, E, Belum lulus
// Skenario 3: 60, 60, 60 -> 60.00, C, Lulus (batas)
// Skenario 4: 120, 80, 70 -> ditolak (di luar rentang)
[[85, 78, 88], [40, 50, 45], [60, 60, 60]].forEach(([t, u, a]) => {
  const n = hitungNilaiAkhir(t, u, a);
  console.log(`Uji (${t}, ${u}, ${a}) -> ${n.toFixed(2)}, ${tentukanPredikat(n)}, ${tentukanStatus(n)}`);
});
