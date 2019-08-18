let tanya = true;
while (tanya == true) {

    //menangkap pilihan player
    let player = prompt('silahkan pilih pilihan anda');

    // menangkap pilihan computer
    //membangkitkan pilihan random
    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'semut';
    } else if (comp > 0.34 && comp > 0.67) {
        comp = 'gajah';
    } else {
        comp = 'manusia';
    }
    console.log(comp);

    let hasil = '';
    //menentukan rules
    if (player == comp) {
        hasil = 'seri';
    } else if (player == 'gajah') {
        // if(comp == 'orang'){
        //     hasil = 'menang';
        // }else {
        //     hasil = 'kalah';
        // }
        hasil = (comp == 'orang') ? 'menang' : 'kalah';
    } else if (player == 'orang') {
        hasil = (comp == 'gajah') ? 'kalah' : 'menang';
    } else if (player == 'semut') {
        hasil = (comp == 'orang') ? 'kalah' : 'menang';
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }
    //menentukan hasilnya
    alert("kamu memilih : " + player + " dan komuter memilih : " + comp + "\n maka hasilnya dalah : Kamu " + hasil)

    tanya = confirm('mau main lagi?');
}
alert('terima kasih sudah bermain');