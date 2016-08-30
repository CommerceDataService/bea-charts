var trace1 = {
  x: ["1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009-2013", "2014", "2015"], 
  y: ["38.753", "47.179", "68.733", "60.733", "182.357", "265.127", "322.703", "138.091", "43.442", "50.212", "72.738", "73.997", "148.604", "223.616", "242.799", "0.000", "235.799", "408.056"], 
  error_x: {visible: false}, 
  error_y: {visible: false}, 
  hoverinfo: "x+y", 
  legendgroup: "", 
  marker: {
    color: "rgb(29, 97, 145)", 
    line: {
      color: "#444", 
      width: 0
    }
  }, 
  name: "Acquisitions", 
  opacity: 1, 
  showlegend: true, 
  text: ["38.753", "47.179", "68.733", "60.733", "182.357", "265.127", "322.703", "138.091", "43.442", "50.212", "72.738", "73.997", "148.604", "223.616", "242.799", "0.000", "235.799", "408.056"], 
  textsrc: "TanyaShen-BEA:23:0eb705", 
  type: "bar", 
  uid: "d2f2f2", 
  visible: true, 
  xaxis: "x", 
  xsrc: "TanyaShen-BEA:23:abbc20", 
  yaxis: "y", 
  ysrc: "TanyaShen-BEA:23:0eb705"
};
var trace2 = {
  x: ["1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009-2013", "2014", "2015"], 
  y: ["6.873", "10.016", "11.196", "8.974", "32.899", "9.829", "12.926", "9.017", "11.077", "13.379", "13.481", "17.393", "16.999", "28.301", "17.564", "0.000", "12.473", "11.249"], 
  error_x: {visible: false}, 
  error_y: {visible: false}, 
  hoverinfo: "x+y", 
  legendgroup: "", 
  marker: {
    color: "rgb(218, 117, 26)", 
    line: {
      color: "#444", 
      width: 0
    }
  }, 
  name: "Establishments", 
  opacity: 1, 
  showlegend: true, 
  text: ["6.873", "10.016", "11.196", "8.974", "32.899", "9.829", "12.926", "9.017", "11.077", "13.379", "13.481", "17.393", "16.999", "28.301", "17.564", "0.000", "12.473", "11.249"], 
  textsrc: "TanyaShen-BEA:23:8e3dab", 
  type: "bar", 
  uid: "9035de", 
  visible: true, 
  xaxis: "x", 
  xsrc: "TanyaShen-BEA:23:abbc20", 
  yaxis: "y", 
  ysrc: "TanyaShen-BEA:23:8e3dab"
};
var trace3 = {
  x: ["1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009-2013", "2014", "2015"], 
  y: ["0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "2.309", "1.387"], 
  error_x: {visible: false}, 
  error_y: {visible: false}, 
  hoverinfo: "x+y", 
  legendgroup: "", 
  marker: {
    color: "#2ca02c", 
    line: {
      color: "#444", 
      width: 0
    }
  }, 
  name: "Expansions*", 
  opacity: 1, 
  showlegend: true, 
  text: ["0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "0.000", "2.309", "1.387"], 
  textsrc: "TanyaShen-BEA:23:0bbec8", 
  type: "bar", 
  uid: "2969a5", 
  visible: true, 
  xaxis: "x", 
  xsrc: "TanyaShen-BEA:23:abbc20", 
  yaxis: "y", 
  ysrc: "TanyaShen-BEA:23:0bbec8"
};
var data = [trace1, trace2, trace3];
var layout = {
  autosize: true, 
  bargap: 0.65, 
  bargroupgap: 0, 
  barmode: "stack", 
  barnorm: "", 
  dragmode: "zoom", 
  font: {
    color: "#444", 
    family: "\"Open Sans\", verdana, arial, sans-serif", 
    size: 12
  }, 
  height: 482.875, 
  hidesources: false, 
  hovermode: "x", 
  legend: {
    x: 1.02, 
    y: 1, 
    bgcolor: "#fff", 
    bordercolor: "#444", 
    borderwidth: 0, 
    font: {
      color: "#444", 
      family: "\"Open Sans\", verdana, arial, sans-serif", 
      size: 10
    }, 
    orientation: "v", 
    traceorder: "reversed", 
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
  title: "<b>New Investment by Foreign Direct Investors by Type, 1994-2015</b>", 
  titlefont: {
    color: "#444", 
    family: "\"Open Sans\", verdana, arial, sans-serif", 
    size: 17
  }, 
  width: 860, 
  xaxis: {
    anchor: "y", 
    autorange: true, 
    color: "#444", 
    domain: [0, 1], 
    dtick: "L2", 
    exponentformat: "B", 
    fixedrange: false, 
    hoverformat: "", 
    nticks: 0, 
    range: [3.29961624, 3.30438280249], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    side: "bottom", 
    tick0: 0, 
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
    title: "Expansions* included in 2014 and 2015 only", 
    titlefont: {
      color: "#444", 
      family: "\"Open Sans\", verdana, arial, sans-serif", 
      size: 10
    }, 
    type: "log", 
    zeroline: false
  }, 
  yaxis: {
    anchor: "x", 
    autorange: true, 
    color: "#444", 
    domain: [0, 1], 
    dtick: 100, 
    exponentformat: "B", 
    fixedrange: false, 
    gridcolor: "rgb(238, 238, 238)", 
    gridwidth: 1, 
    hoverformat: "", 
    nticks: 0, 
    range: [0, 442.833684211], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    side: "left", 
    tick0: 0, 
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
    title: "Billions", 
    titlefont: {
      color: "#444", 
      family: "\"Open Sans\", verdana, arial, sans-serif", 
      size: 10
    }, 
    type: "linear", 
    zeroline: true, 
    zerolinecolor: "#444", 
    zerolinewidth: 1
  }
};
Plotly.plot('plotly-div', data, layout, {displaylogo: false});