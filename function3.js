function tambah() {
    let hasil = 0;
    for (i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;

}
let coba = tambah(1, 2, 4, 3);
console.log(coba);