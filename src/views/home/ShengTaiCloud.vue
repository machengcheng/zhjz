<template>
    <section class="sheng-tai-cloud-section">
        <div v-if="isLoading" class="loadingTip">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
        </div>
        <iframe id="shengTaiIframe" ref="shengTaiIframe" width="100%" height="0" frameborder="0"></iframe>
    </section>
</template>

<script>
	export default {
		name: "sheng-tai-cloud",
		components: {

        },
		data() {
			return {
                isLoading: true,
                shengTaiIframe: null
            }
		},
        watch: {
            '$route': function (route) {
                let that = this;
                let query = route.query;
                console.info('生态云vue数据');
                console.info(route);
                that.load();
            }
        },
		methods: {
            load: function () {
                let that = this;
                let shengTaiIframe = that.$refs.shengTaiIframe;
                if (shengTaiIframe) {
                    shengTaiIframe.onload = shengTaiIframe.onreadystatechange = that.iframeLoad;
                    shengTaiIframe.src = "http://202.98.201.121:1082/ys.jzgis/sty.html";
                }
            },
            iframeLoad: function () {
                let that = this;
                let shengTaiIframe = that.$refs.shengTaiIframe;
                if (!shengTaiIframe.readyState || that.shengTaiIframe.readyState === "complete") {
                    that.isLoading = false;
                    shengTaiIframe.height = '500px';
                }
            }
        },
        mounted: function () {
            let that = this;
            that.load();
        },
        beforeDestroy: function () {
            let that = this;
        }
	}
</script>

<style lang="scss" scoped>
    .sheng-tai-cloud-section {
        .loadingTip {
            width: 100%;
            height: 500px;
            line-height: 500px;
            text-align: center;
        }
    }
</style>
