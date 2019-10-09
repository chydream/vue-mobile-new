<template>
    <div>111</div>
</template>
<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
Vue.component('chart', ECharts)
export default {
    data () {
        return {
            msg: 'hello'
        }
    }
}
</script>
<style lang="sass" scoped>
</style>



