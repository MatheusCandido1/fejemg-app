<template>
<div class="col-lg-6 grid-margin stretch-card">
    <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <h4 class="card-title">Projetos</h4>
                <apexchart width="500" type="area" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</div>
</template>
<script>

export default {
    name:  'Connected',
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
          }
        },
        series: [{
          name: 'Meta',
          data: [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500 , 6000]
        },{
            name: 'Alcançado',
            data: [0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0]
          }],
      }
    },
}
</script>
<style scoped>

</style>