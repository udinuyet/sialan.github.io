const tahap = document.querySelectorAll('.tahap');
const audio = document.getElementById('myAudio'); // Ambil elemen audio

let indexTahap = 0;

function cekJawaban() {
  const jawaban = document.getElementById('jawaban').value;
  if (jawaban.trim() !== "") {
    document.getElementById('jawaban-teks').innerText = "Selamat, kamu memenangkan teka-teki ini. Bagaimana dengan memenangkan hatiku juga?";
    document.getElementById('teka-teki').classList.remove('active');
    document.getElementById('jawaban-container').classList.add('active');
  } else {
    alert("Mohon isi jawaban terlebih dahulu!");
  }
}

function jawabanBenar() {
  document.getElementById('jawaban-container').classList.remove('active');
  document.getElementById('hasil').classList.add('active');
  audio.play(); // Putar suara
}

function jawabanSalah() {
  const buttons = document.querySelectorAll('#jawaban-container button.nggak');
  buttons[0].style.position = 'absolute';
  buttons[0].style.left = Math.random() * (window.innerWidth - 100) + 'px';
  buttons[0].style.top = Math.random() * (window.innerHeight - 50) + 'px';
}

audio.addEventListener('ended', function() {
  // Panggil metode play() lagi saat audio selesai diputar
  this.play();
});