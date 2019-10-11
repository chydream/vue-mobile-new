<template>
    <div class="man-con">
        <select-teacher
        @comfirm="comfirm"
        :selected="selectedMan"
        ></select-teacher>
    </div>
</template>
<script>
import selectTeacher from '@/components/selectTeacher'
export default {
    name: 'man',
     components: {
       selectTeacher
    },
    computed: {
      
    },
    data () {
        return {
           selectedMan: []
        }
    },
    methods: {
        comfirm (data) {
            this.$store.state.email.selectedMan = data
            this.$router.go(-1)
        }
    },
    created () {
        this.setTitle('选择教师')
    },
    mounted () {
        this.selectedMan = this.$store.state.email.selectedMan
    }    
}
</script>
<style scoped>

</style>
