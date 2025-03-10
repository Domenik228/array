let arr = ["olma", "banan", "gilos", "orik"];

console.log("Massiv uzunligi " + arr.length);

alert("Massiv uzunligi " + arr.length);

if (confirm("Bitta element olib tashlaylikmi?")) {
    arr.pop(); 
}
console.log("Yangi massiv ", arr);
alert("Yangi massiv " + arr.join(", "));