google.load("visualization", "1", {packages:["geochart"]});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Weeks Logged', 'Last Visited'],
        ['Aruba', 2, 2014],
        ['Bahamas', 1, 2000],
        ['Belgium', 1, 2006],
        ['Belize', 1, 2012],
        ['Brazil', 10, 2014],
        ['Cambodia', 1, 2009],
        ['Canada', 2, 2017],
        ['Cayman Islands', 1, 2000],
        ['China', 104, 2013],
        ['Czech Republic', 1, 2006],
        ['Colombia', 2, 2014],
        ['Costa Rica', 2, 2016],
        ['Cuba', 2, 2012],
        ['Denmark', 1, 2006],
        ['Ecuador', 2, 2014],
        ['Finland', 1, 2006],
        ['France', 3, 2006],
        ['Germany', 3, 2006],
        ['Gibraltar', 1, 2006],
        ['United Kingdom', 3, 1997],
        ['Guatemala', 4, 2012],
        ['Honduras', 2, 2012],
        ['Japan', 1, 2009],
        ['Luxembourg', 1, 2006],
        ['Malaysia', 4, 2018],
        ['Mexico', 7, 2012],
        ['Morocco', 3, 2006],
        ['Netherlands', 2, 2006],
        ['Norway', 1, 2006],
        ['Panama', 2, 2016],
        ['Peru', 13, 2014],
        ['Philippines', 4, 2018],
        ['Portugal', 1, 2006],
        ['Russia', 2, 2006],
        ['Spain', 2, 2006],
        ['Sweden', 1, 2006],
        ['Thailand', 71, 2018], // as of 2-July-2018
        // ['United States', 0, 2018],
        ['Venezuela', 3, 2014]

    ]);

    var options = {
        colorAxis: {colors: ['green', 'yellow', 'red']},     // alternate: '#009B48'
        backgroundColor: '#240078',     // alternate: #6AACE6
        datalessRegionColor: '#8B8A8F',
        // resolution: 'provinces'
    };

    // var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    // chart.draw(data, options);



    // ADDED WHAT'S BELOW AND COMMENTED OUT TWO LINES ABOVE TO MAKE IT RESPONSIVE

    function resize () {
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
    };

    window.onload = resize();
    window.onresize = resize;
}
