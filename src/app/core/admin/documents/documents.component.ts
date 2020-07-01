import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor(
    public zone: NgZone
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(
      () => {
        this.initChart()
      }
    )
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.data = [{
      "year": "2016",
      "income": 23.5,
      "expenses": 18.1
    }, {
      "year": "2017",
      "income": 26.2,
      "expenses": 22.8
    }, {
      "year": "2018",
      "income": 30.1,
      "expenses": 23.9
    }, {
      "year": "2019",
      "income": 29.5,
      "expenses": 25.1
    }, {
      "year": "2020",
      "income": 24.6,
      "expenses": 25
    }];

    //create category axis for years
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;

    //create value axis for income and expenses
    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = true;


    //create columns
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "year";
    series.dataFields.valueX = "income";
    series.name = "Availibity";
    series.columns.template.fillOpacity = 0.5;
    series.columns.template.strokeOpacity = 0;
    series.tooltipText = "Availablity {categoryY}: {valueX.value}";

    //create line
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryY = "year";
    lineSeries.dataFields.valueX = "expenses";
    lineSeries.name = "Error";
    lineSeries.strokeWidth = 3;
    lineSeries.tooltipText = "Error {categoryY}: {valueX.value}";

    //add bullets
    let circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    circleBullet.circle.fill = am4core.color("#fff");
    circleBullet.circle.strokeWidth = 2;

    //add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    //add legend
    chart.legend = new am4charts.Legend();
  }


}
