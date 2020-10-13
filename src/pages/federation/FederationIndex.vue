<template>
<AppTemplate>
  <span slot="content">
          <FederationMenu v-on:selectMenu="menu_option = $event" :menu_option="this.menu_option"  /> 
 <slot name="stronger" v-if="menu_option === 1">
        <FederationStronger/>
    </slot>

    <slot name="connected" v-if="menu_option === 2">
        <FederationConnected/>
    </slot>
<!--
    <slot name="state" v-if="menu_option === 3">
        <CoreState/>
    </slot>

    <slot name="leaders" v-if="menu_option === 4">
        <CoreLeaders/>
    </slot>

    
    <slot name="impact" v-if="menu_option === 5">
        <CoreImpact/>
    </slot> -->
  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import FederationMenu from '@/components/federation/FederationMenu';

import FederationStronger from '@/components/federation/FederationStronger';
import FederationConnected from '@/components/federation/FederationConnected';

export default {
    name: 'FederationIndex',
    data () {
    return {
        menu_option: 1,
    }
  },
  components:{
    AppTemplate,
    FederationMenu,
    FederationStronger,
    FederationConnected
  }
}
</script>

<style scoped>

</style>

