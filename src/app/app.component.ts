import { Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { AppInit } from "./app.init";
import { AppService } from "./app.service";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";
import * as _ from "lodash";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private service: AppService) {}
  @ViewChild("chartTarget") chartTarget: ElementRef;
  init = new AppInit();
  ngOnInit() {}
  getChart() {
    this.service.getChartData(this.init.userName).subscribe((res: any) => {
      this.init.resData = res;
      this.formChart(this.resData.years[0]);
    });
    this.service.getReposData(this.init.userName).subscribe((res: any) => {
      console.error(res);
    });
  }
  get resData() {
    return this.init.resData;
  }
  formChart(e) {
    const dataPoints = {};
      const contributions = _.filter(this.resData.contributions, ct => {
        return ct.date.includes(e.year);
      });
      _.each(contributions, c => {
          dataPoints[c.date] = c.count;
      });
      const data = {
        dataPoints: dataPoints,
        start: new Date(e.range.start),
        end: new Date(e.range.end)
      };
      let chart = new Chart(this.chartTarget.nativeElement, {
        title: `${e.total} contributions in this year`,
        type: "heatmap",
        data: data
      });
  }
}
