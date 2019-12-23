import { Component, ElementRef, ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import { AppInit } from './app.init';
import { AppService } from './app.service';
import * as zc from "@dvsl/zoomcharts";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: AppService) {}
 @ViewChild('chartTarget') chartTarget: ElementRef;
 init = new AppInit();
 private zc: any = zc;
  ngOnInit() {
    this.service.getChartData(this.init.userName).subscribe((res) => {
      console.error(res);
    })
  }
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
    const TimeChart = this.zc.TimeChart;
    var bitcoins_by_Month = {
        dataLimitFrom: 1279408157,
        dataLimitTo: 1384253671,
        unit: "M",
        values: [
            [1280062860, 0.09307], [1282209412, 0.0769], [1284577510, 0.175],
            [1286988866, 0.2], [1289772560, 0.5], [1292221502, 0.3],
            [1295438521, 0.95], [1297635302, 1.1], [1300428904, 0.97],
            [1303393364, 4.14996], [1305747289, 9.4998], [1308021365, 31.9099],
            [1310688487, 16.74], [1313460176, 13.55], [1316163580, 8.7138],
            [1318917477, 5.25], [1329406625, 6.2], [1331712512, 5.45],
            [1334585184, 5.48], [1337032412, 5.19], [1339968960, 6.8],
            [1342565599, 9.7], [1345130283, 15.4], [1347658121, 12.68666],
            [1350406417, 13.0899], [1353158164, 12.6515], [1355482339, 13.90119],
            [1358620069, 21.43], [1360955055, 34.51541], [1363536829, 95.7],
            [1366088526, 266], [1368368125, 141.42236], [1371180511, 130.0],
            [1373758345, 111.652], [1376745412, 148.7], [1379147545, 148.90893],
            [1382024434, 233.4], [1383881325, 395]
        ]
    };
    var t = new TimeChart({
        container: document.getElementById("chartPieChart"),
        data:
        {
            units: ["M"],
            timestampInSeconds: true,
            preloaded: bitcoins_by_Month
        }
    });
  }
  changeChart(type) {
    this.chartData(type);
  }
  invert() {
    this.chartData('', !this.options.chart.inverted);
    console.log(this.chart);
  }
}