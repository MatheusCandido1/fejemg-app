<template>
<div class="col-lg-6 col-xl-6 col-md-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <h4 class="card-title">Projetos por mês</h4>
                <apexchart width="400" type="area" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:  'CoreProjectChart',
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
            toolbar: {
            show: false
            }
            
            },
          dataLabels: {
          enabled: false
            },
        markers: {
          size: 5,
          hover: {
            size: 8
            }
            },
          yaxis: {
            labels: {
    formatter: function (value) {
      return value;
    }
  },
          },
        },
        series: [{
          name: 'Resultado',
          data: []
        }, {
          name: 'Meta',
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
      this.$http.get(this.$urlAPI+`nucleos/`+id+`/projetos/`+year+``, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
          console.log(response.data.success_data)
         this.series = [{ 
            name: 'Meta',
            data: response.data.success_data.project_goal
            }, {
            name: 'Resultado',
            data: response.data.success_data.project_results
            }]; 
      })
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>