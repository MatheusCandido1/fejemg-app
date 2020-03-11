<template>
<div class="col-lg-6 grid-margin stretch-card">
    <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <h4 class="card-title">Faturamento por mês</h4>
                <apexchart width="500" type="area" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";

export default {
    name:  'JuniorEntepriseBillingChart',
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
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            labels: {
    formatter: function (value) {
      if(value == 0){
      return "R$ 0,00";
      }else{
      return "R$ " + value + ".000,00";}
    }
  }
          }
        },
        series: [{
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
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`ejs/1/faturamento/2020`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
          this.series = [{ 
            name: 'Meta',
            data: response.data 
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