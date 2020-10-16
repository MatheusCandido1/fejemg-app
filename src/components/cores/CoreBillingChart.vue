<template>
<span>
<h3>Faturamento por mês</h3>
<div class="col-lg-6 col-xl-6 col-md-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                <apexchart width="400" type="area" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</div>
</span>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:  'CoreBillingChart',
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
      {return  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });}
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
      this.$http.get(this.$urlAPI+`nucleos/`+id+`/resultados/`+year+``, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
         this.series = [{ 
            name: 'Meta',
            data: response.data.success_data.billing_goal
            }, {
            name: 'Resultado',
            data: response.data.success_data.billing_results
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