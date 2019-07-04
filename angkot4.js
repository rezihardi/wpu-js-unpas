var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (angkot = 1; angkot <= jmlAngkot; angkot++) {
    if (angkot <= angkotBeroperasi) {
        console.log('Angkot No.' + angkot + ' sedang beroperasi');
    } else if (angkot === 8) {
        console.log('Angkot No.' + angkot + ' sedang lembur');
    } else {
        console.log('Angkot No.' + angkot + ' sedang tidak beroperasi');
    }
}