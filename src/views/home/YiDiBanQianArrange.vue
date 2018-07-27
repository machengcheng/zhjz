<template>
    <section class="yi-di-ban-qian-arrange-section">
        <div class="box-operate">
            统计年份：
            <el-select
                v-model="yiDiBanQianArrangeData.year"
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
                    prop="amount"
                    label="户数(户)"
                    show-overflow-tooltip
                >
                    <template slot-scope="scope">
                        <el-button type="text" @click="amountDetail(scope.$index, scope.row)" class="link-text" size="small">{{ scope.row.amount }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="人数"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="ratioArrange"
                    label="安置率(%)"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="ratioLive"
                    label="入住率(%)"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="ratioWork"
                    label="就业率(%)"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="incomeAvg"
                    label="当年户均累计收入(元)"
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
		name: "yi-di-ban-qian-arrange",
		components: {

        },
		data() {
			return {
                yiDiBanQianArrangeData: {
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
                        arrangePosition: '兴义市2018年洒金新区安置点',
                        amount: '2237',
                        count: '11116',
                        ratioArrange: '3.00',
                        ratioLive: '2.00',
                        ratioWork: '44s.00',
                        incomeAvg: '0.00'
                    }
                ]
            }
		},
		methods: {
            search: function () {

            },
            last: function () {
                this.$router.push({ path: '/home/pageHomeDefault/yiDiBanQian/yiDiBanQianDistrict' });
            },
            amountDetail: function (index, row) {
                this.$router.push({ path: '/home/pageHomeDefault/yiDiBanQian/yiDiBanQianAmount', query: {amountId: row.id} });
            }
        }
	}
</script>

<style lang="scss" scoped>
    .yi-di-ban-qian-arrange-section {
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
