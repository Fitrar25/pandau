const h1 = document.getElementById('heading1');
h1.innerHTML = 'Selamat Datang Di Blog';

const home = document.getElementsByClassName('home');
home[0].style.color = 'black';

const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}
var judul = document.querySelector('.baris h1');
judul.style.backgroundColor = 'white';

let penulis = document.querySelectorAll('h2');

for( let i = 0; i < penulis.length; i++){
    penulis[i].style.backgroundColor = 'gray';
}
