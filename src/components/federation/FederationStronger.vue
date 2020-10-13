<template>
    <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="row">
                        <div class="col-lg-6">
                      <FederationBillingChart />
                          </div>
                           <div class="col-lg-6">
                          </div>
                          </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import FederationBillingChart from '../federation/FederationBillingChart';

export default {
    name: 'FederationStronger',
    data () {
    return {
      data: []
    }
  },
  components:{
    FederationBillingChart
  },
}
</script>

<style scoped>

</style>