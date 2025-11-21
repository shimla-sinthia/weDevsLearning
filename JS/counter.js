// If count is not in localStorage, initialize it
if (!localStorage.getItem('count')) {
    localStorage.setItem('count', 0);
}


function counter() {
    let count = localStorage.getItem('count');
    count++;

    document.querySelector('h1').innerHTML = count;

    // if (count % 10 === 0) {
    //     alert(`The counter is now ${count}`);
    // }

    localStorage.setItem('count', count);
}

document.addEventListener('DOMContentLoaded', function () {

    // Load count correctly (convert to number)
    count = localStorage.getItem('count');

    // Display it
    document.querySelector('h1').innerHTML = count;

    // Button action
    document.querySelector('button').onclick = counter;

    // setInterval(counter, 1000);
});
