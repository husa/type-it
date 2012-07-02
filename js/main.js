var MODEL = function () {
	var	mistake          = false,
		mistake_position = -1;

	function getLetter( msg ) {	
		// pressed_letter is the last letter in msg
		return  msg[msg.length - 1];
	}// end getLetter

	function isOver (len1, len2) {
		if (len1 === len2) {
			return true;
		} else {
			return false;
		}
	}// end isOver

	function check (current_text) {	
		var	current_length = current_text.length,
			pressed_letter = getLetter(current_text);
			
			// if it's over 
			if (isOver(current_length, training_text.length)) { View.onEnd(); return }

			// if there are no mistakes before this letter
			if (!mistake) {
				// if this letter is incorrect
				if (pressed_letter != training_text[current_length - 1]) {
					mistake = true;
					mistake_position = current_length;

					View.mistakeMade();

				// if this letter is correct
				} else {
					// highlight next button
					View.highlightButton(training_text[current_length]);
				}
			// if there was a mistake before this letter
			} else {
				// if mistake was deleted (backspace)
				if ( ( current_length == ( mistake_position - 1) ) || (current_length < mistake_position - 1) ) {
					mistake = false;
					mistake_position = -1;

					View.mistakeFixed(current_length);
				}
			}// end if

			View.refreshPosition(current_length);
	}// end check

	this.check = function (current_text) {
		check(current_text);
	}// end check method

}// end MODEL

var VIEW = function () {
	var Buttons	= $('.button');

	this.refreshPosition = function (len) {
		var len_symbols = text_field.html().length,
			len_px      = text_field.width(),
			x           = (len_px * len) / len_symbols;

			input_field.stop().animate({
				'left' : -x + 'px', 
				'width' : '+=' + (len_px / len_symbols) + 'px'}, 
				300);
			text_field.stop().animate({
				'left' : -x + 'px'},
				300);
	}// end refreshPosition

	this.onEnd = function () {
		var typed_text    = input_field.val(),
			typed_symbols = typed_text.length,
			typed_words   = typed_text.split(' ').length;

			console.log(' - time measurement stopped');
			if (time2 == false) { time2 = new Date(); }
			//console.log( (time2 - time1) / (1000 * 60) );
			console.log('speed   = ' +  Math.round( typed_symbols / ((time2 - time1) / (1000*60)) ) + ' ch/min');

			console.log('text    = ' + typed_text);
			console.log('symbols = ' + typed_symbols);
			console.log('words   = ' + typed_words);

			alert('Your speed is ' + Math.round( typed_symbols / ((time2 - time1) / (1000*60)) ) + ' ch/min');
	}// end onEnd

	this.highlightButton = function (key) {
		var spec_symbols = '`~!@#$%^&*()_+1234567890-=[{]}\\|;:\'"",<.>/?';

		$('.highlighted').removeClass('highlighted');

		if (key == ' ') {
			$('.c32').addClass('highlighted');
			return;
		}
		if ( spec_symbols.indexOf(key) == -1 ) {
			if (key == key.toUpperCase()) {
				$('.c16').addClass('highlighted');
				key = key.toLowerCase();
			}
		}
		for (var i in Buttons) {
			if (key == Buttons[i].innerText) {
				$(Buttons[i]).addClass('highlighted');
			}
		}
	}// end highlightButton

	this.mistakeMade = function () {
		input_field.addClass('mistake');
		$('.highlighted').removeClass('highlighted');		
		$('.c8').addClass('highlighted');
	}// end mistakeMade

	this.mistakeFixed = function (len) {
		input_field.removeClass('mistake');
		$('.c8').removeClass('highlighted');
		this.highlightButton(training_text[len]);
	}// end mistakeFixed

	this.outputLesson = function (training, keyboard) {
		// initializing left margin and ouput lesson and initializing "input_field"
		text_field
			.css({'left' : '0px'})
			.html(training_text);
		input_field
			.css({'left' : '0px'})
			.val('');

		// output "new letters"
		for (var s = '', i=0, n = training.newLetters.length; i < n; i++) {
			s = s + ' ' + training.newLetters[i]; 
		}
		$('#info-wrapper').text('New Letters: ' + s );

		// ouput keyboard layout
		for (var key in keyboard) {
			$('.c' + key + ' span').html(keyboard[key]);
		}

		// highlight first key
		this.highlightButton(training_text[0]);
		// focus on input_field
		input_field.focus();
	}// end outputLesson

}// end VIEW

CONTROLLER = function () {

	function disableDefaultKeys () {
		input_field.on('keydown', function (e) {
			var defaultKeys = [13, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46];
			if (defaultKeys.indexOf(e.keyCode) != -1) {
				e.preventDefault();
			}			
		})
	}// end disableDefaultKeys

	function bindKeypress () {
		input_field.on('keyup', function (e) {
			if (!time1) {
				time1 = new Date();
				console.log(' - time measurement started');

				Model.check( $(this).val() );

			} else {

				Model.check( $(this).val() );

			}
		});
	}// end bindKeypress

	function setLesson () {
		var lang  = $('#select-language').val(),
			level = $('#select-level').val();
		training_text = lecture[ lang ][ level ].lesson;

		View.outputLesson(lecture[ lang ][ level ], lecture[ lang ].alphabet);

	}// end setLesson

	function init (first) {
			disableDefaultKeys();
			bindKeypress();
		if (!first) {
			setLesson();	
		} else {
			var lang  = 'sample'
			level = 'level';
			training_text = lecture[ lang ][ level ].lesson;

			View.outputLesson(lecture[ lang ][ level ], lecture[ lang ].alphabet);
		}
	}// end init

	$('#button-start').on('click', function (e) {
		init(false);
	})

	init(true);
}//end CONTROLLER


$(function () {	
	text_field    = $('#text-field');
	input_field   = $('#input-field');
	training_text = '';

	

 	lecture = new Lecture();

	time1 = false, time2 = false;

	View 	   = new VIEW();
	Model 	   = new MODEL();
	Controller = new CONTROLLER();

});