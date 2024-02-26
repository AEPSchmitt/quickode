var input = document.getElementById('barcode-text');
var barcode = document.getElementById('barcode');
var qrcode = new QRCode("qrcode", {
    text: "<3",
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

input.addEventListener('input', (event) => {
    qrcode.clear();
    JsBarcode("#barcode", event.target.value, { displayValue: false });
    qrcode.makeCode(event.target.value);
    document.getElementById("qrcode").title = '';
    var size = 12 - Math.floor(input.value.length / 4);
    if (size < 3) { size = 3 };
    input.style.fontSize = size + 'vw';
});

function resetInput(){
    input.select();
}

function hideBarcode(){
    barcode.classList.add('hidden');
}

function showBarcode(){
    barcode.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    input.value = '';
});