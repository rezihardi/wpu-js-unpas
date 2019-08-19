let jmlAngkot = 10;
let angkotBeroperasi = 7;
let angkot = 1;

while (angkot <= angkotBeroperasi) {
    console.log('angkot No.' + angkot + ' sedang beroperasi');
    angkot++;
}


for (angkot = angkotBeroperasi + 1; angkot <= jmlAngkot; angkot++) {
    console.log('angkot No.' + angkot + ' sedang tidak beroperasi');
}