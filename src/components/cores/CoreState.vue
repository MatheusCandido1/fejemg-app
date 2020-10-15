<template>
     <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <CoreStateWidget />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CoreStateWidget from '../cores/CoreStateWidget';
export default {
    name: 'CoreState',
    data () {
    return {
      data: []
    }
  },
  components:{
    CoreStateWidget
  },
}
</script>

<style scoped>

</style>