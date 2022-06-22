let a = +prompt("Nhap vao chieu cao").value;
let b = +prompt("Nhap vao can nang").value;
let bmi = a / Math.pow(b,2).value;
if (bmi < 16){
    alert("Gay do III");
}
if(16 <= bmi < 17){
    alert("Gay do II");
}else if(17 <= bmi < 18.5){
    alert("Gay do I");
}else if(18.5 <= bmi < 25){
    alert("Binh thuong");
}else if(25 <= bmi < 35){
    alert("Beo phi do I");
}else if(35 <= bmi < 40){
    alert("Beo phi do II");
}else if(bmi > 40){
    alert("Beo phi do III");
}