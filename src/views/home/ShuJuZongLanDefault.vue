<template>
    <section class="shu-ju-zong-lan-default-section">
        <div class="box-operate">
            统计年份：
            <el-select
                v-model="shuJuZongLanDefaultData.year"
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
                    prop="district"
                    label="地区"
                    width="120"
                >
                    <template slot-scope="scope">
                        <el-button type="text" @click="districtDetail(scope.$index, scope.row)" class="link-text" size="small">{{ scope.row.district }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="accuracy"
                    label="精准率（%）"
                    show-overflow-tooltip
                    >
                    <template slot-scope="scope">
                        <el-button type="text" @click="accuracyDetail(scope.$index, scope.row)" class="link-text" size="small">{{ scope.row.accuracy }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="benefit"
                    label="综合效益（%）"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="target"
                    label="一达标明白卡（%）"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="score"
                    label="综合得分"
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
		name: "shu-ju-zong-lan-default",
		components: {

        },
		data() {
			return {
                shuJuZongLanDefaultData: {
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
                        district: '义龙新区',
                        accuracy: '100.00',
                        benefit: '54.66',
                        target: '-',
                        score: '-'
                    }
                ]
            }
		},
		methods: {
            search: function () {

            },
            districtDetail: function (index, row) {

            },
            accuracyDetail: function (index, row) {

            }
        }
	}
</script>

<style lang="scss" scoped>
    .shu-ju-zong-lan-default-section {
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
