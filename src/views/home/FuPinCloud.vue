<template>
    <section class="fu-pin-cloud-section">
        <!--<div v-html="html"></div>-->
        <div v-if="isLoading" class="loadingTip">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
        </div>
        <iframe id="fuPinIframe" ref="fuPinIframe" width="100%" height="0" frameborder="0"></iframe>
    </section>
</template>

<script>
    import HtmlPanel from '../../components/HtmlPanel';
	export default {
		name: "fu-pin-cloud",
		components: {
            HtmlPanel
        },
		data() {
			return {
                isLoading: true,
                fuPinYunHtml: 'http://202.98.201.121:1082/ys.jzgis/fpy.html',
                html: '',
                loading: false
            }
		},
        watch: {
            '$route': function (route) {
                let that = this;
                let query = route.query;
                console.info('扶贫云vue数据');
                console.info(route);
                // this.getData();
                that.load();
            }
        },
		methods: {
            load: function () {
                let that = this;
                let fuPinIframe = that.$refs.fuPinIframe;
                if (fuPinIframe) {
                    fuPinIframe.onload = fuPinIframe.onreadystatechange = that.iframeLoad;
                    fuPinIframe.src = "http://202.98.201.121:1082/ys.jzgis/fpy.html";
                }
            },
            iframeLoad: function () {
                let that = this;
                let fuPinIframe = that.$refs.fuPinIframe;
                if (!fuPinIframe.readyState || fuPinIframe.readyState === "complete") {
                    that.isLoading = false;
                    fuPinIframe.height = '500px';
                }
            },
            getData: async function() {
                let that = this;
                let params = {
                    headers: {
                        'Accept': 'application/json', // 用户代理可处理的媒体类型
                        'Content-Type': 'application/json' // 报文主体对象类型
                    },
                    mode: "cors", // 跨域
                    cache: "force-cache"
                };
                // let url = 'https://bird.ioliu.cn/v1/?url=' + 'http://202.98.201.121:1082/ys.jzgis/fpy.html';
                let url = '/api/in_theaters';
                that.$axios.get(url)
                    .then(function (response) {
                        let data = response;
                        if (data.status === 200) {
                            that.html = data.data ? data.data : '';
                        }
                    })
                    .catch(function (response) {
                        that.$message({
                            message: '未知异常',
                            type: 'error',
                            duration: 1500
                        });
                    });
            }
        },
        mounted: function () {
		    let that = this;
            // this.getData();
            that.load();
        }
	}
</script>

<style lang="scss">
    .fu-pin-cloud-section {
        .loadingTip {
            width: 100%;
            height: 500px;
            line-height: 500px;
            text-align: center;
        }
    }
</style>
