var trace1 = {
  x: ["2014:Q1", "2014:Q2", "2014:Q3", "2014:Q4", "2015:Q1", "2015:Q2", "2015:Q3", "2015:Q4", "2016:Q1"], 
  y: ["-0.9", "4.6", "4.3", "2.1", "0.6", "3.9", "2.0", "1.4", "1.1"], 
  hoverinfo: "x+y+name", 
  marker: {color: "rgb(61, 115, 153)"}, 
  name: "GDP", 
  type: "bar", 
  uid: "70a67c", 
  xsrc: "TanyaShen-BEA:25:e7168c", 
  ysrc: "TanyaShen-BEA:25:b5046b"
};
var trace2 = {
  x: ["2014:Q1", "2014:Q2", "2014:Q3", "2014:Q4", "2015:Q1", "2015:Q2", "2015:Q3", "2015:Q4", "2016:Q1"], 
  y: ["-4.3", "6.5", "2.9", "5.5", "2.7", "0.2", "4.2", "2.2", "2.1"], 
  marker: {color: "rgba(112, 182, 182, 0.31)"}, 
  name: "Private Goods", 
  type: "bar", 
  uid: "932d2e", 
  xsrc: "TanyaShen-BEA:25:e7168c", 
  ysrc: "TanyaShen-BEA:25:23c446"
};
var trace3 = {
  x: ["2014:Q1", "2014:Q2", "2014:Q3", "2014:Q4", "2015:Q1", "2015:Q2", "2015:Q3", "2015:Q4", "2016:Q1"], 
  y: ["-1.0", "4.4", "6.2", "1.0", "0.4", "5.5", "1.5", "1.9", "1.2"], 
  marker: {color: "rgb(223, 111, 24)"}, 
  name: "Private Services", 
  type: "bar", 
  uid: "91b23f", 
  xsrc: "TanyaShen-BEA:25:e7168c", 
  ysrc: "TanyaShen-BEA:25:1dad03"
};
var trace4 = {
  x: ["2014:Q1", "2014:Q2", "2014:Q3", "2014:Q4", "2015:Q1", "2015:Q2", "2015:Q3", "2015:Q4", "2016:Q1"], 
  y: ["2.0", "-0.1", "-0.4", "-0.5", "-0.8", "0.1", "0.4", "-0.4", "0.2"], 
  marker: {color: "rgb(253, 207, 35)"}, 
  name: "Government", 
  type: "bar", 
  uid: "639286", 
  xsrc: "TanyaShen-BEA:25:e7168c", 
  ysrc: "TanyaShen-BEA:25:5b7a4a"
};
var data = [trace1, trace2, trace3, trace4];
var layout = {
  autosize: true, 
  bargap: 0.23, 
  bargroupgap: 0, 
  height: 467.125, 
  hovermode: "closest", 
  legend: {
    x: 1.02, 
    y: 1, 
    font: {size: 10}
  }, 
  margin: {pad: 7}, 
  showlegend: true, 
  title: "<b>Real GDP and Real Value Added by Sector</b>", 
  width: 832, 
  xaxis: {
    autorange: false, 
    range: [3.5, 8.5], 
    tickfont: {size: 10}, 
    title: "U.S. Bureau of Economic Analysis", 
    titlefont: {size: 14}, 
    type: "category"
  }, 
  yaxis: {
    autorange: false, 
    range: [-1.9, 7.1], 
    title: "Percent change", 
    titlefont: {size: 10}, 
    type: "linear"
  }
};
Plotly.plot('plotly-div', data, layout);

