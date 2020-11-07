function init() {
    var selData = d3.select("#selDataset")
    d3.json("/StarterCode/samples.json").then((importedData) => {
      
        console.log(importedData.names)
        importedData.names.forEach((name) => {
            selData.append("Option").text(name).property("value")
        });
    optionChanged(importedData.names[0])
    
    
    });
};

init();

function optionChanged(userData) {
    demoData(userData);
    Charts(userData);
};
function demoData(userData) {
    d3.json("/StarterCode/samples.json").then((data) => {
    console.log(data.metadata)
    var filterData = data.metadata.filter(md => md.id == userData)
    var firstElement = filterData[0]
    var sampleData = d3.select("#sample-metadata")
    sampleData.html("")
    Object.entries(firstElement).forEach(([key, value]) => {
        dataRow = sampleData.append("p")
        dataRow.text(`${key}: ${value}`)
    });

    gaugeChart(firstElement.wfreq);
    });
};

function Charts(userData) {
    d3.json("/StarterCode/samples.json").then((data) => {
        var samples = data.samples.filter(md => md.id == userData);
        var filterElement = samples[0];

        //values for bar chart
        //sample_values as values
        //otu_ids as labels
        //otu_labels as hovertext
        var sample_values1 = filterElement.sample_values;
        var otu_ids1 = filterElement.otu_ids;
        var otu_labels1 = filterElement.otu_labels;
//-----------------------//
//values for bubble chart
//otu_ids for x values and marker colors
//sample_values for y values and marker size
//otu_labels for text values
       
// //-----------------------//
        var trace1 = {
            x: sample_values1.slice(0,10).reverse(),
            y: otu_ids1.slice(0,10).map(id => `OTU ID ${id}`).reverse(),
            text: otu_labels1.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
            hovertext: otu_labels1,
        };

        var barChart = [trace1];

        var layout1 ={
            title: "Top 10 Bacterias",
        };

        Plotly.newPlot("bar", barChart,layout1);

        var trace2 = {
            x: otu_ids1,
            y: sample_values1,
            text: otu_labels1,
            mode: "markers",
            marker: {
                size: sample_values1,
                color: otu_ids1,
                colorscale: "Jet",
            }
          
        };

        var bubble = [trace2]

        var layout2 = {
            title: "Bacteria Bubble Chart",
            showlegend: false,
            height: 600,
            width: 1600,
        }

        Plotly.newPlot("bubble",bubble,layout2)

    });
};