const colorArray = [ "#FFDDC1","#FFECB3","#C8E6C9","#B3E5FC","#D1C4E9","#F8BBD0","#FFF9C4","#E1F5FE","#DCEDC8","#F0F4C3"];
const colorCngBtn = document.getElementById('colorCngBtn');
colorCngBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
})