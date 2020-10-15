<template>
   <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                        <div class="col-lg-8">
                      <CoreConnectedList />
                          </div>
                           <div class="col-lg-4">
                <CoreConnectedStatus />
                          </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CoreConnectedList from '../cores/CoreConnectedList';
import CoreConnectedStatus from '../cores/CoreConnectedStatus';
export default {
    name: 'CoreConnected',
    data () {
    return {
      data: []
    }
  },
  components:{
    CoreConnectedList,
    CoreConnectedStatus
  },
}
</script>

<style scoped>

</style>