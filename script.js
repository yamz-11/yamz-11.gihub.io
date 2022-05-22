function tampilData() {
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var nike = document.getElementById("nike").value;
    var produk = document.getElementsByName("produk");
    var layanan = document.querySelector("input[name=layanan]:checked").value;
    var ks = document.getElementById("ks").value;

    var daftarproduk=''
    for (var produk2 of produk){
        if(produk2.checked){
            daftarproduk +=', '+produk2.value
        }
    }
    daftarproduk = daftarproduk.substring(1)

    alert( 
     "Nama : "+
     nama +
     
     "\nUmur : " +
     umur +
     
     "\nJenis Kelamin : " +
     jeniskelamin +

     "\nNilai Kepuasan : " +
     nike +

     "\nDari Mana Anda Mengetahui Produk Kami? : " +
     daftarproduk +

    "\nApakah Anda Menggunakan Layanan Kami? : " +
     layanan +

     "\nKritik dan Saran : " +
     ks 
     
    );
}