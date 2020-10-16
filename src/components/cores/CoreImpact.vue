<template>
    <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <CoreImpactWidget />
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import CoreImpactWidget from '../cores/CoreImpactWidget';

export default {
    name: 'CoreImpact',
    data () {
    return {
      data: []
    }
  },
  components:{
    CoreImpactWidget
  },
}
</script>

<style scoped>

</style>