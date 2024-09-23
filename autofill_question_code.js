Qualtrics.SurveyEngine.addOnReady(function() {
	//get an array of the companies to suggest given the respondent's email
	//note: this code assumes the relevant column is called ""similar_companies""
	var optionsToShow = Qualtrics.SurveyEngine.getEmbeddedData('similar_companies').split(',');
	
	//select this question
	let $elem = jQuery('.QR-'+this.questionId)
	let $elemParent = $elem.parent();
    
	//add the autocomplete feature to this question
	jQuery($elem).autocomplete({ 
		source: optionsToShow,
		minLength:1,
		appendTo: $elemParent
	});
});