// https://jsfiddle.net/b98tj88j/3/



function gaugeChart(wfreq){
    var level = parseFloat(wfreq)*25;

    // Trig to calc meter point
    var degrees = 180-(level);
    var radius = .5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    // Path: may have to change to create a better triangle
    var mainPath = 'M -.0 -0.05 L .0 0.05 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    var data = [{ type: 'category',
    x: [0], y:[0],
        marker: {size: 28, color:'850000'},
        showlegend: false,
        name: 'Freq',
        text: level,
        hoverinfo: 'text+name'},
    { values: [45/8,45/8,45/8,45/8,45/8,45/8,45/8,45/8,45/8,50],
    rotation: 90,
    
    text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1',''],
    textinfo: 'text',
    textposition:'inside',      
    marker: {colors:['#84b589','#89bc8d','#8bc086','#b7cd8f','#d5e599','#e5e8b0','#e9e7c9','#f4f1e4','#f8f3ec','#ffffff',]},
    labels: ['8-9', '7-8', '6-7', '5-6','4-5', '3-4', '2-3', '1-2', '0-1',''],
    hoverinfo: 'label',
    hole: 0.5,
    type: 'pie',
    showlegend: false
    }];

    var layout = {
    shapes:[{
        type: 'path',
        path: path,
        fillcolor: '850000',
        line: {
            color: '850000'
        }
        }],
    title: 'Test1 Bla bla bla',
    height: 500,
    width: 600,
    xaxis: {type:'category',zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1]},
    yaxis: {type:'category',zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1]}
    };

    var locateGauge = document.getElementById("gauge")
    Plotly.newPlot(locateGauge, data, layout);
}
