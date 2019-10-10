<template>
    <div class="man-con">
        <checklist :options="manList" v-model="selectedMan"></checklist>
        <div class="btn-p">
            <x-button @click.native="comfirm" type="primary">确定</x-button>
        </div>
        
        <div style="height:2rem;"></div>
    </div>
</template>
<script>
import { Checklist, XButton } from 'vux'
export default {
     components: {
        Checklist, XButton
    },
    computed: {
       manList () {
           return this.$store.state.email.manList
       }
    },
    data () {
        return {
            selectedMan: []
        }
    },
    methods: {
        comfirm () {
            this.$emit('comfirm', this.selectedMan)
        }
    },
   
    mounted () {
        this.$store.dispatch('email/getManList')
    }    
}
</script>
<style scoped>
.man-con{
    position: relative;
}
.btn-p{
    position: fixed;
    bottom: 1rem;
    width: 100%;
    background: #fff;
    padding: 0.2rem 0;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);
}
</style>
