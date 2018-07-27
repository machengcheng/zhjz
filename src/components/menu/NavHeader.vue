<template>
    <section class="nav-header-section">
        <el-row>
            <div class="left-menu-logo">
                <span><i class="fa fa-star fa-fw"></i>智慧金州</span>
            </div>
            <el-button type="text" @click="exitLogin" size="small" class="whiteText fr" style="margin: 0 20px 0 0;height: 60px;">退出</el-button>
            <el-button type="text" size="small" class="whiteText fr" style="height: 60px;margin: 0 20px 0 20px;">修改密码</el-button>
            <el-button type="text" size="small" class="whiteText fr" style="height: 60px;margin: 0 0 0 20px;">管理员</el-button>
        </el-row>
    </section>
</template>

<script>
	export default {
		name: "nav-header",
		components: {

        },
		data() {
			return {

            }
		},
		methods: {
            exitLogin: function () {
                let that = this;
                that.$confirm('确定要退出系统?', '信息提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    that.$router.push({ path: '/login' });
                }).catch(() => {

                });
            }
        }
	}
</script>

<style lang="scss" scoped>
    .nav-header-section {
        .left-menu-logo {
            display: inline-block;
            width: 200px;
            height: 59px;
            line-height: 59px;
            text-align: center;
            font-size: 28px;
            color: #fff;
            background: transparent;
            position: relative;
            img {
                display: inline-block;
                width: 100%;
                height: 100%;
                border: 0;
                padding: 0;
                margin: 0;
            }
        }
    }
</style>
