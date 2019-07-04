var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (angkot = 1; angkot <= jmlAngkot; angkot++) {
    if (angkot <= angkotBeroperasi) {
        console.log('Angkot No.' + angkot + ' sedang beroperasi');
    } else {
        console.log('Angkot No.' + angkot + ' sedang tidak beroperasi');
    }
}