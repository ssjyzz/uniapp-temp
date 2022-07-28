<script setup lang="ts">
import { getUserinfo, getUserToken } from '@/utils/api/index'
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import md5 from 'js-md5'

onLaunch(() => {
    console.log('App Launch')
})
onShow(() => {
    console.log('App Show')
})
onHide(() => {
    console.log('App Hide')
})
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'vk-uview-ui/index.scss';
</style>
