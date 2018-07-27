<template>
    <section class="er-wei-ma-section">
        <div class="erWeiMaBlock">
            <div class="name">掌上金州</div>
            <img class="erWeiMa" :src="erWeiMa" />
        </div>
    </section>
</template>

<script>
    import ewm from '../../assets/imgs/ewm.png';
	export default {
		name: "er-wei-ma",
		components: {

        },
        watch: {
            '$route': function (route) {
                let query = route.query;
                console.info('二维码vue数据');
                console.info(route);
            }
        },
		data() {
			return {
                erWeiMa: ewm
            }
		},
		methods: {

        },
        mounted: function () {

        }
	}
</script>

<style lang="scss" scoped>
    .er-wei-ma-section {
        .erWeiMaBlock {
            height: 360px;
            text-align: center;
            padding-top: 160px;
            .name {
                text-align: center;
            }
            .erWeiMa {
                width: 200px;
                height: 200px;
                margin: 0 auto;
            }
        }

    }
</style>
