<template>
<AppTemplate>
  <span slot="content">
 <JuniorEnterpriseForm/> 
  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import JuniorEnterpriseForm from '@/components/juniorenterprises/JuniorEnterpriseForm'



export default {
    name: 'JuniorEnterpriseAdd',
    data () {
    return {
    }
  },
  components:{
    AppTemplate,
    JuniorEnterpriseForm
  }
}
</script>

<style scoped>

</style>

