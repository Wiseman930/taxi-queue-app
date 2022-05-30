// write your DOM code here.


// DOM element references
const joinQueueButton = document.querySelector(".join_queue");
const leaveQueueButton = document.querySelector(".leave_queue");
const countPassenger = document.querySelector('.count');


// create Factory Function instance

const passenger = TaxiQueue();
// DOM events




joinQueueButton.addEventListener('click', function(){
    
    countPassenger.innerHTML = passenger.queueLength();

})
leaveQueueButton.addEventListener('click', function(){
    countPassenger.innerHTML = passenger.queueLength();

})
