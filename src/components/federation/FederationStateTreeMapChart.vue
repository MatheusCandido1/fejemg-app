<template>
<div class="row" v-if="dataLoaded">
     <div class="col-12 col-sm-12 col-md-12 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                      
                   <div class="row d-flex align-items-center justify-content-center">
                        <div class="badge badge-pill text-white mr-2" style="background-color: #c90738; font-size: 16px ">IES Juniores</div>
                                            <div class="badge badge-pill text-white" style="background-color: #C99807; font-size: 16px ">IES</div>

                    </div>
                    <div class="d-flex justify-content-center">
        <apexchart type="treemap" height="350" width="750" :options="chartOptions" :series="series"></apexchart>
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
            chart: {
              height: 350,
              type: 'treemap',
              toolbar: {
            show: false
            },
            },
             plotOptions: {
              treemap: {
                enableShades: true,
                shadeIntensity: 0.1,
                reverseNegativeShade: false,
                colorScale: {
                  ranges: [
                    {
                      from: 0,
                      to: 4,
                      color: '#C99807'
                    },
                    {
                      from: 4,
                      to: 200,
                      color: '#c90738'
                    }
                  ]
                }
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
      this.$http.get(this.$urlAPI+`federacao/estados/ies/2020`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
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