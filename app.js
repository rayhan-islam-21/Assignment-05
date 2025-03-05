const colorArray = ["#FFDDC1", "#FFECB3", "#C8E6C9", "#B3E5FC", "#D1C4E9", "#F8BBD0", "#FFF9C4", "#E1F5FE", "#DCEDC8", "#F0F4C3"];
const colorCngBtn = document.getElementById('colorCngBtn');
colorCngBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
})

const firstNumber = document.getElementById('firstNumber');
const topNumber = document.getElementById('topNumber');
const taskAddDiv = document.getElementById('taskAdd');
const clearBtn = document.getElementById('clearBtn');
const titleName = document.getElementsByClassName('title');
console.log(titleName);


const completeBtn = document.getElementsByClassName('btnComplete');
let currentNumber = 6;
let currentTopNumber = 23;
for (let i = 0; i < completeBtn.length; i++) {
    completeBtn[i].addEventListener('click', function () {
        currentNumber = currentNumber - 1;
        currentTopNumber = currentTopNumber + 1;
        firstNumber.innerHTML = currentNumber;
        topNumber.innerHTML = currentTopNumber;
        const newDiv = document.createElement('div');
        taskAddDiv.appendChild(newDiv);
        newDiv.style.backgroundColor = '#F4F7FF';
        newDiv.style.borderRadius = '12px';
        newDiv.style.padding = '10px';
        newDiv.innerHTML = `<h1 class = 'text-xl'>You have completed the task ${titleName[i].innerHTML+'issue at'} </h1>`;
        completeBtn[i].disabled = true;
        completeBtn[i].style.backgroundColor = 'gray';
        if (currentNumber === 0) {
            alert('Congratulations! You have completed all the current tasks');
        }
    })
}

clearBtn.addEventListener('click', function () {
    taskAddDiv.innerHTML = '';
});
