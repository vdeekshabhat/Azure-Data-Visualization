$(document).ready(function(){
    $('.submitbtn').click(function(){
        // Ajax call to get results from db
        $.ajax({url: "/education", success: function(result){
            console.log('%o',result);
            chartdata = [['State', 'Average']];
            for(var index in result){
                row = result[index];
                chartdata.push([row.State, parseInt(row.avg)])
            }
            console.log('%o',chartdata);
            drawChart(chartdata);
        }});
    });
});

function drawChart(chartdata) {
    var data = google.visualization.arrayToDataTable(chartdata);
    var options = {
        title: 'Country Pie Chart'
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}