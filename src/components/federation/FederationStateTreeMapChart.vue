<template>
<div class="row" v-if="dataLoaded">
     <div class="col-12 col-sm-12 col-md-12 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
        <apexchart type="treemap" height="500" :options="chartOptions" :series="series"></apexchart>
                    </div>
                  </div>
                </div>

     </div>
</div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";

export default {
    name:  'FederationStateTreeMapChart',
    data: function() {
      return {
          dataLoaded: false,
      series: [{name:'Resultado',data: []}],
          chartOptions: {
            legend: {
              show: false
            },
             yaxis: {
            labels: {
    formatter: function (value) {
      {return  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });}
    }
  },
          },
            chart: {
              height: 350,
              type: 'treemap',
               toolbar: {
            show: false
            },
            },
            colors: ["#0067e2","#054d4f","#fb6e64","#971d6f","#f9c800","#ff7200","#e8306b"],
            plotOptions: {
              treemap: {
                distributed: true,
                enableShades: false
              }
            }
          },
    }
  },
  components: {
   apexcharts: VueApexCharts,
  },
  mounted(){
       let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`federacao/faturamento/nucleos/2020`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
         this.series = [{
            name: 'Resultado',
            data: response.data.success_data
            }]; 
            this.dataLoaded = true;
      })
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>