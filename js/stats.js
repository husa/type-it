var Statistic = function () {
	var startPoint = 0,
		endPoint = 0,

		timeElapsed = 0,

		symbolsTyped = 0,
		wordsTypes = 0,
	
		mistakesMade = 0;
	

	this.Mistake = function () {
		mistakesMade++;
	}
	this.setStartPoint = function (sp) {
		if (startPoint === 0) {
			startPoint = sp;
		}
	}
	this.setEndPoint = function (ep) {
		if (endPoint === 0) {
			endPoint = ep;
		}

		timeElapsed += (endPoint - startPoint);
		startPoint  = 0;
		endPoint    = 0;
	}


		function speedSymbols () {
			return  Math.round( symbolsTyped / (timeElapsed / (1000*60)) );
		}
		function speedWords () {
			return Math.round( wordsTypes / (timeElapsed / (1000*60)) );
		}
		function Accuracy () {
			return 100 - ( (mistakesMade * 100) / symbolsTyped );
		}
	this.getSpeedSymbols = function () {
		return speedSymbols();
	}
	this.getSpeedWords = function () {
		return speedWords();
	}
	this.getAccuracy = function () {
		return Accuracy();
	}

}// end Statistic constructor

var Stats = new Statistic();