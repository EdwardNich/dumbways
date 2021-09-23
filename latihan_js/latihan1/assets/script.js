import { getId } from './helper.js';

class Mahasiswa {
    constructor(nama, umur) {
        this.nama = nama
        this.umur = umur
    };

    kegiatan(act) {
        return `Saya ${this.nama} sedang ${act}`;
    }
}

const form = document.getElementById('form');
getId('form').addEventListener('submit', (e) => {
    e.preventDefault();
})

// const nama = prompt('Siapa nama mu? ');

let mhs = new Mahasiswa(nama, 18);
console.log(mhs.kegiatan('makan'));