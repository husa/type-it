var Training = function () {
	var text_field = $('#text'),
		input_field = $('#input-field'),
		training_text = '';

	var lecture = new Lecture();

	this.getLanguage = function () {
		return 'english';
	}

	this.getLevel = function () {
		
	}

	this.setLesson = function (lang, level) {
		training_text = lecture.English.level1.lesson;
	}

	this.outputLesson = function () {
		text_field.html(training_text);
	}// end outputLesson

	this.refreshPosition = function (len) {
		var len_symbols = text_field.html().length,
			len_px = text_field.width(),
			x = (len_px * len) / len_symbols;

			input_field.stop().animate({
				'left' : -x + 250 + 'px', 
				'width' : '+=' + (len_px / len_symbols) + 'px'}, 
				300);
			text_field.stop().animate({
				'left' : -x + 250 + 'px'},
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
		var typed_text = input_field.val(),
			typed_symbols = typed_text.length,
			typed_words = typed_text.split(' ').length;
			console.log('text = ' + typed_text);
			console.log('symbols = ' + typed_symbols);
			console.log('words = ' + typed_words);

	}

	this.bindKeypress = function() {
		var obj = this;
		var mistake = false,
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
					if (current_length == ( mistake_position - 1) ) {
						mistake = false;
						mistake_position = -1;

						obj.mistakeFixed();

					}
				}// end if

				obj.refreshPosition(current_length);

				if (isOver(current_length, training_text.length)) { obj.onEnd(); }
		}// end check

		input_field.on('keyup', function (e) {
			check( $(this).val() );
		});

	}// end bindKeypress

}//end Training


$(function () {
	var training = new Training();

	training.disableDefaultKeys();

	training.setLesson('English', 'level1');

	training.outputLesson();
	
	training.bindKeypress();
});