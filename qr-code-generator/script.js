function generateQR() {
    gAPI = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var text = document.getElementById("qrtext").value;
    var size = document.getElementById("dim").value;
    var img = document.getElementById("qrimg");

    if(text != "") {
        img.src = gAPI+size+"x"+size+"&chl="+text;
        console.log(img.src);
    }
    else {
        alert("Please enter text!");
    }
}