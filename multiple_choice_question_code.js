Qualtrics.SurveyEngine.addOnload(function ()
{
    // Array of choice texts you want to display
    //note: this code assumes the relevant column is called ""similar_companies""
	var desiredChoiceTexts = Qualtrics.SurveyEngine.getEmbeddedData('similar_companies').split(',').map(function(item) {
    return item.trim();
});

    // Get the question container to limit our search
    var questionContainer = this.getQuestionContainer();

    // Loop through all the choices and decide whether to display or hide each one based on its presence in the 
    //desiredChoiceTexts list
    var allChoices = questionContainer.querySelectorAll('.Selection');
    allChoices.forEach(function(choice) {
        var choiceTextElement = choice.querySelector('span');
        if (choiceTextElement && desiredChoiceTexts.includes(choiceTextElement.textContent.trim())) {
            choice.style.display = 'list-item'; // Show the choice
        } else {
            choice.style.display = 'none'; // Hide the choice
        }
    });
});