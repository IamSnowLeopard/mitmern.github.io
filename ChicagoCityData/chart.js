
var dataset = [[`Salary`]];


//  build dataset
function generateDataset(points) {
  var newDataset = [[`Salary`]]; // Create a new dataset array
  for (var i = 0; i < points.length; i++) {
      var point = [points[i].salary];
      newDataset.push(point); // Add new point to the dataset
  }
  return newDataset;
}



//  draw graph
// -------------------------------------
google.load("visualization", "1", {packages:["corechart"]});

function drawChart(dataset) {
  window.currentDataset = dataset; 

  var data = google.visualization.arrayToDataTable(dataset);

  var options = {
    title: 'City of Chicago Salaries',
     histogram: { bucketSize: 5000}
  };

  var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
    chart.draw(data, options);
}
