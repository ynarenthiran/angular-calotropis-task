import { Component, ElementRef, ViewChild } from "@angular/core";
import { AppInit } from "./app.init";
import { AppService } from "./app.service";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";
import * as _ from "lodash";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private service: AppService) {}
  @ViewChild("chartTarget") chartTarget: ElementRef;
  init = new AppInit();
  ngOnInit() {
    this.service.getChartData(this.init.userName).subscribe((res: any) => {
      const dataPoints = {};
      const contributions = _.filter(res.contributions, ct => {
        return ct.date.includes("2019");
      });
      _.each(contributions, c => {
          dataPoints[c.date] = c.count;
      });
      const data = {
        dataPoints: dataPoints,
        start: new Date(res.years[1].range.start),
        end: new Date(res.years[1].range.end)
      };
      console.error(data);
      let chart = new Chart(this.chartTarget.nativeElement, {
        title: "My Awesome Chart",
        type: "heatmap",
        data: data
      });
    });
  }
}
