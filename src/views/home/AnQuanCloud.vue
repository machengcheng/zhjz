<template>
    <section class="an-quan-cloud-section">
        <div v-if="isLoading" class="loadingTip">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
        </div>
        <iframe id="anQuanCloudIframe" ref="anQuanCloudIframe" width="100%" frameborder="0"></iframe>
    </section>
</template>

<script>
	export default {
		name: "an-quan-cloud",
		components: {

        },
        watch: {
            '$route': function (route) {
                let that = this;
                let query = route.query;
                console.info('安全云vue数据');
                console.info(route);
                that.load();
            }
        },
		data() {
			return {
                isLoading: true
            }
		},
		methods: {
            load: function () {
                let that = this;
                let anQuanCloudIframe = that.$refs.anQuanCloudIframe;
                if (anQuanCloudIframe) {
                    anQuanCloudIframe.onload = anQuanCloudIframe.onreadystatechange = that.iframeLoad;
                    anQuanCloudIframe.src = "http://202.98.201.121:1057/qxnhz/map.html?roleId=1&menuType=aqy";
                }
            },
            iframeLoad: function () {
                let that = this;
                let anQuanCloudIframe = that.$refs.anQuanCloudIframe;
                if (!anQuanCloudIframe.readyState || anQuanCloudIframe.readyState === "complete") {
                    that.isLoading = false;
                    anQuanCloudIframe.height = '500px';
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
    .an-quan-cloud-section {
        .loadingTip {
            width: 100%;
            height: 500px;
            line-height: 500px;
            text-align: center;
        }
    }
</style>
