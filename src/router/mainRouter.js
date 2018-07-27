export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: '首页',
        component: resolve => require (['views/home/PageHome.vue'], resolve),
        meta: {
          title: '首页'
        },
        redirect: '/pageHomeDefault',
        hidden: true,
        children: [
            {
                path: 'pageHomeDefault',
                name: '系统首页',
                component: resolve => require(['views/home/PageHomeDefault.vue'], resolve),
                meta: {
                    title: '系统首页'
                },
                redirect: '/home/pageHomeDefault/systemProfile',
                hidden: true,
                children: [
                    {
                        path: 'systemProfile',
                        name: '系统简介',
                        component: resolve => require (['views/home/SystemProfile.vue'], resolve),
                        meta: {
                            title: '系统首页-系统简介'
                        }
                    },
                    {
                        path: 'fuPinCloud',
                        name: '扶贫云',
                        component: resolve => require (['views/home/FuPinCloud.vue'], resolve),
                        meta: {
                            title: '系统首页-扶贫云'
                        }
                    },
                    {
                        path: 'shengTaiCloud',
                        name: '生态云',
                        component: resolve => require (['views/home/ShengTaiCloud.vue'], resolve),
                        meta: {
                            title: '系统首页-生态云'
                        }
                    },
                    {
                        path: 'huanBaoCloud',
                        name: '环保云',
                        component: resolve => require (['views/home/HuanBaoCloud.vue'], resolve),
                        meta: {
                            title: '系统首页-环保云'
                        }
                    },
                    {
                        path: 'anQuanCloud',
                        name: '安全云',
                        component: resolve => require (['views/home/AnQuanCloud.vue'], resolve),
                        meta: {
                            title: '系统首页-安全云'
                        }
                    },
                    {
                        path: 'shuiWuCloud',
                        name: '水务云',
                        component: resolve => require (['views/home/ShuiWuCloud.vue'], resolve),
                        meta: {
                            title: '系统首页-水务云'
                        }
                    },
                    {
                        path: 'erWeiMa',
                        name: '二维码',
                        component: resolve => require (['views/home/ErWeiMa.vue'], resolve),
                        meta: {
                            title: '系统首页-二维码'
                        }
                    },
                    {
                        path: 'oaOffice',
                        name: 'OA办公',
                        component: resolve => require (['views/home/OaOffice.vue'], resolve),
                        meta: {
                            title: '系统首页-OA办公'
                        }
                    },
                    {
                        path: 'shuJuZongLan',
                        name: '数据总览',
                        component: resolve => require (['views/home/ShuJuZongLan.vue'], resolve),
                        meta: {
                            title: '系统首页-数据总览'
                        },
                        redirect: '/home/pageHomeDefault/shuJuZongLan/shuJuZongLanDefault',
                        hidden: true,
                        children: [
                            {
                                path: 'shuJuZongLanDefault',
                                name: '数据总览首页',
                                component: resolve => require (['views/home/ShuJuZongLanDefault.vue'], resolve),
                                meta: {
                                    title: '系统首页-数据总览首页'
                                }
                            }
                        ]
                    },
                    {
                        path: 'yiDiBanQian',
                        name: '异地搬迁',
                        component: resolve => require (['views/home/YiDiBanQian.vue'], resolve),
                        meta: {
                            title: '系统首页-异地搬迁'
                        },
                        redirect: '/home/pageHomeDefault/yiDiBanQian/yiDiBanQianDefault',
                        hidden: true,
                        children: [
                            {
                                path: 'yiDiBanQianDefault',
                                name: '异地搬迁首页',
                                component: resolve => require (['views/home/YiDiBanQianDefault.vue'], resolve),
                                meta: {
                                    title: '系统首页-异地搬迁首页'
                                }
                            },
                            {
                                path: 'yiDiBanQianDistrict',
                                name: '异地搬迁地区',
                                component: resolve => require (['views/home/YiDiBanQianDistrict.vue'], resolve),
                                meta: {
                                    title: '系统首页-异地搬迁地区'
                                }
                            },
                            {
                                path: 'yiDiBanQianArrange',
                                name: '异地搬迁安置点',
                                component: resolve => require (['views/home/YiDiBanQianArrange.vue'], resolve),
                                meta: {
                                    title: '系统首页-异地搬迁安置点'
                                }
                            },
                            {
                                path: 'yiDiBanQianAmount',
                                name: '异地搬迁户数',
                                component: resolve => require (['views/home/YiDiBanQianAmount.vue'], resolve),
                                meta: {
                                    title: '系统首页-异地搬迁户数'
                                }
                            },
                            {
                                path: 'yiDiBanQianUser',
                                name: '异地搬迁用户信息',
                                component: resolve => require (['views/home/YiDiBanQianUser.vue'], resolve),
                                meta: {
                                    title: '系统首页-异地搬迁用户信息'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: resolve => require (['views/login/Login.vue'], resolve),
	    meta: {
		    title: '登录页面'
	    }
    },
    {
        path: '*',
        redirect: '/'
    }
]
