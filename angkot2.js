var jmlAngkot = 10;
var angkotBeroperasi = 7;
var angkot = 1;

while (angkot <= angkotBeroperasi) {
    console.log('angkot No.' + angkot + ' sedang beroperasi');
    angkot++;
}


for (angkot = angkotBeroperasi + 1; angkot <= jmlAngkot; angkot++) {
    console.log('angkot No.' + angkot + ' sedang tidak beroperasi');
}