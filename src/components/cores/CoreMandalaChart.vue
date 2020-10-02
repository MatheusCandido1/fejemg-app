<template>
<div class="col-lg-12 col-xl-12 col-md-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
          <h4 class="card-title">Mandala</h4>
        <apexchart style="margin-top: -50px" type="radar" height="650" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:  'CoreMandalaChart',
    data: function() {
      return {
           series: [{
            name: 'Meta',
            data: [5, 5, 5, 5, 5, 5,5,5,5,5,5,5],
          }, {
            name: 'Resultado',
            data: [2.8, 3, 4.7, 3.3, 2.4, 4.9, 4.5, 3.4, 5, 4, 4, 3],
          }],
          
          chartOptions: {
            id: 'vuechart-example',
            chart: {
              type: 'radar',
              width: '100%',
              toolbar: {
              show: false
              },
            },
            xaxis: {
              categories: ['Gestão do time', 'Estilo de Liderança', 'Empoderamento de Time', 'Nivel de Consciência', 'Motivação Interna', 'Consciência Organizacional','Relação com Partes Interessadas','Geração de Valor','Estrutura Organizacional','Sustentabilidade Fin.','Funcionamento do Time','Tomada de Decisão']
            },
            
          }
      }
         
  },
  components: {
   apexcharts: VueApexCharts,
  },
  methods: {
  }
}
</script>
<style scoped>
</style>