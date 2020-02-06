<template>
<AppTemplate>
  <span slot="content">
 <JuniorEnterpriseList/> 
  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import JuniorEnterpriseList from '@/components/juniorenterprises/JuniorEnterpriseList'

export default {
    name: 'JuniorEnterpriseIndex',
    data () {
    return {
    }
  },
  components:{
    AppTemplate,
    JuniorEnterpriseList
  }
}
</script>

<style scoped>

</style>

