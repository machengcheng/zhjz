<template>
    <section class="huan-bao-cloud-section">
        <div v-if="isLoading" class="loadingTip">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
        </div>
        <iframe id="huanBaoIframe" ref="huanBaoIframe" width="100%" height="0" frameborder="0"></iframe>
    </section>
</template>

<script>
	export default {
		name: "huan-bao-cloud",
		components: {

        },
		data() {
			return {
                isLoading: true
            }
		},
        watch: {
            '$route': function (route) {
                let that = this;
                let query = route.query;
                console.info('环保云vue数据');
                console.info(route);
                that.load();
            }
        },
		methods: {
            load: function () {
                let that = this;
                let huanBaoIframe = that.$refs.huanBaoIframe;
                if (huanBaoIframe) {
                    huanBaoIframe.onload = huanBaoIframe.onreadystatechange = that.iframeLoad;
                    huanBaoIframe.src = "http://202.98.201.121:1082/ys.jzgis/hby.html";
                }
            },
            iframeLoad: function () {
                let that = this;
                let huanBaoIframe = that.$refs.huanBaoIframe;
                if (!huanBaoIframe.readyState || huanBaoIframe.readyState === "complete") {
                    that.isLoading = false;
                    huanBaoIframe.height = '500px';
                }
            }
        },
        mounted: function () {
            let that = this;
            that.load();
        }
	}
</script>

<style lang="scss" scoped>
    .huan-bao-cloud-section {
        .loadingTip {
            width: 100%;
            height: 500px;
            line-height: 500px;
            text-align: center;
        }
    }
</style>
