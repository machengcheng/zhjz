<template>
    <div class="root-container">
        <el-container class="outer-container">
            <el-header class="nav-header">
                <nav-header></nav-header>
            </el-header>
            <el-container class="inner-container">
                <el-aside class="nav-aside">
                    <div class="nav-aside-inner">
                        <left-menu></left-menu>
                    </div>
                </el-aside>
                <el-container class="inner-container">
                    <el-main class="main-content">
                        <el-breadcrumb separator="/" style="display: none;">
                            <el-breadcrumb-item :to="{ path: '/home/home' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item v-if="$route.matched.length >= 2" :to="{ path: $route.matched[1].path }">{{$route.matched[1].name}}</el-breadcrumb-item>
                            <el-breadcrumb-item v-if="$route.matched.length >= 3" :to="{ path: $route.matched[2].path }">{{$route.matched[2].name}}</el-breadcrumb-item>
                        </el-breadcrumb>
                        <router-view></router-view>
                    </el-main>
                    <el-footer class="footer-copyright">
                        <div>技术支持：©2018 中船重工集团第七一〇研究所</div>
                        <div>客服电话:0859-3232180  3232183  3232186  3232187 客服QQ群:677807222</div>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import LeftMenu from '../../components/menu/LeftMenu';
    import NavHeader from '../../components/menu/NavHeader';
	export default {
		name: "page-home",
		components: {
            LeftMenu,
            NavHeader
		},
		computed: {

		},
		data() {
        return {

        }
		},
		methods: {

		},
		mounted: function () {

		}
	}
</script>

<style lang="scss">
    .root-container {
        width: 100%;
        /*min-width: 1440px;*/
        height: 100%;
        .outer-container {
            height: 100%;
            .nav-header {
                width: 100%;
                /*min-width: 1220px;*/
                /*background-color: #fff;*/
                padding: 0;
                /*background-color: #1976d2;*/
                background: linear-gradient(-114.5deg, rgba(23,136,206,1), rgba(47,100,181,1));
                border-bottom: 0!important;
            }
            .nav-aside {
                width: 200px!important;
                min-width: 200px!important;
                background: #fff;
                position: relative;
                text-align: left;
                .nav-aside-inner {
                    position: relative;
                    height: 100%;
                    /*border-right: solid 1px #e6e6e6;*/
                    .el-menu {
                        height: 100%;
                    }
                }
            }
            .inner-container {
                background-color: #F9F9FA;
                .main-content {
                    width: 100%;
                    /*min-width: 1220px;*/
                    background-color: #F9F9FA;
                }
                .footer-copyright {
                    margin: 10px 0;
                    line-height: 1.4em;
                }
            }
        }
    }
    .el-main {
        padding: 0;
    }
    .el-header {
        background-color: #fff;
        color: #333;
        line-height: 60px;
        border-bottom: 1px solid #e7eaec !important;
    }
    .el-footer {
        background-color: #F9F9FA;
        color: #333;
        text-align: center;
        height: 40px!important;
        line-height: 40px;
        font-size: 13px;
    }
    .el-aside {
        background-color: #fff;
        color: #333;
        text-align: center;
    }
    .el-main {
        background-color: #F9F9FA;
        color: #333;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
</style>
