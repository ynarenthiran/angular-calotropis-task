import * as Highcharts from 'highcharts';

export class AppInit {
  chartTypeList: any = ChartTypes;
  chart: Highcharts.ChartObject;
  options: Highcharts.Options;
  userName: any = 'ynarenthiran';
}
const ChartTypes = [
    {
      label: 'line',
      value: 'line',
      class: 'fa fa-line-chart'
    },
    {
      label: 'bar',
      value: 'bar',
      class: 'flaticon-graphic'
    },
    {
      label: 'column',
      value: 'column',
      class: 'fa fa-bar-chart'
    },
    {
      label: 'area',
      value: 'area',
      class: 'fa fa-area-chart'
    },
    {
      label: 'spline',
      value: 'spline',
      class: 'flaticon-business-stats'
    },
    {
      label: 'areaspline',
      value: 'areaspline',
      class: 'flaticon-horizontal-bars-chart'
    },
    {
      label: 'pie',
      value: 'pie',
      class: 'fa fa-pie-chart'
    },
    {
      label: 'scatter',
      value: 'scatter',
      class: 'fa fa-pie-chart'
    },
    // {
    //   label: 'heatmap',
    //   value: 'heatmap',
    //   class: 'fa fa-pie-chart'
    // }
  ]