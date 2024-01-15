
  //remove commas and periods
  //split a block of text into an array of words
  //count the number of occurrences of each word
  //sort from highest to lowest in occurrences
  //display those words on a web page
  
  document.getElementById('processButton').addEventListener('click', function() {
    let textInput = document.getElementById('textInput').value;

  // Remove commas and periods
  let cleanedText = textInput.replace(/[,.]/g,'').toLowerCase();

  //split a block of text into an array of words on spaces 
  let wordsArray = cleanedText.split(' ');  

  // Count occurrences
  let wordCount = {};
  wordsArray.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  // Convert to array and sort by count
  let sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

  // Prepare HTML output
  let outputHtml = sortedWords.map(([word, count]) => `${word}: ${count}`).join('<br>');

  // Display sorted words and their counts in the HTML container
  document.getElementById('wordFrequencyOutput').innerHTML = outputHtml;

});