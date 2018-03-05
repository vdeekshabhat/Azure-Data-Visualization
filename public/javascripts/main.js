$(document).ready(function(){
    $('.submitbtn').click(function(){
        // Ajax call to get results from db
        $.ajax({url: "/countrypiechart", data: data, success: function(result){
            var chartdata = [['CountryCode', 'Count']];
            for(var row in data){
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