// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let isRuning = false;
// let timerclear;


// function updateTime() {

//     if (seconds === 59) {

//         seconds = 0;
//         if (minutes === 59) {
//             minutes = 0;
//             hours++;
//         }
//         minutes++;
//     } else {
//         seconds++;
//     }
// display();

// }

// function display(){
//     document.querySelector('#hours').innerHTML = hours;
//     document.querySelector('#minutes').innerHTML = minutes;
//     document.querySelector('#seconds').innerHTML = seconds;
//   }

// function start() {
//     if (isRuning === false) {
//         timerclear = setInterval(updateTime, 1000);
//         isRuning = true;
//     }
// }
// function stop() {
//     clearInterval(timerclear);
//     isRuning=false;
// }
// function reset() {
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     stop();
//     display();
//     isRuning = false;

// }




//            ------------------------------------- WEATHER APP -------------------------------------------


// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function (response) {
        // handle success
        for (let i = 0; i < response.data.length; i++) {
            let message = response.data[i];
            document.querySelector('ul').innerHTML += `
        <ul>
        <li>
        <h3>${message.name}</h3>
        <p>${message.number}</p>
        <p>${message.time}</p>
        <p>${message.firstLine}</p>
        <img src="${message.profilePic}">
        </li>
        </ul>
        `
        }
        console.log("Success")
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log("errorr")
        console.log(error);
    })
    .finally(function () {
        // always executed
        console.log("the end")
    });










