<template>
    <section class="html-panel-section">
        <p v-html="html"></p>
    </section>
</template>

<script>
	export default {
		name: "html-panel",
		components: {

        },
        // 使用时请使用 :url.sync=""传值
        props: {
            url: {
                required: true
            }
        },
        watch: {
            url (value) {
                this.load(value);
            }
        },
		data() {
			return {
                loading: false,
                html: ''
            }
		},
		methods: {
            load (url) {
                if (url && url.length > 0) {
                    // 加载中
                    this.loading = true;
                    let param = {
                        accept: 'text/html, text/plain'
                    };
                    this.$http.get(url, param).then((response) => {
                        this.loading = false;
                        // 处理HTML显示
                        this.html = response.data
                    }).catch(() => {
                        this.loading = false;
                        this.html = '加载失败'
                    })
                }
            }
        },
        mounted: function () {

        }
	}
</script>

<style lang="scss" scoped>
    .html-panel-section {

    }
</style>
