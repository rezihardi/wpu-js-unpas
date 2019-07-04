function jumlahVolumeDuaKubus(a, b) {
    let volumeA;
    let VolumeB;
    let total;

    volumeA = a * a * a;
    VolumeB = b * b * b;

    total = volumeA + VolumeB

    return total;
}
alert(jumlahVolumeDuaKubus(2, 3));

console.log(jumlahVolumeDuaKubus(10, 15));