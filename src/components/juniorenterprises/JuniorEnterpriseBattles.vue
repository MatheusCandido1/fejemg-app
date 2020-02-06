<template>
<span>
    <div class="row">
 <JuniorEnterpriseStronger/>
  <JuniorEnterpriseConnected/>
   <JuniorEnterpriseImpact/>
    </div>
</span>
</template>
<script>
import JuniorEnterpriseStronger from '@/components/juniorenterprises/JuniorEnterpriseStronger'
import JuniorEnterpriseConnected from '@/components/juniorenterprises/JuniorEnterpriseConnected'
import JuniorEnterpriseImpact from '@/components/juniorenterprises/JuniorEnterpriseImpact'



export default {
    name: 'JuniorEnterpriseBattles',
    data () {
    return {
    }
  },
  components:{
    JuniorEnterpriseStronger,
    JuniorEnterpriseConnected,
    JuniorEnterpriseImpact
  }
}
</script>

<style scoped>

</style>

