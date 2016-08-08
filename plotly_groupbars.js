var xValue   = ["2012", "2013", "2014", "2015", "2016"];
var yValueQ1 = ["", "1.9", "-0.9", "0.6", "1.1"];
var yValueQ2 = ["1.9", "1.1", "4.6", "3.9"];
var yValueQ3 = ["0.5", "3", "4.3", "2"];
var yValueQ4 = ["0.1", "3.8", "2.1", "1.4"];
var rangeX = [2012, 2016];
var rangeY = [-1.1, 5.1];

var trace1 = {
  x: xValue, 
  y: yValueQ1, 
  error_x: {visible: false}, 
  error_y: {visible: false}, 
  hoverinfo: "all", 
  legendgroup: "", 
  marker: {
    color: "rgb(255, 127, 14)", 
    line: {
      color: "rgb(0, 0, 0)", 
      width: 0
    }
  }, 
  name: "Q1", 
  opacity: 1, 
  orientation: "v", 
  showlegend: true, 
  text: "", 
  type: "bar", 
  uid: "ccf73c", 
  visible: true, 
  xaxis: "x", 
  xsrc: "TanyaShen-BEA:16:e1df49", 
  yaxis: "y", 
  ysrc: "TanyaShen-BEA:16:6e5000"
};
var trace2 = {
  x: xValue, 
  y: yValueQ2, 
  error_x: {visible: false}, 
  error_y: {visible: false}, 
  hoverinfo: "all", 
  legendgroup: "", 
  marker: {
    color: "#ff7f0e", 
    line: {
      color: "#444", 
      width: 0
    }
  }, 
  name: "Q2", 
  opacity: 1, 
  orientation: "v", 
  showlegend: true, 
  text: "", 
  type: "bar", 
  uid: "f8dcd9", 
  visible: true, 
  xaxis: "x", 
  xsrc: "TanyaShen-BEA:12:5d2d47", 
  yaxis: "y", 
  ysrc: "TanyaShen-BEA:12:eac125"
};
var trace3 = {
  x: xValue, 
  y: yValueQ3, 
  error_x: {visible: false}, 
  error_y: {visible: false}, 
  hoverinfo: "all", 
  legendgroup: "", 
  marker: {
    color: "rgb(255, 127, 14)", 
    line: {
      color: "#444", 
      width: 0
    }
  }, 
  name: "Q3", 
  opacity: 1, 
  orientation: "v", 
  showlegend: true, 
  text: "", 
  type: "bar", 
  uid: "f812e7", 
  visible: true, 
  xaxis: "x", 
  xsrc: "TanyaShen-BEA:12:5d2d47", 
  yaxis: "y", 
  ysrc: "TanyaShen-BEA:12:d9c5c9"
};
var trace4 = {
  x: xValue, 
  y: yValueQ4, 
  error_x: {visible: false}, 
  error_y: {visible: false}, 
  hoverinfo: "all", 
  legendgroup: "", 
  marker: {
    color: "rgb(255, 127, 14)", 
    line: {
      color: "#444", 
      width: 0
    }
  }, 
  name: "Q4", 
  opacity: 1, 
  orientation: "v", 
  showlegend: true, 
  text: "", 
  type: "bar", 
  uid: "a08e1c", 
  visible: true, 
  xaxis: "x", 
  xsrc: "TanyaShen-BEA:12:5d2d47", 
  yaxis: "y", 
  ysrc: "TanyaShen-BEA:12:79a11c"
};
var data = [trace1, trace2, trace3, trace4];
var layout = {
  autosize: false, 
  bargap: 0.06, 
  bargroupgap: 0.02, 
  barmode: "group", 
  barnorm: "", 
  dragmode: "pan", 
  font: {
    color: "rgb(0, 0, 0)", 
    family: "Arial, sans-serif", 
    size: 12
  }, 
  height: 664, 
  hidesources: false, 
  hovermode: "closest", 
  legend: {
    bordercolor: "rgb(0, 0, 0)", 
    traceorder: "normal"
  }, 
  margin: {
    r: 70, 
    t: 110, 
    autoexpand: true, 
    b: 180, 
    l: 90, 
    pad: 4
  }, 
  paper_bgcolor: "rgb(255, 255, 255)", 
  plot_bgcolor: "rgb(255, 255, 255)", 
  separators: ".,", 
  showlegend: false, 
  smith: false, 
  title: "<b>Quarter-to-Quarter Growth in Real GDP</b><br>Real GDP growth is measured at seasonally adjusted annual rates", 
  titlefont: {
    color: "rgb(0, 0, 0)", 
    family: "Arial, sans-serif", 
    size: 16
  }, 
  width: 1044, 
  xaxis: {
    anchor: "free", 
    autorange: true, 
    color: "#444", 
    domain: [0.07, 0.94], 
    dtick: 1, 
    exponentformat: "B", 
    fixedrange: false, 
    hoverformat: "", 
    position: 0, 
    range: rangeX, 
    showexponent: "all", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    side: "bottom", 
    tick0: 0, 
    tickangle: "auto", 
    tickfont: {
      color: "#444", 
      family: "Arial, sans-serif", 
      size: 12
    }, 
    tickformat: "", 
    tickmode: "linear", 
    tickprefix: "", 
    ticks: "", 
    ticksuffix: "", 
    title: "", 
    titlefont: {
      color: "#444", 
      family: "Arial, sans-serif", 
      size: 12
    }, 
    type: "linear", 
    zeroline: true, 
    zerolinecolor: "rgb(190, 176, 176)", 
    zerolinewidth: 1
  }, 
  yaxis: {
    anchor: "x", 
    autorange: true, 
    color: "#444", 
    domain: [0, 1], 
    dtick: 1, 
    exponentformat: "B", 
    fixedrange: false, 
    gridcolor: "rgb(238, 238, 238)", 
    gridwidth: 1, 
    hoverformat: "", 
    range: rangeY, 
    showexponent: "all", 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    side: "left", 
    tick0: 0, 
    tickangle: "auto", 
    tickfont: {
      color: "#444", 
      family: "Arial, sans-serif", 
      size: 12
    }, 
    tickformat: "", 
    tickmode: "linear", 
    tickprefix: "", 
    ticks: "", 
    ticksuffix: "", 
    title: "Percent", 
    titlefont: {
      color: "#444", 
      family: "Arial, sans-serif", 
      size: 12
    }, 
    type: "linear", 
    zeroline: true, 
    zerolinecolor: "rgb(190, 176, 176)", 
    zerolinewidth: 1
  }
};
Plotly.plot('plotly-div', data, layout);