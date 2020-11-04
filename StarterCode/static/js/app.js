function init() {
    var selData = d3.select("#selDataset")
    d3.json("samples.json").then((importedData) => {
      
        console.log(importedData.names)
        importedData.names.forEach((name) => {
            selData.append("Option").text(name).property("value")
        })
    optionChanged(importedData.names[0])
    });
};

init();

function optionChanged(userData) {
    demoData(userData);
    Charts(userData);
};
function demoData(userData) {
    d3.json("samples.json").then((data) => {
    console.log(data.metadata)
    var filterData = data.metadata.filter(md => md.id == userData)
    var firstElement = filterData[0]
    var sampleData = d3.select("#sample-metadata")
    sampleData.html("")
    Object.entries(firstElement).forEach(([key, value]) => {
        dataRow = sampleData.append("p")
        dataRow.text(`${key}: ${value}`)
    });
    });
};

function Charts(userData) {
    d3.json("samples.json").then(data) => {
        var samples = importData.samples;

//values



var trace1 = {
    x:
    y:
    text:
    name:
    type: "bar"
};

var chartData = [trace1]

var layout1 ={}

Plotly.newPlot("bar", chartData,layout1);

var trace2 = {
    x:
    y:
    text:
};

var bubble = [trace2]

var layout2 = {}

Plotly.newPlot("bubble",bubble,layout2)

    };
};