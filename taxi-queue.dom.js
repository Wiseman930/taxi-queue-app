// write your DOM code here.


// DOM element references
const joinQueueButton = document.querySelector(".join_queue");
const leaveQueueButton = document.querySelector(".leave_queue");
const countPassenger = document.querySelector('.count');


// create Factory Function instance

const passenger = TaxiQueue();
// DOM events




joinQueueButton.addEventListener('click', function(){

    passenger.joinQueue();
    countPassenger.innerHTML = passenger.queueLength();

})
leaveQueueButton.addEventListener('click', function(){

    passenger.leaveQueue();
    countPassenger.innerHTML = passenger.queueLength();

})

const taxiJoinButton = document.querySelector(".join_taxi_queue");
const taxiDepartButton = document.querySelector(".depart");
const countTaxi = document.querySelector('.taxi_queue_count');

const taxi = TaxiQueue()


taxiJoinButton.addEventListener('click', function(){

    taxi.joinTaxiQueue();
    countTaxi.innerHTML = taxi.taxiQueueLength();

})
taxiDepartButton.addEventListener('click', function(){

    taxi.taxiDepart();
    countTaxi.innerHTML = taxi.taxiQueueLength();

     passenger.taxiDepart()
     countPassenger.innerHTML = passenger.queueLength();
})



