<template>
<AppTemplate>
<span slot="content">
  <div class="row">
<Stronger/>
<Connected/>
</div>
</span>
</AppTemplate>
</template>

<script>
import AppTemplate from '@/templates/AppTemplate'
import Stronger from '@/components/battles/Stronger'
import Connected from '@/components/battles/Connected'

export default {
  name: 'Home',
   data () {
    return {
    }
  },
  components:{
    AppTemplate,
    Stronger,
    Connected
  }
}
</script>

<style scoped>

</style>


