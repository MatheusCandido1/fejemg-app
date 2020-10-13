<template>
<AppTemplate>
  <span slot="content">
          <FederationMenu v-on:selectMenu="menu_option = $event" :menu_option="this.menu_option"  /> 

  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import FederationMenu from '@/components/federation/FederationMenu';

export default {
    name: 'FederationIndex',
    data () {
    return {
    }
  },
  components:{
    AppTemplate,
    FederationMenu
  }
}
</script>

<style scoped>

</style>

