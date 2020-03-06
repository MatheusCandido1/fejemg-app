<template>
<AppTemplate>
  <span slot="content">
 <ProjectForm/> 
  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import ProjectForm from '@/components/projects/ProjectForm'



export default {
    name: 'ProjectAdd',
    data () {
    return {
    }
  },
  components:{
    AppTemplate,
    ProjectForm
  }
}
</script>

<style scoped>

</style>

