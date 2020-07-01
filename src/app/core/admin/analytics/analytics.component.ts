import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initChart1()
    this.initChart()
    this.initChart2()
    this.initChart3()
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": new Date(2018, 3, 20),
      "value": 90
    }, {
      "date": new Date(2018, 3, 21),
      "value": 102
    }, {
      "date": new Date(2018, 3, 22),
      "value": 65
    }, {
      "date": new Date(2018, 3, 23),
      "value": 62
    }, {
      "date": new Date(2018, 3, 24),
      "value": 55
    }, {
      "date": new Date(2018, 3, 25),
      "value": 81,
      "disabled": false
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.strokeDasharray = "5,4";

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.disabled = true;
    bullet.propertyFields.disabled = "disabled";

    let secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 6;
    secondCircle.fill = chart.colors.getIndex(8);


    bullet.events.on("inited", function (event) {
      animateBullet(event.target.circle);
    })


    function animateBullet(bullet) {
      let animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      })
    }
  }

  initChart1() {

    let chart = am4core.create("chartdiv1", am4charts.XYChart);

    chart.data = [{ date: 1577743200000, open: 122, close: 104 },
    { date: 1577829600000, open: 121, close: 70 },
    { date: 1577916000000, open: 101, close: 55 },
    { date: 1578002400000, open: 103, close: 45 },
    { date: 1578088800000, open: 153, close: 85 },
    { date: 1578175200000, open: 150, close: 116 },
    { date: 1578261600000, open: 135, close: 153 },
    { date: 1578348000000, open: 98, close: 152 },
    { date: 1578434400000, open: 101, close: 192 },
    { date: 1578520800000, open: 110, close: 225 },
    { date: 1578607200000, open: 157, close: 233 },
    { date: 1578693600000, open: 128, close: 232 },
    { date: 1578780000000, open: 101, close: 235 },
    { date: 1578866400000, open: 109, close: 200 },
    { date: 1578952800000, open: 142, close: 214 },
    { date: 1579039200000, open: 123, close: 224 },
    { date: 1579125600000, open: 99, close: 176 },
    { date: 1579212000000, open: 100, close: 172 },
    { date: 1579298400000, open: 67, close: 138 },
    { date: 1579384800000, open: 81, close: 127 },
    { date: 1579471200000, open: 39, close: 137 },
    { date: 1579557600000, open: 73, close: 127 },
    { date: 1579644000000, open: 78, close: 154 },
    { date: 1579730400000, open: 116, close: 127 },
    { date: 1579816800000, open: 136, close: 78 },
    { date: 1579903200000, open: 139, close: 61 },
    { date: 1579989600000, open: 162, close: 13 },
    { date: 1580076000000, open: 201, close: 41 },
    { date: 1580162400000, open: 221, close: 72 },
    { date: 1580248800000, open: 257, close: 87 },
    { date: 1580335200000, open: 211, close: 114 },
    { date: 1580421600000, open: 233, close: 138 },
    { date: 1580508000000, open: 261, close: 141 },
    { date: 1580594400000, open: 279, close: 130 }
    ]

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 60;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    // only for the legend
    let iconSeries = chart.series.push(new am4charts.ColumnSeries())
    iconSeries.fill = am4core.color("#ec0800");
    iconSeries.strokeOpacity = 0;
    iconSeries.stroke = am4core.color("#ec0800");
    iconSeries.name = "Events";
    iconSeries.dataFields.dateX = "date";
    iconSeries.dataFields.valueY = "v";

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.stroke = am4core.color("#1b7cb3");
    series.strokeWidth = 2;
    series.name = "District Metered Usage";
    series.stroke = chart.colors.getIndex(0);
    series.fill = series.stroke;
    series.fillOpacity = 0.8;

    let bullet = series.bullets.push(new am4charts.CircleBullet())
    bullet.fill = new am4core.InterfaceColorSet().getFor("background");
    bullet.fillOpacity = 1;
    bullet.strokeWidth = 2;
    bullet.circle.radius = 4;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.strokeWidth = 2;
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.label.fill = am4core.color("#000");
    series2.name = "SP Aggregate usage";
    series2.stroke = chart.colors.getIndex(7);
    series2.fill = series2.stroke;

    let bullet2 = series2.bullets.push(new am4charts.CircleBullet())
    bullet2.fill = bullet.fill;
    bullet2.fillOpacity = 1;
    bullet2.strokeWidth = 2;
    bullet2.circle.radius = 4;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    let negativeRange;

    // create ranges
    chart.events.on("datavalidated", function () {
      series.dataItems.each(function (s1DataItem) {
        let s1PreviousDataItem;
        let s2PreviousDataItem;

        let s2DataItem = series2.dataItems.getIndex(s1DataItem.index);

        if (s1DataItem.index > 0) {
          s1PreviousDataItem = series.dataItems.getIndex(s1DataItem.index - 1);
          s2PreviousDataItem = series2.dataItems.getIndex(s1DataItem.index - 1);
        }

        let startTime = am4core.time.round(new Date(s1DataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime();

        // intersections
        if (s1PreviousDataItem && s2PreviousDataItem) {
          let x0 = am4core.time.round(new Date(s1PreviousDataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime() + dateAxis.baseDuration / 2;
          let y01 = s1PreviousDataItem.valueY;
          let y02 = s2PreviousDataItem.valueY;

          let x1 = startTime + dateAxis.baseDuration / 2;
          let y11 = s1DataItem.valueY;
          let y12 = s2DataItem.valueY;

          let intersection = am4core.math.getLineIntersection({ x: x0, y: y01 }, { x: x1, y: y11 }, { x: x0, y: y02 }, { x: x1, y: y12 });

          startTime = Math.round(intersection.x);
        }

        // start range here
        if (s2DataItem.valueY > s1DataItem.valueY) {
          if (!negativeRange) {
            negativeRange = dateAxis.createSeriesRange(series);
            negativeRange.date = new Date(startTime);
            negativeRange.contents.fill = series2.fill;
            negativeRange.contents.fillOpacity = 0.8;
          }
        }
        else {
          // if negative range started
          if (negativeRange) {
            negativeRange.endDate = new Date(startTime);
          }
          negativeRange = undefined;
        }
        // end if last
        if (s1DataItem.index == series.dataItems.length - 1) {
          if (negativeRange) {
            negativeRange.endDate = new Date(s1DataItem.dateX.getTime() + dateAxis.baseDuration / 2);
            negativeRange = undefined;
          }
        }
      })
    })
  }

  initChart2() {
    let chart = am4core.create("chartdiv2", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart.colors.step = 2;

    // X axis
    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "x";
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.minGridDistance = 10;
    xAxis.renderer.labels.template.disabled = true;
    xAxis.data = [{ x: "1" }, { x: "2" }, { x: "3" }, { x: "4" }, { x: "5" }, { x: "6" }, { x: "7" }, { x: "8" }, { x: "9" }, { x: "10" }];

    // Y axis
    let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    yAxis.renderer.labels.template.disabled = true;
    yAxis.renderer.grid.template.location = 0;
    yAxis.renderer.minGridDistance = 10;
    yAxis.dataFields.category = "y";
    yAxis.data = [{ y: "1" }, { y: "2" }, { y: "3" }, { y: "4" }, { y: "5" }, { y: "6" }, { y: "7" }, { y: "8" }, { y: "9" }, { y: "10" }];

    // Legend
    chart.legend = new am4charts.Legend();

    // Create series
    function createSeries(name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "x";
      series.dataFields.categoryY = "y";
      series.sequencedInterpolation = true;
      series.defaultState.transitionDuration = 3000;
      series.name = name;

      // Set up column appearance
      let column = series.columns.template;
      column.strokeWidth = 1;
      column.strokeOpacity = 1;
      column.stroke = am4core.color("#ffffff");
      column.width = am4core.percent(100);
      column.height = am4core.percent(100);
      //column.column.cornerRadius(6, 6, 6, 6);

      return series;
    }

    let series1 = createSeries("Data 1");
    series1.data = [
      { x: "1", y: "1" },
      { x: "1", y: "2" },
      { x: "1", y: "3" },
      { x: "1", y: "4" },
      { x: "1", y: "5" },
      { x: "1", y: "6" },
      { x: "1", y: "7" },
      { x: "1", y: "8" },
      { x: "1", y: "9" },
      { x: "1", y: "10" },

      { x: "2", y: "1" },
      { x: "2", y: "2" },
      { x: "2", y: "3" },
      { x: "2", y: "4" },
      { x: "2", y: "5" },
      { x: "2", y: "6" },
      { x: "2", y: "7" },
      { x: "2", y: "8" },
      { x: "2", y: "9" },
      { x: "2", y: "10" },

      { x: "3", y: "1" },
      { x: "3", y: "2" },
      { x: "3", y: "3" },
    ];

    let series2 = createSeries("Data 2");
    series2.data = [
      { x: "3", y: "4" },
      { x: "3", y: "5" },
      { x: "3", y: "6" },
      { x: "3", y: "7" },
      { x: "3", y: "8" },
      { x: "3", y: "9" },
      { x: "3", y: "10" },

      { x: "4", y: "1" },
      { x: "4", y: "2" },
      { x: "4", y: "3" },
      { x: "4", y: "4" },
      { x: "4", y: "5" },
      { x: "4", y: "6" },
      { x: "4", y: "7" },
      { x: "4", y: "8" },
      { x: "4", y: "9" },
      { x: "4", y: "10" },

      { x: "5", y: "1" },
      { x: "5", y: "2" },
      { x: "5", y: "3" },
      { x: "5", y: "4" },
      { x: "5", y: "5" },
      { x: "5", y: "6" },
    ];

    let series3 = createSeries("Data 3");
    series3.data = [
      { x: "5", y: "7" },
      { x: "5", y: "8" },
      { x: "5", y: "9" },
      { x: "5", y: "10" },

      { x: "6", y: "1" },
      { x: "6", y: "2" },
      { x: "6", y: "3" },
      { x: "6", y: "4" },
      { x: "6", y: "5" },
      { x: "6", y: "6" },
      { x: "6", y: "7" },
      { x: "6", y: "8" },
      { x: "6", y: "9" },
      { x: "6", y: "10" },

      { x: "7", y: "1" },
      { x: "7", y: "2" },
      { x: "7", y: "3" },
      { x: "7", y: "4" },
      { x: "7", y: "5" },
      { x: "7", y: "6" },
      { x: "7", y: "7" },
      { x: "7", y: "8" },
      { x: "7", y: "9" },
    ];
  }

  initChart3() {
    let chart = am4core.create("chartdiv3", am4charts.XYChart3D);

    // Add data
    chart.data = [{
      "country": "USA",
      "year2017": 3.5,
      "year2018": 4.2
    }, {
      "country": "UK",
      "year2017": 1.7,
      "year2018": 3.1
    }, {
      "country": "Canada",
      "year2017": 2.8,
      "year2018": 2.9
    }, {
      "country": "Japan",
      "year2017": 2.6,
      "year2018": 2.3
    }, {
      "country": "France",
      "year2017": 1.4,
      "year2018": 2.1
    }, {
      "country": "Brazil",
      "year2017": 2.6,
      "year2018": 4.9
    }, {
      "country": "Russia",
      "year2017": 6.4,
      "year2018": 7.2
    }, {
      "country": "India",
      "year2017": 8,
      "year2018": 7.1
    }, {
      "country": "China",
      "year2017": 9.9,
      "year2018": 10.1
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "GDP growth rate";
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    });

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "country";
    series.name = "Year 2017";
    series.clustered = false;
    series.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "country";
    series2.name = "Year 2018";
    series2.clustered = false;
    series2.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";
  }

}
