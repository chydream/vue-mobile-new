<template>
    <div class="man-con">
        <select-teacher
        @comfirm="comfirm"
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
    }    
}
</script>
<style scoped>

</style>
