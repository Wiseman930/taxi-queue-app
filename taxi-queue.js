function TaxiQueue() {
    var peaopleJoin = 0;
	var taxiJoin = 0;


	function joinQueue() {
        peaopleJoin++;
		return peaopleJoin;
	}

	function leaveQueue() {
		if (peaopleJoin > 0){
			peaopleJoin --;
		}

	}

	function joinTaxiQueue() {
       taxiJoin ++;

	}

	function taxiDepart(){
		if(peaopleJoin >= 12){
		taxiJoin --;
		peaopleJoin -= 12;
		}

	}
	function queueLength() {
		return peaopleJoin;
	}
	function taxiQueueLength() {
		return taxiJoin;
	}


	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}