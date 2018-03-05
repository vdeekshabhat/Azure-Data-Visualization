$(document).ready(function(){
    $('.submitbtn').click(function(){
        // Ajax call to get results from db
        $.ajax({url: "/countrypiechart", success: function(result){
            console.log('%o',result);
            var chartdata = [['CountryCode', 'Count']];
            for(var row in result){
                chartdata.push([row.CountryCode, parseInt(row.cnt)])
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