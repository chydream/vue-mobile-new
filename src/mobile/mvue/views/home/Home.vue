<template>
    <div class="home-wrap" id="downLoad">
        <img :src="mainImg" width="200"/>
        <div class="home-body">
            <ul class="list-home">
                <li v-for="(item,index) in listArr" :key="index">{{item.str}}</li>
            </ul>
            <load-more :tip="loadTip" :show-loading="loading"></load-more>
        </div>
    </div>
</template>
<script>
import { LoadMore } from 'vux'
export default {
    components: {
        LoadMore
    },
    data () {
        return {
            selected: false,
            msg: 'hello',
            listArr: [
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'}
            ],
            page: 1,
            pageSize: 5,
            total: 5,
            loading: false,
            loadTip: '正在加载'
        }
    },
    created () {
        this.setTitle('首页')
    },
    mounted () {
        this.refreshData()
    },
    computed: {
        mainImg () {
            return this.selected ? require('./1a.jpg') : require('./2a.jpg')
        }
    },
    methods: {
        // 下拉加载
        refreshData () {
            var self = this 
            var downLoad = document.getElementById('downLoad')
            downLoad.addEventListener('scroll', function (ev) {
                var height = this.offsetHeight
                var scrollTop = this.scrollTop
                var scrollHeight = this.scrollHeight
                if (height + scrollTop > scrollHeight - 20) {
                    if (self.page < self.total) {
                         if (!self.loading) {
                            self.page += 1
                            self.loading = true
                            self.loadTip = '加载中'
                            self.getNodeList(self.page)
                        }
                    }
                }
            })
        },
        getNodeList (page) {
            var self = this
            setTimeout(() => {
                var arr = []
                for (var i = 0; i < 5; i++) {
                    arr.push({str: 'eeeeeee' + page})
                }
                self.listArr = this.listArr.concat(arr)
                self.loading = false
                self.loadTip = '已到底部'
            }, 500)
        }
    }
}
</script>
<style lang="less" scoped>
.home-wrap{
    padding: 10px 0;
    .list-home li{
        height: 30px;
        line-height: 30px;
    }
}
</style>
