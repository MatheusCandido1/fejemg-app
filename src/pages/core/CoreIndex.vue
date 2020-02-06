<template>
<AppTemplate>
  <span slot="content">
       <CoreList/> 
  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import CoreList from '@/components/cores/CoreList'

export default {
    name: 'CoreIndex',
    data () {
    return {
    }
  },
  components:{
    AppTemplate,
    CoreList
  }
}
</script>

<style scoped>

</style>

