<template>
<div class="col-lg-6 col-xl-6 col-md-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <h4 class="card-title">Farol por Cluster</h4>
                <apexchart width="600" type="bar" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:  'CoreClusterLightChart',
    data: function() {
      return {
        chartOptions: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              stackType: '100%',
              toolbar: {
            show: false
            }
            },
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            xaxis: {
              categories: ['Cluster 1','Cluster 2','Cluster 3','Cluster 4','Cluster 5'],
            
            },
            yaxis: {
              title: {
                text: undefined
              },
            },
            tooltip: {
            },
            fill: {
              opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
            }
          },
        series: [{
            name: 'Alto Crescimento',
            data: [44, 55, 41, 37, 22, 43, 21]
          }, {
            name: 'Farol Verde',
            data: [53, 32, 33, 52, 13, 43, 32]
          }, {
            name: 'Farol Amarelo',
            data: [12, 17, 11, 9, 15, 11, 20]
          }, {
            name: 'Farol Vermelho',
            data: [9, 7, 5, 8, 6, 9, 4]
          }],
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