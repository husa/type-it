var Training = function () {
	var text_field    = $('#text-field'),
		input_field   = $('#input-field'),
		training_text = '';

	var lecture = new Lecture();

	var time1 = false, time2 = false;
	// this.getLanguage = function () {
	// 	return 'english';
	// }

	// this.getLevel = function () {
	// 	return 'level2';
	// }

	this.setLesson = function (lang, level) {
		training_text = lecture[ lang][ level ].lesson;
	}// end setLesson

	this.outputLesson = function () {
		text_field.html(training_text);
	}// end outputLesson

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

	this.disableDefaultKeys = function (e) {
		input_field.on('keydown', function (e) {
			var defaultKeys = [13, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46];
			if (defaultKeys.indexOf(e.keyCode) != -1) {
				e.preventDefault();
			}			
		})
	}// end disableDefaultKeys

	this.mistakeMade = function () {
		input_field.addClass('mistake');
	}// end mistakeMade

	this.mistakeFixed = function () {
		input_field.removeClass('mistake');
	}// end mistakeFixed

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
	}// end onEnd

	this.bindKeypress = function() {
		var obj              = this,
			mistake          = false,
			mistake_position = -1;

		function getLetter( msg ) {	
			// pressed_letter is the last letter in msg
			return  msg[msg.length - 1];
		}// end getLetter

		function isOver (len1, len2) {
			if (len1 === len2) {
				return true;
			}
		}// end isOver

		function check (current_text) {
			
			var	current_length = current_text.length,
				pressed_letter = getLetter(current_text);
				
				// if there are no mistakes before this letter
				if (!mistake) {
					// if this letter is incorrect
					if (pressed_letter != training_text[current_length - 1]) {
						mistake = true;
						mistake_position = current_length;

						obj.mistakeMade();

					// if this letter is correct
					}
				// if there was a mistake before this letter
				} else {
					// if mistake was deleted (backspace)
					if ( ( current_length == ( mistake_position - 1) ) || (current_length < mistake_position - 1) ) {
						mistake = false;
						mistake_position = -1;

						obj.mistakeFixed();
					}
				}// end if

				obj.refreshPosition(current_length);

				if (isOver(current_length, training_text.length)) { obj.onEnd(); }
		}// end check
 
		input_field.on('keyup', function (e) {
			if (!time1) {
				time1 = new Date();
				console.log(' - time measurement started')
				check( $(this).val() );
			} else {
				check( $(this).val() );
			}
		});

	}// end bindKeypress

}//end Training


$(function () {
	var training = new Training();

	training.disableDefaultKeys();

	training.setLesson('english', 'level1');

	training.outputLesson();
	
	training.bindKeypress();
});