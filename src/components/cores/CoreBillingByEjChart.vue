<template>
<div class="col-lg-6 col-xl-6 col-md-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <h4 class="card-title">Faturamento por mês</h4>
        <apexchart type="bar" width="400" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:  'CoreBillingByEjChart',
    data: function() {
      return {
          series: [{
            name: 'Inflation',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2,3.1,3.3,0.4,0.5,0.1,0.5,0.42, 3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2,3.1,3.3,0.4,0.5,0.1,0.5,0.4]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "%";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },
            
            xaxis: {
              categories: ["A", "B", "C", "D", "D", "E", "F", "G", "H", "I", "J", "K","L","M","N","O","P","Q","R","S"],
              position: 'top',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "%";
                }
              }
            
            },
            title: {
              text: 'Monthly Inflation in Argentina, 2002',
              floating: true,
              offsetY: 330,
              align: 'center',
              style: {
                color: '#444'
              }
            }
          },
      }
    },
  components: {
   apexcharts: VueApexCharts,
  },
  mounted(){
    
  },
  methods: {
  }
}
</script>
<style scoped>
</style>