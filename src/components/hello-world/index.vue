<template>
    <uni-rate :size="18" :value="5" />
    <view>hello-world</view>

    <u-button type="primary">主要按钮</u-button>
    <u-button type="success">成功按钮</u-button>
    <u-button type="info">信息按钮</u-button>
    <u-button type="warning">警告按钮</u-button>
    <u-button type="error" @click="goLogin">危险按钮</u-button>
    <uni-popup ref="popup" type="bottom" background-color="#fff">
        <image class="logo" src="@/assets/logo.png" />
    </uni-popup>
</template>

<script lang="ts">
import request from '@/utils/request'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'HelloWorld',
    setup() {
        const store = useStore()
        const city = ref('')
        const laglnt = reactive({
            lat: '',
            lng: ''
        })
        const popup = ref()

        console.log('useStore访问store', store.state.system.title)

        // 这个这就接口格式不规范，就用any了
        request.get('http://ip-api.com/json').then((res: any) => {
            console.log(res)
            city.value = res.city
            laglnt.lat = res.lat
            laglnt.lng = res.lon
        })

        const getUserInfo = () => {
            request.get('/getUserInfo').then((res) => {
                console.log(res.result)
            })
        }

        const apiTest = () => {
            request
                .get('/sug', {
                    code: 'utf-8',
                    q: '苹果'
                })
                .then((res) => {
                    console.log(res)
                })
        }

        const open = () => {
            popup.value.open()
        }

        const goLogin = () => {
            wx.getSystemInfo({
                success: (res: any) => {
                    const { environment } = res
                    console.log(`运行环境${JSON.stringify(res)}`)
                    // 判断是否为企业微信环境
                    if (environment === 'wxwork') {
                        wx.qy.login({
                            success: (loginRes: { code: any; errMsg: string }) => {
                                if (loginRes.code) {
                                    console.log(`登录成功！${JSON.stringify(loginRes)}`)
                                } else {
                                    console.log(`登录失败！${loginRes.errMsg}`)
                                }
                            }
                        })
                    } else {
                        // 获取code 小程序专有，用户登录凭证。
                        uni.login({
                            provider: 'weixin',
                            success(login) {
                                console.log(login)
                            }
                        })
                        // desc: '用于完善会员资料'  必填 声明获取用户个人信息后的用途，后续会展示在弹窗中
                        uni.getUserProfile({
                            desc: '用于完善会员资料',
                            lang: 'zh_CN',
                            success(user) {
                                console.log(user)
                            }
                        })
                    }
                }
            })
        }
        return { city, laglnt, popup, getUserInfo, apiTest, open, goLogin }
    }
    // mounted() {
    //     console.log('this访问store', this.$store.state.system.title)
    // }
})
</script>

function resolve(res: UniApp.LoginRes) { throw new Error('Function not implemented.') } function
reject(err: any) { throw new Error('Function not implemented.') } function resolve(res:
UniApp.LoginRes) { throw new Error('Function not implemented.') }
