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
		return peaopleJoin;

	}

	function joinTaxiQueue() {
       taxiJoin ++;

	}
	function queueLength() {
		return peaopleJoin;
	}
	function taxiQueueLength() {
		return taxiJoin;
	}

	function taxiDepart(){
		if(peaopleJoin >= 12){
		peaopleJoin -= 12;
		}
		else if (taxiJoin > 0 ){
			 taxiJoin --;
		}

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