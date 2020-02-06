<template>
<AppTemplate>
<span slot="content">
 <JuniorEnterpriseMenu/> 
 <JuniorEnterpriseBattles/>
  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import JuniorEnterpriseMenu from '@/components/juniorenterprises/JuniorEnterpriseMenu'
import JuniorEnterpriseBattles from '@/components/juniorenterprises/JuniorEnterpriseBattles'



export default {
    name: 'JuniorEnterpriseDetail',
    data () {
    return {
    }
  },
  components:{
    AppTemplate,
    JuniorEnterpriseMenu,
    JuniorEnterpriseBattles
  }
}
</script>

<style scoped>

</style>

