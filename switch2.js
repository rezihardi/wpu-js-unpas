var item = prompt('masukkan nama makanan / minuman yang anda pilih:  \n (cth: nasi, hamburger, daging, susu, dll');

switch (item) {
    case 'nasi':
    case 'daging':
        alert('makanan yang anda masukkan adalah makanan sehat');
        break;

    case 'hamburger':
    case 'pizza':
        alert('makanan yang anda masukkan tidak sehat');
        break;

    default:
        alert('makanan yang anda masukkan salah');
        break;
}