var data = [
  {
    x: ["2001 Jan", "2001 Feb", "2001 Mar", "2001 Apr", "2001 May", "2001 Jun", "2001 Jul", "2001 Aug", "2001 Sep", "2001 Oct", "2001 Nov", "2001 Dec", "2002 Jan", "2002 Feb", "2002 Mar", "2002 Apr", "2002 May", "2002 Jun", "2002 Jul", "2002 Aug", "2002 Sep", "2002 Oct", "2002 Nov", "2002 Dec", "2003 Jan", "2003 Feb", "2003 Mar", "2003 Apr", "2003 May", "2003 Jun", "2003 Jul", "2003 Aug", "2003 Sep", "2003 Oct", "2003 Nov", "2003 Dec", "2004 Jan", "2004 Feb", "2004 Mar", "2004 Apr", "2004 May", "2004 June", "2004 July", "2004 Aug", "2004 Sep", "2004 Oct", "2004 Nov", "2004 Dec", "2005 Jan", "2005 Feb", "2005 Mar", "2005 Apr", "2005 May", "2005 June", "2005 July ", "2005 Aug", "2005 Sep", "2005 Oct", "2005 Nov", "2005 Dec", "2006 Jan", "2006 Feb", "2006 Mar", "2006 Apr", "2006 May", "2006 June", "2006 July", "2006 Aug", "2006 Sep", "2006 Oct", "2006 Nov", "2006 Dec", "2007 Jan", "2007 Feb", "2007 Mar", "2007 Apr", "2007 May", "2007 June", "2007 July", "2007 Aug", "2007 Sep", "2007 Oct", "2007 Nov", "2007 Dec", "2008 Jan", "2008 Feb", "2008 Mar", "2008 Apr", "2008 May", "2008 June", "2008 July", "2008 Aug", "2008 Sep", "2008 Oct", "2008 Nov", "2008 Dec", "2009 Jan", "2009 Feb", "2009 Mar", "2009 Apr", "2009 May", "2009 June", "2009 July", "2009 Aug", "2009 Sep", "2009 Oct", "2009 Nov", "2009 Dec", "2010 Jan", "2010 Feb", "2010 Mar", "2010 Apr", "2010 May", "2010 June", "2010 July", "2010 Aug", "2010 Sep", "2010 Oct", "2010 Nov", "2010 Dec", "2011 Jan", "2011 Feb", "2011 Mar", "2011 Apr", "2011 May", "2011 June", "2011 July", "2011 Aug", "2011 Sep", "2011 Oct", "2011 Nov", "2011 Dec", "2012 Jan", "2012 Feb", "2012 Mar", "2012 Apr", "2012 May", "2012 June", "2012 July", "2012 Aug", "2012 Sep", "2012 Oct", "2012 Nov", "2012 Dec", "2013 Jan", "2013 Feb", "2013 Mar", "2013 Apr", "2013 May", "2013 June", "2013 July", "2013 Aug", "2013 Sep", "2013 Oct", "2013 Nov", "2013 Dec", "2014 Jan", "2014 Feb", "2014 Mar", "2014 Apr", "2014 May", "2014 June", "2014 July", "2014 Aug", "2014 Sep", "2014 Oct", "2014 Nov", "2014 Dec", "2015 Jan", "2015 Feb", "2015 Mar", "2015 Apr", "2015 May", "2015 June", "2015 July", "2015 Aug", "2015 Sep", "2015 Oct", "2015 Nov", "2015 Dec", "2016 Jan", "2016 Feb", "2016 Mar", "2016 Apr", "2016 May", "2016 June"], 
    y: ["-34.8", "-29.3", "-32.7", "-31.2", "-27.4", "-29.1", "-30.1", "-28.2", "-31.1", "-30.8", "-29.7", "-26.8", "-29.4", "-32.3", "-30.8", "-33.7", "-33.9", "-34.9", "-33.7", "-35.7", "-36.5", "-35.2", "-39.6", "-43.3", "-40.7", "-39.4", "-43.4", "-42.0", "-40.8", "-39.6", "-41.4", "-39.8", "-41.7", "-41.3", "-39.8", "-44.1", "-44.4", "-44.3", "-46.5", "-47.5", "-48.2", "-54.7", "-51.3", "-53.3", "-51.5", "-55.0", "-58.8", "-54.5", "-55.6", "-57.5", "-52.6", "-57.1", "-56.3", "-58.3", "-58.1", "-58.4", "-64.9", "-67.1", "-64.1", "-64.4", "-66.7", "-62.9", "-62.6", "-62.8", "-64.8", "-63.5", "-66.5", "-67.8", "-64.9", "-59.0", "-58.6", "-61.6", "-57.7", "-58.5", "-61.8", "-60.5", "-59.3", "-59.5", "-59.9", "-57.0", "-57.8", "-56.5", "-59.7", "-57.2", "-61.1", "-64.3", "-60.1", "-63.5", "-62.2", "-60.7", "-66.8", "-62.1", "-60.5", "-60.2", "-44.7", "-42.5", "-37.8", "-27.8", "-29.2", "-29.7", "-25.4", "-26.4", "-32.8", "-31.3", "-34.5", "-33.8", "-37.2", "-38.0", "-37.2", "-41.0", "-39.8", "-40.9", "-41.3", "-46.6", "-40.4", "-44.9", "-44.0", "-40.0", "-37.8", "-40.8", "-47.1", "-43.7", "-43.5", "-42.2", "-47.2", "-49.4", "-45.7", "-45.0", "-43.3", "-45.0", "-47.0", "-49.5", "-51.0", "-43.6", "-50.2", "-47.3", "-46.0", "-43.5", "-43.4", "-44.1", "-40.1", "-43.0", "-46.7", "-38.1", "-41.0", "-42.6", "-35.9", "-38.9", "-42.8", "-36.0", "-37.7", "-38.1", "-41.3", "-37.8", "-34.9", "-34.8", "-38.8", "-40.8", "-40.9", "-44.0", "-41.1", "-40.7", "-39.3", "-38.4", "-41.7", "-41.0", "-39.6", "-43.7", "-42.1", "-36.3", "-48.2", "-40.9", "-40.2", "-43.0", "-39.9", "-44.6", "-41.1", "-41.6", "-41.1", "-41.5", "-42.3", "-44.0", "-35.5", "-37.4", "-41.0", "-44.5"], 
    connectgaps: true, 
    error_x: {visible: false}, 
    error_y: {visible: false}, 
    fill: "none", 
    hoverinfo: "x+y+z+text", 
    hoveron: "points", 
    legendgroup: "", 
    line: {
      color: "rgb(36, 91, 129)", 
      dash: "solid", 
      shape: "linear", 
      width: 2
    }, 
    mode: "lines", 
    name: "D", 
    opacity: 1, 
    showlegend: true, 
    text: "", 
    type: "scatter", 
    uid: "1aed87", 
    visible: true, 
    xaxis: "x", 
    xsrc: "TanyaShen-BEA:21:a21645", 
    yaxis: "y", 
    ysrc: "TanyaShen-BEA:21:36fd95"
  }
];
var layout = {
  autosize: true, 
  dragmode: "zoom", 
  font: {
    color: "#444", 
    family: "\"Open Sans\", verdana, arial, sans-serif", 
    size: 12
  }, 
  height: 467.125, 
  hidesources: false, 
  hovermode: "closest", 
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
  showlegend: false, 
  smith: false, 
  title: "<b>Balance on Goods and Services Trade</b><br>January 2005-June 2016", 
  titlefont: {
    color: "#444", 
    family: "\"Open Sans\", verdana, arial, sans-serif", 
    size: 17
  }, 
  width: 832, 
  xaxis: {
    anchor: "y", 
    autorange: true, 
    categoryorder: "trace", 
    color: "#444", 
    domain: [0, 1], 
    dtick: 47, 
    exponentformat: "e", 
    fixedrange: false, 
    gridcolor: "rgb(238, 238, 238)", 
    gridwidth: 1, 
    nticks: 4, 
    range: [0, 185], 
    rangemode: "normal", 
    showexponent: "all", 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    side: "bottom", 
    tick0: 0, 
    tickangle: "auto", 
    tickfont: {
      color: "#444", 
      family: "\"Open Sans\", verdana, arial, sans-serif", 
      size: 10
    }, 
    tickmode: "auto", 
    tickprefix: "", 
    ticks: "", 
    ticksuffix: "", 
    title: "Seasonally adjusted", 
    titlefont: {
      color: "#444", 
      family: "\"Open Sans\", verdana, arial, sans-serif", 
      size: 10
    }, 
    type: "category", 
    zeroline: true, 
    zerolinecolor: "#444", 
    zerolinewidth: 1
  }, 
  yaxis: {
    anchor: "x", 
    autorange: true, 
    color: "#444", 
    domain: [0, 1], 
    dtick: 10, 
    exponentformat: "B", 
    fixedrange: false, 
    gridcolor: "rgb(238, 238, 238)", 
    gridwidth: 1, 
    hoverformat: "", 
    nticks: 0, 
    range: [-70.1555555556, -23.0444444444], 
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
    title: "Billion $", 
    titlefont: {
      color: "#444", 
      family: "\"Open Sans\", verdana, arial, sans-serif", 
      size: 11
    }, 
    type: "linear", 
    zeroline: true, 
    zerolinecolor: "#444", 
    zerolinewidth: 1
  }
};
Plotly.plot('plotly-div', data, layout);