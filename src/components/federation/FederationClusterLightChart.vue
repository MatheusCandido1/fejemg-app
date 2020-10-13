<template>
<span>
<h3>Farol por Cluster</h3>
<div class="col-lg-6 col-xl-6 col-md-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</div>
</span>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:  'FederationClusterLightChart',
    data: function() {
      return {
        chartOptions: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
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
            data: []
          }, {
            name: 'Farol Verde',
            data: []
          }, {
            name: 'Farol Amarelo',
            data: []
          }, {
            name: 'Farol Vermelho',
            data: []
          }],
    }
  },
  components: {
   apexcharts: VueApexCharts,
  },
  mounted(){
    let usuarioAux = this.$store.getters.getUsuario;
     let id = this.$route.params.id
    let year = this.$route.params.year
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`federacao/cluster/`+new Date().getFullYear(), {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
         this.series = [{
            name: 'Alto Crescimento',
            data: response.data.success_data.ac
            }, {
            name: 'Farol Verde',
            data: response.data.success_data.green
            },{
            name: 'Farol Amarelo',
            data: response.data.success_data.yellow
            },{
            name: 'Farol Vermelho',
            data: response.data.success_data.red
            },]; 
      })
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>