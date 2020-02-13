<template>
<AppTemplate>
  <span slot="content">
 <CoreForm/> 
  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import CoreForm from '@/components/cores/CoreForm'



export default {
    name: 'CoreAdd',
    data () {
    return {
    }
  },
  components:{
    AppTemplate,
    CoreForm
  }
}
</script>

<style scoped>

</style>

