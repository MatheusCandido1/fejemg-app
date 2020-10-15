<template>
    <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <FederationStateWidget />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FederationStateWidget from '../federation/FederationStateWidget';
export default {
    name: 'FederationState',
    data () {
    return {
      data: []
    }
  },
  components:{
      FederationStateWidget
  },
}
</script>

<style scoped>

</style>