<template>
    <section class="yi-di-ban-qian-default-section">
        <div class="box-operate">
            统计年份：
            <el-select
                v-model="yiDiBanQianDefaultData.year"
                placeholder="请选择年份"
                size="medium"
                :disabled="yearList.length === 0"
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
                    prop="area_name"
                    label="地区"
                    show-overflow-tooltip
                    >
                    <template slot-scope="scope">
                        <el-button type="text" @click="districtDetail(scope.$index, scope.row)" class="link-text" size="small">{{ scope.row.area_name }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="nor"
                    label="安置点(个)"
                    show-overflow-tooltip
                    >
                    <template slot-scope="scope">
                        <el-button type="text" @click="arrangeDetail(scope.$index, scope.row)" class="link-text" size="small">{{ scope.row.nor }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="noh"
                    label="户数(户)"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="nop"
                    label="人数"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="rr"
                    label="安置率(%)"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="or"
                    label="入住率(%)"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="er"
                    label="就业率(%)"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="mhi"
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
		name: "yi-di-ban-qian-default",
		components: {

        },
		data() {
			return {
                yiDiBanQianDefaultData: {
                    year: ''
                },
                yearList: [],
                isLoading: false,
                tableData: []
            }
		},
		methods: {
            search: function () {
                let that = this;
                that.yearList.splice(0, that.yearList.length);
                that.tableData.splice(0, that.tableData.length);
                that.getData();
            },
            districtDetail: function (index, row) {
                this.$router.push({ path: '/home/pageHomeDefault/yiDiBanQian/yiDiBanQianDistrict', query: {districtId: row.id} });
            },
            arrangeDetail: function (index, row) {
                this.$router.push({ path: '/home/pageHomeDefault/yiDiBanQian/yiDiBanQianArrange', query: {arrangeId: row.id} });
            },
            getData: async function() {
                let that = this;
                let params = {
                    annual: that.yiDiBanQianDefaultData.year,
                    area_code: '522300',
                    precinct: 1
                };
                that.isLoading = true;
                that.$axios.get('http://172.16.1.82:82/hadmin/api/poverty/relocation/get_area_summary', { params: params})
                    .then(function (response) {
                        let data = response;
                        if (data.status === 200) {
                            that.tableData = data.data.summary.length > 0 ? data.data.summary : [];
                            let tempYear = data.data.annual_list.length > 0 ? data.data.annual_list : [];
                            tempYear.forEach(function (value, index, array) {
                                that.yearList.push({
                                    value: value,
                                    label: value
                                })
                            })
                        }
                        that.isLoading = false;
                    })
                    .catch(function (response) {
                        that.isLoading = false;
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
            that.search();
        }
	}
</script>

<style lang="scss" scoped>
    .yi-di-ban-qian-default-section {
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
