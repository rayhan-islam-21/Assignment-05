const colorArray = ["#FFDDC1", "#FFECB3", "#C8E6C9", "#B3E5FC", "#D1C4E9", "#F8BBD0", "#FFF9C4", "#E1F5FE", "#DCEDC8", "#F0F4C3", "#FFAB91", "#FFCC80", "#E6EE9C", "#80DEEA", "#CE93D8", "#F48FB1", "#FFD54F", "#A5D6A7", "#81D4FA", "#B39DDB", "#FF8A65", "#FFF176", "#90CAF9", "#AED581", "#D7CCC8"];

const colorCngBtn = document.getElementById('colorCngBtn');

colorCngBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
});


const firstNumber = document.getElementById('firstNumber');
const topNumber = document.getElementById('topNumber');
const taskAddDiv = document.getElementById('taskAdd');
const clearBtn = document.getElementById('clearBtn');
const titleName = document.getElementsByClassName('title');
const dateBtn = document.getElementById('datebtn');
const weekDayName = document.getElementById('dayname');
const nextBtn = document.getElementById('nextBtn');
const date = new Date();
const day = date.getDate();
const year = date.getFullYear();

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const month = monthName[date.getMonth()];
const dayName = days[date.getDay()];
weekDayName.innerHTML = `<h1 class="text-xl font-bold">${dayName}</h1>`;
dateBtn.innerHTML = `<h1 class="text-2xl"> ${month} ${day} ${year}</h1>`;




const completeBtn = document.getElementsByClassName('btnComplete');
let currentNumber = 6;
let currentTopNumber = 23;
for (let i = 0; i < completeBtn.length; i++) {
    completeBtn[i].addEventListener('click', function () {
        currentNumber = currentNumber - 1;
        currentTopNumber = currentTopNumber + 1;
        firstNumber.innerHTML = currentNumber;
        topNumber.innerHTML = currentTopNumber;
        alert('Board Updated Successfully');
        const newDiv = document.createElement('div');
        taskAddDiv.appendChild(newDiv);
        newDiv.style.backgroundColor = '#F4F7FF';
        newDiv.style.borderRadius = '12px';
        newDiv.style.padding = '10px';
        if (date.getHours() > 12) {
            const time = date.getHours() - 12 + ':' + date.getMinutes() + ':' + date.getSeconds() + ' PM';
            newDiv.innerHTML = `<h1 class = 'text-xl'>You have completed the task ${titleName[i].innerHTML} issue at ${time} </h1>`;
        }
        else {
            const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' AM';
            newDiv.innerHTML = `<h1 class = 'text-xl'>You have completed the task ${titleName[i].innerHTML} issue at ${time} </h1>`;
        }

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

nextBtn.addEventListener('click', function () {
    location.href = 'second.html';
});
