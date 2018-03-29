$(document).ready(function(){
    /*$('.submitbtn').click(function(){
        // Ajax call to get results from db
        $.ajax({url: "/education", success: function(result){
            console.log('%o',result);
            chartdata = [['State', 'Average']];
            for(var index in result){
                row = result[index];
                chartdata.push([row.state, parseInt(row.avg)])
            }
            console.log('%o',chartdata);
            drawChart(chartdata);
        }});
    });
*/

    $("#form").submit(function(e) {
        var url = "/education"; // the script where you handle the form input.
        $.ajax({
               type: "POST",
               url: url,
               data: $("#form").serialize(), // serializes the form's elements.
               success: function(result)
               {
                    console.log('%o',result);
                    chartdata = [['SectionNumber','CourseNumber']];
                    for(var index in result){
                        row = result[index];
                        chartdata.push([row.Sectionnumber, row.Coursenumber])
                    }
                    console.log('%o',chartdata);
                    drawChart(chartdata);
               }
             });
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });

});

function drawChart(chartdata) {
    var data = google.visualization.arrayToDataTable(chartdata);
    var options = {
        title: 'Country Pie Chart'
    };
    var chart = new google.visualization.BarChart(document.getElementById('piechart'));
    chart.draw(data, options);
}