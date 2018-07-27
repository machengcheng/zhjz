<template>
    <section class="yi-di-ban-qian-user-section">
        <div class="box-operate">
            <el-button  type="primary" @click="last" size="mini" icon="el-icon-arrow-left" class="ml15 fr" circle></el-button>
        </div>
        <div class="clear"></div>
        <div class="box-content">
            <div class="content">
                <div class="item-split">
                    <span class="item-title">基础信息</span>
                </div>
                <div class="block-item" style="min-height: 320px;">
                    <ul class="info-list">
                        <li class="info-item">
                            <span class="tips">户主姓名:</span>
                            <span class="detail">丁修启</span>
                        </li>
                        <li class="info-item">
                            <span class="tips">性别:</span>
                            <span class="detail"></span>
                        </li>
                        <li class="info-item">
                            <span class="tips">身份证号:</span>
                            <span class="detail">52232419641121****</span>
                        </li>
                        <li class="info-item">
                            <span class="tips">联系方式:</span>
                            <span class="detail">1568593****</span>
                        </li>
                        <li class="info-item">
                            <span class="tips">家庭住址:</span>
                            <span class="detail">贵州省黔西南州晴隆县大厂镇地久村</span>
                        </li>
                        <li class="info-item">
                            <span class="tips">健康状态:</span>
                            <span class="detail">健康</span>
                        </li>
                        <li class="info-item">
                            <span class="tips">户口人数:</span>
                            <span class="detail">4人</span>
                        </li>
                        <li class="info-item">
                            <span class="tips">劳动能力:</span>
                            <span class="detail">普通劳动力</span>
                        </li>
                        <li class="info-item">
                            <span class="tips">文化程度:</span>
                            <span class="detail">初中</span>
                        </li>
                        <li class="info-item">
                            <span class="tips">贫困状态:</span>
                            <span class="detail">
                                <el-radio disabled v-model="isPoor" label="0">贫困</el-radio>
                                <el-radio disabled v-model="isPoor" label="1">脱贫</el-radio>
                                <el-radio disabled v-model="isPoor" label="2">预脱贫</el-radio>
                            </span>
                        </li>
                        <li class="info-item">
                            <span class="tips">是否返贫:</span>
                            <span class="detail">
                                <el-radio disabled v-model="isGoPoor" label="0">是</el-radio>
                                <el-radio disabled v-model="isGoPoor" label="1">否</el-radio>
                            </span>
                        </li>
                        <li class="info-item">
                            <span class="tips">识别标准:</span>
                            <span class="detail">
                                <el-radio disabled v-model="identifyStandard" label="0">国家标准</el-radio>
                                <el-radio disabled v-model="identifyStandard" label="1">省定标准</el-radio>
                                <el-radio disabled v-model="identifyStandard" label="2">市定标准</el-radio>
                            </span>
                        </li>
                        <li class="info-item">
                            <span class="tips">主要致贫原因:</span>
                            <span class="detail">因病</span>
                        </li>
                        <li class="info-item">
                            <span class="tips">其他致贫原因:</span>
                            <span class="detail">无</span>
                        </li>
                    </ul>
                </div>
                <div class="item-split">
                    <span class="item-title">家庭成员信息</span>
                </div>
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    >
                    <el-table-column
                        type="index"
                        label="序号"
                        width="50"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        show-overflow-tooltip
                        >
                    </el-table-column>
                    <el-table-column
                        prop="sex"
                        label="性别"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="idCard"
                        label="身份证号"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="withRelation"
                        label="与户主关系"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="nation"
                        label="民族"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="contact"
                        label="联系方式"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="culture"
                        label="文化程度"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="health"
                        label="健康状况"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="workingCapacity"
                        label="劳动能力"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="workStatus"
                        label="务工状态"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="isJoinMedical"
                        label="是否参加新型农村合作医疗"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="isJoinInsurance"
                        label="是否参加城乡居民基本养老保险"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="infoStatus"
                        label="信息变更状态"
                        show-overflow-tooltip
                        >
                    </el-table-column>
                    <el-table-column
                        prop="infoStatusReason"
                        label="变更原因"
                        :formatter="formatter"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "yi-di-ban-qian-user",
		components: {

        },
		data() {
			return {
                userDetailData: [],
                isPoor: '0',
                isGoPoor: '0',
                identifyStandard: '0',
                tableData: [
                    {
                        id: 1,
                        name: '王立花',
                        sex: '女',
                        idCard: '522*******1211162X',
                        withRelation: '配偶',
                        nation: '汉族',
                        contact: '156*****802',
                        culture: '文盲或半文盲',
                        health: '长期慢性病',
                        workingCapacity: '普通劳动力',
                        workStatus: '-',
                        isJoinMedical: '是',
                        isJoinInsurance: '-',
                        infoStatus: '',
                        infoStatusReason: ''
                    },
                    {
                        id: 2,
                        name: '王小虎',
                        sex: '男',
                        idCard: '522*******01061614',
                        withRelation: '之子',
                        nation: '汉族',
                        contact: '156*****802',
                        culture: '-',
                        health: '健康',
                        workingCapacity: '无劳动力',
                        workStatus: '-',
                        isJoinMedical: '是',
                        isJoinInsurance: '-',
                        infoStatus: '',
                        infoStatusReason: ''
                    }
                ]
            }
		},
		methods: {
            last: function () {
                this.$router.push({ path: '/home/pageHomeDefault/yiDiBanQian/yiDiBanQianAmount' });
            },
            formatter(row, column) {
                return row.address;
            }
        }
	}
</script>

<style lang="scss" scoped>
    .yi-di-ban-qian-user-section {
        padding: 0 22px 26px;
        background-color: #fff;
        .block-item {
            background-color: #fff;
            border-radius: 3px;
            .block-title {
                height: 48px;
                line-height: 48px;
                padding-left: 15px;
                color: #606266;
                font-size: 14px;
                background-color: #f5f7fa;
            }
        }
        .info-list {
            font-size: 13px;
            padding: 0 25px 25px 25px;
            line-height: 3.2em;
            color: #4E4E4E;
            .info-item {
                width: 50%;
                float: left;
                span {
                    display: inline-block;
                }
                span.tips {
                    min-width: 70px;
                    text-align: left;
                }
                span.detail {
                    display: inline-block;
                    min-width: 100px;
                    text-align: left;
                }
                img {
                    width: 80px;
                    height: 80px;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                }
            }
            .info-item:last-of-type {
                border: 0;
            }
        }
        .box-operate {
            padding: 0 0 10px 15px;
        }
        .box-content {
            padding: 0 0 20px 15px;
        }
        .content {
            .item-split {
                border-bottom: 1px solid #eee;
                margin-bottom: 20px;
                .item-title {
                    display: inline-block;
                    border-bottom: 2px solid #409EFF;
                }
            }
            .el-input .el-input__inner {
                width: 100%!important;
            }
            .el-select .el-input__inner {
                width: 100%!important;
            }
            [class*=el-col-12] {
                float: left;
            }
        }
    }
</style>
