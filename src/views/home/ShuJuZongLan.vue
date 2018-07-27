<template>
    <section class="shu-ju-zong-lan-section">
        <router-view></router-view>
    </section>
</template>

<script>
	export default {
		name: "shu-ju-zong-lan",
		components: {

        },
        watch: {
            '$route': function (route) {
                let query = route.query;
                console.info('数据总览vue数据');
                console.info(route);

            }
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

<style lang="scss" scoped>
    .shu-ju-zong-lan-section {
        background: #fff;
        padding-top: 50px;
    }
</style>
