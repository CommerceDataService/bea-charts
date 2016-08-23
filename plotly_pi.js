var xAxis = ["Mar", "Apr", "May", "Jun"];
var yIncome = ["0.2", "0.1", "0.0", "0.1"];
var ySpending = ["0.0", "0.7", "0.2", "0.3"];

var trace1 = {
  x: xAxis, 
  y: yIncome, 
  error_x: {visible: false}, 
  error_y: {visible: false}, 
  hoverinfo: "all", 
  legendgroup: "", 
  marker: {
    color: "rgb(36, 111, 166)", 
    line: {
      color: "#444", 
      width: 0
    }
  }, 
  name: "Real Disposal Personal Income", 
  opacity: 1, 
  showlegend: true, 
  text: "", 
  type: "bar", 
  uid: "4eb973", 
  visible: true, 
  xaxis: "x", 
  xsrc: "TanyaShen-BEA:19:e73294", 
  yaxis: "y", 
  ysrc: "TanyaShen-BEA:19:543e79"
};
var trace2 = {
  x: xAxis, 
  y: ySpending, 
  error_x: {visible: false}, 
  error_y: {visible: false}, 
  hoverinfo: "all", 
  legendgroup: "", 
  marker: {
    color: "rgb(203, 100, 5)", 
    line: {
      color: "#444", 
      width: 0
    }
  }, 
  name: "Real Consumer Spending", 
  opacity: 1, 
  showlegend: true, 
  text: "", 
  type: "bar", 
  uid: "74de18", 
  visible: true, 
  xaxis: "x", 
  xsrc: "TanyaShen-BEA:19:e73294", 
  yaxis: "y", 
  ysrc: "TanyaShen-BEA:19:303b74"
};
var data = [trace1, trace2];
var layout = {
  autosize: true, 
  bargap: 0.16, 
  bargroupgap: 0.1, 
  barmode: "group", 
  barnorm: "", 
  dragmode: "zoom", 
  font: {
    color: "#444", 
    family: "\"Open Sans\", verdana, arial, sans-serif", 
    size: 12
  }, 
  height: 482.875, 
  hidesources: false, 
  hovermode: "closest", 
  legend: {
    x: 1.02, 
    y: 1, 
    bgcolor: "#fff", 
    bordercolor: "#444", 
    borderwidth: 0, 
    font: {
      color: "#444", 
      family: "Arial", 
      size: 10
    }, 
    orientation: "v", 
    traceorder: "normal", 
    xanchor: "left", 
    yanchor: "auto"
  }, 
  margin: {
    r: 80, 
    t: 100, 
    autoexpand: true, 
    b: 80, 
    l: 80, 
    pad: 0
  }, 
  paper_bgcolor: "#fff", 
  plot_bgcolor: "#fff", 
  separators: ".,", 
  showlegend: true, 
  smith: false, 
  title: "<b>Real Disposal Personal Income and<br>Real Consumer Spending</b>", 
  titlefont: {
    color: "#444", 
    family: "Arial", 
    size: 17
  }, 
  width: 860, 
  xaxis: {
    anchor: "y", 
    autorange: true, 
    categoryorder: "trace", 
    color: "#444", 
    domain: [0, 1], 
    fixedrange: false, 
    nticks: 0, 
    range: [-0.5, 3.5], 
    rangemode: "normal", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    side: "bottom", 
    tickangle: "auto", 
    tickfont: {
      color: "#444", 
      family: "\"Open Sans\", verdana, arial, sans-serif", 
      size: 12
    }, 
    tickmode: "auto", 
    tickprefix: "", 
    ticks: "", 
    ticksuffix: "", 
    title: "Source: Bureau of Economic Analysis", 
    titlefont: {
      color: "#444", 
      family: "Arial", 
      size: 14
    }, 
    type: "category", 
    zeroline: false
  }, 
  yaxis: {
    anchor: "x", 
    autorange: true, 
    color: "#444", 
    domain: [0, 0.71], 
    exponentformat: "B", 
    fixedrange: false, 
    gridcolor: "rgb(238, 238, 238)", 
    gridwidth: 1, 
    hoverformat: "", 
    nticks: 0, 
    range: [0, 0.736842105263], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    side: "left", 
    tickangle: "auto", 
    tickfont: {
      color: "#444", 
      family: "\"Open Sans\", verdana, arial, sans-serif", 
      size: 12
    }, 
    tickformat: "", 
    tickmode: "auto", 
    tickprefix: "", 
    ticks: "", 
    ticksuffix: "", 
    title: "Percent Change (Monthly Rate)", 
    titlefont: {
      color: "#444", 
      family: "Arial", 
      size: 12
    }, 
    type: "linear", 
    zeroline: true, 
    zerolinecolor: "#444", 
    zerolinewidth: 1
  }
};
Plotly.plot('plotly-div', data, layout, {displaylogo: false});