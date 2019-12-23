import { Component, ElementRef, ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import { AppInit } from './app.init';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('chartTarget') chartTarget: ElementRef;
 init = new AppInit();

  ngAfterViewInit() {
    this.chartData();
  }
  chartData(chartType?, invert?: boolean) {
    this.init.options = {
        chart: {
          type: (chartType) ? chartType : 'line',
          inverted: (invert) ? invert : false
        },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        },
        series: [{
          name: 'Jane',
          data: [1, 0, 4]
        }, {
          name: 'John',
          data: [5, 7, 3]
        }]
      };
    this.init.chart = chart(this.chartTarget.nativeElement, this.init.options);
  }
  changeChart(type) {
    this.chartData(type);
  }
  invert() {
    this.chartData('', !this.options.chart.inverted);
    console.log(this.chart);
  }
}