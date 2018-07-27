<template>
    <section class="yi-di-ban-qian-amount-section">
        <div class="box-operate">
            统计年份：
            <el-select
                v-model="yiDiBanQianAmountData.year"
                placeholder="请选择年份"
                size="medium"
            >
                <el-option
                    v-for="item in yearList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button  type="primary" @click="search" size="medium" class="danger-button ml15">查询</el-button>
            <el-button  type="primary" @click="last" size="mini" icon="el-icon-arrow-left" class="ml15 fr" circle></el-button>
        </div>
        <div class="box-content">
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                v-loading="isLoading"
                style="width: 100%"
            >
                <el-table-column
                    prop="arrangePosition"
                    label="安置点"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    show-overflow-tooltip
                >
                    <template slot-scope="scope">
                        <el-button type="text" @click="userDetail(scope.$index, scope.row)" class="link-text" size="small">{{ scope.row.name }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="moveOut"
                    label="迁出地"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="installDate"
                    label="电表安装日期"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="incomeTotal"
                    label="当年累计就业收入(元)"
                    width="160"
                >
                </el-table-column>
            </el-table>
            <div class="clear"></div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "yi-di-ban-qian-amount",
		components: {

        },
		data() {
			return {
                yiDiBanQianAmountData: {
                    year: ''
                },
                yearList: [
                    {
                        value: '2016',
                        label: '2016'
                    },
                    {
                        value: '2017',
                        label: '2017'
                    },
                    {
                        value: '2018',
                        label: '2018'
                    }
                ],
                isLoading: false,
                tableData: [
                    {
                        arrangePosition: '兴仁县2018年东湖街道陆关居委会安置点',
                        name: '丁修广',
                        moveOut: '兴仁县雨樟镇交乐村',
                        installDate: '-',
                        incomeTotal: '0.00'
                    }
                ]
            }
		},
		methods: {
            search: function () {

            },
            last: function () {
                this.$router.push({ path: '/home/pageHomeDefault/yiDiBanQian/yiDiBanQianArrange' });
            },
            userDetail: function (index, row) {
                this.$router.push({ path: '/home/pageHomeDefault/yiDiBanQian/yiDiBanQianUser', query: {userId: row.id} });
            }
        }
	}
</script>

<style lang="scss" scoped>
    .yi-di-ban-qian-amount-section {
        padding: 0 22px 26px;
        background-color: #fff;
        .box-operate {
            padding: 0 0 10px 15px;
        }
        .box-content {
            padding: 0 0 20px 15px;
        }
    }
</style>
