<template>
    <section class="shui-wu-cloud-section">
        <div v-if="isLoading" class="loadingTip">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
        </div>
        <iframe id="shuiWuCloudIframe" ref="shuiWuCloudIframe" width="100%" height="0" frameborder="0"></iframe>
    </section>
</template>

<script>
	export default {
		name: "shui-wu-cloud",
		components: {

        },
        watch: {
            '$route': function (route) {
                let that = this;
                let query = route.query;
                console.info('水务云vue数据');
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
                let shuiWuCloudIframe = that.$refs.shuiWuCloudIframe;
                if (shuiWuCloudIframe) {
                    shuiWuCloudIframe.onload = shuiWuCloudIframe.onreadystatechange = that.iframeLoad;
                    shuiWuCloudIframe.src = "http://www.zhjz1982.com:80/jzfp/jump/swy.do";
                }
            },
            iframeLoad: function () {
                let that = this;
                let shuiWuCloudIframe = that.$refs.shuiWuCloudIframe;
                if (!shuiWuCloudIframe.readyState || that.shuiWuCloudIframe.readyState === "complete") {
                    that.isLoading = false;
                    shuiWuCloudIframe.height = '500px';
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
    .shui-wu-cloud-section {
        .loadingTip {
            width: 100%;
            height: 500px;
            line-height: 500px;
            text-align: center;
        }
    }
</style>
