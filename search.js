
google.load('search', '1');

google.setOnLoadCallback (function(){
	$.get('http://schema.rdfs.org/all.json', function (data) {
		var select = $('#types');

		$.each(data.types, function (key, type) {
			$('<option/>', { value: key, text: type.label }).appendTo(select);
		});

		select.val('TVSeries');

		var customSearchControl = new google.search.CustomSearchControl('003954572918023580770:dhs-ewsnyrk');

		customSearchControl.setSearchStartingCallback(this, function(control, searcher, query) {
			searcher.setQueryAddition('more:pagemap:' + $('#types').val().toLowerCase());
		    searcher.setResultSetSize(10);
		});

		customSearchControl.draw('search-results');
	});
}, true);