//Searchbar Handler
$(document).ready(function(){
	var searchField = $('#query');
	var icon = $('#search-btn');

	//Focus Handler
	$(searchField).on('focus', function() {
		$(this).animate({
			width: '100%'
		}, 400);
		$(icon).animate({
			right: '10px',
		}, 400);
	});

	//Blur Event Handler
	$(searchField).on('blur', function() {
		if(searchField.val() == '') {
			$(searchField).animate({
				width: '45%'
			}, 400, function(){});
			$(icon).animate({
				right: '360px'
			}, 400, function(){});
		}
	});

	$('#search-form').submit(function() {
		e.preventDefault();
	});
});

function search(){
		// clear results	
		$('#results').html('');
		$('#buttons').html('');

		//Get Form Input
		q = $('#query').val(); 
	}

//Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search", 
			{
				part: 'snippet, id',
				q: q, 
				type: 'video',
				key: 'AIzaSyBP8SomAQH4G--qPq-iSMLdEuEQg-NIDlo'
			}, 
			function(data) {
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;

				// Log Data
				console.log(data);

				// $.each(data.items, function(i, item){
					// Get Ouput -- comment --
					//var output = getOuput(item);	

					//Display results --Actually a comment --
					//$('#results').append(output);
				//}); 
			}
		);
	