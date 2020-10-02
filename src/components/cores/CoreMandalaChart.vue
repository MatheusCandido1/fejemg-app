<template>
<div class="col-lg-12 col-xl-12 col-md-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Mandala do Núcleo</h4>
        <apexchart type="radar" height="600" width="600" :options="chartOptions" :series="series"></apexchart>
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
            data: [4, 5, 5, 5, 4, 5,3,4,5,5,4,3],
          }, {
            name: 'Resultado',
            data: [2.8, 3, 4.7, 3.3, 2.4, 4.9, 4.5, 3.4, 5, 4, 4, 3],
          }],
          chartOptions: {
            chart: {
              type: 'radar',
            },
            xaxis: {
              categories: ['Gestão do time', 'Estilo de Liderança', 'Empoderamento de Time', 'Nivel de Consciência', 'Motivação Interna', 'Consciência Organizacional','Relação com Partes Interessadas','Geração de Valor','Estrutura Organizacional','Sustentabilidade Fin.','Funcionamento do Time','Tomada de Decisão']
            }
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