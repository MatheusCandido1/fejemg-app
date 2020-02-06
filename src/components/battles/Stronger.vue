<template>
<div class="col-lg-6 grid-margin stretch-card">
    <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <h4 class="card-title">Faturamento</h4>
                <apexchart width="500" type="area" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</div>
</template>
<script>

export default {
    name:  'Stronger',
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
          xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
          }
        },

        
        series: [{
          name: 'Meta',
          data: [750000, 1500000, 2250000, 3000000, 3750000, 4500000, 5250000, 6000000, 6750000, 7500000, 8250000, 9000000]
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