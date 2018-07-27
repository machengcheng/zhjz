<template>
    <section class="system-profile-section">
        <el-carousel :interval="5000" arrow="always" height="500px">
            <el-carousel-item v-for="item in profiles" :key="item">
                <img :src="item" />
            </el-carousel-item>
        </el-carousel>
    </section>
</template>

<script>
    import profile1 from '../../assets/imgs/profile1.png';
    import profile2 from '../../assets/imgs/profile2.png';
    import profile3 from '../../assets/imgs/profile3.png';
    import profile4 from '../../assets/imgs/profile4.png';
	export default {
		name: "system-profile",
		components: {

        },
		data() {
			return {
                profiles: [
                    profile1,
                    profile2,
                    profile3,
                    profile4
                ]
            }
		},
        watch: {
            '$route': function (route) {
                let query = route.query;
                console.info('系统简介vue数据');
                console.info(route);
            }
        },
		methods: {

        },
        mounted: function () {

        }
	}
</script>

<style lang="scss">
    .system-profile-section {
        /*padding: 0 22px 26px;*/
        background-color: #fff;
        .el-carousel{
            width: 100%;
            .el-carousel__item {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .el-carousel__button {
                width: 16px;
                height: 16px;
                -webkit-border-radius: 100%;
                -moz-border-radius: 100%;
                border-radius: 100%;
            }
        }
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
</style>
