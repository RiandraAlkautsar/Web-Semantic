const judul = document.getElementsByTagName('h1')[0];
const tUbahWarna = document.getElementById('tUbahWarna');


judul.innerHTML = "Riandra Alkautsar";

tUbahWarna.onclick = function () {
    judul.style.color = 'red';
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    judul.style.color = 'rgb(' + r + ', ' + g + ', ' + b + ')'
});