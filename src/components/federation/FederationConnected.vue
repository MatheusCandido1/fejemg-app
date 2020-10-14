<template>
    <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                        <div class="col-lg-8">
                      <FederationConnectedList />
                          </div>
                           <div class="col-lg-4">
                  <FederationConnectedStatus/>
                          </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FederationConnectedList from '../federation/FederationConnectedList';
import FederationConnectedStatus from '../federation/FederationConnectedStatus';
export default {
    name: 'FederationConnected',
    data () {
    return {
      data: []
    }
  },
  components:{
      FederationConnectedList,
      FederationConnectedStatus
  },
}
</script>

<style scoped>

</style>