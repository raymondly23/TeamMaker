$(document).ready(init);

function init(){
		$('#add').click(adder);
		$('.group').on('click','li', highlighter);
		$('#groupContainer').on('click','.group', move);	


		function adder(){
			var $names = $('#name');
			var names = $names.val();
			var num = $('#num').val();
			var create = $('<li>'+names+'</li>').attr('dataNum', num);
			$('#names').append(create);
			document.getElementById('name').value = '';
			document.getElementById('num').value = '';
		}

		function highlighter(event){
			event.stopPropagation();
			$(this).addClass('selected');
			sum -= data;
			$('h2').remove();
			$(this).append('<h2>$'+sum+'.00</h2>');
		}

		function move(event){
			var sum = 0;
			event.stopPropagation();
			var $selected = $('.selected');
			var data = parseInt($selected.attr('dataNum'));
			$('.selected').detach();
			$(this).append($selected);
			$selected.removeClass('selected')
			$('h2').remove();
			if(!$selected.hasClass('selected')){sum += data;
		}

			$(this).append('<h2>$'+sum+'.00</h2>')
	}
}


	




