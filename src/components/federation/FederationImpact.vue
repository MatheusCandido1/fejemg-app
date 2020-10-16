<template>
    <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <FederationImpactWidget />
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import FederationImpactWidget from '../federation/FederationImpactWidget';

export default {
    name: 'FederationImpact',
    data () {
    return {
      data: []
    }
  },
  components:{
    FederationImpactWidget
  },
}
</script>

<style scoped>

</style>