<template>
    <section class="left-menu-section">
        <el-menu
            class="el-menu-vertical-demo"
            text-color="#1976D3"
            active-text-color="#1976D3"
            background-color="#fff"
            @select="handleSelect"
            :unique-opened="isUnique"
            :router="true"
            :default-active="$route.matched[0].path"
            >
            <el-menu-item index="/home/pageHomeDefault/oaOffice" key="/home/pageHomeDefault/oaOffice" @click="addTabs">
                <i class="el-icon-d-arrow-right"></i>
                <span slot="title">OA办公</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="fa fa-list-alt fa-lg"></i>
                    <span>脱贫攻坚</span>
                </template>
                <el-menu-item index="/home/pageHomeDefault/shuJuZongLan" key="/home/pageHomeDefault/shuJuZongLan" @click="addTabs">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">数据总览</span>
                </el-menu-item>
                <el-menu-item index="12" key="12">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">精准比对</span>
                </el-menu-item>
                <el-menu-item index="13" key="13">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">基本保障</span>
                </el-menu-item>
                <el-menu-item index="14" key="14">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">综合效益</span>
                </el-menu-item>
                <el-menu-item index="15" key="15">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">教育扶贫</span>
                </el-menu-item>
                <el-menu-item index="/home/pageHomeDefault/yiDiBanQian" key="/home/pageHomeDefault/yiDiBanQian" @click="addTabs">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">易地搬迁</span>
                </el-menu-item>
                <el-menu-item index="17" key="17">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">万企万村</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="fa fa-list fa-lg"></i>
                    <span>河长管理</span>
                </template>
                <el-menu-item index="21" key="21">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">河长台账</span>
                </el-menu-item>
                <el-menu-item index="22" key="22">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">巡河统计</span>
                </el-menu-item>
                <el-menu-item index="23" key="23">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">巡河动态</span>
                </el-menu-item>
                <el-menu-item index="24" key="24">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">任务管理</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="fa fa-telegram fa-lg"></i>
                    <span>风险防控</span>
                </template>
                <el-menu-item index="31" key="31">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">平安金州</span>
                </el-menu-item>
                <el-menu-item index="32" key="32">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">安全管理</span>
                </el-menu-item>
                <el-menu-item index="33" key="33">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">金融负债</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="fa fa-star fa-lg"></i>
                    <span>智慧党建</span>
                </template>
                <el-menu-item index="41" key="41">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">领导台账</span>
                </el-menu-item>
                <el-menu-item index="42" key="42">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">督查督办</span>
                </el-menu-item>
                <el-menu-item index="43" key="43">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">目标绩效</span>
                </el-menu-item>
                <el-menu-item index="44" key="44">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">两个责任</span>
                </el-menu-item>
                <el-menu-item index="45" key="45">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">五人小组</span>
                </el-menu-item>
                <el-menu-item index="46" key="46">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">民意调查</span>
                </el-menu-item>
                <el-menu-item index="47" key="47">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">派驻监督</span>
                </el-menu-item>
                <el-menu-item index="48" key="48">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">在线学习</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="fa fa-star-half-full fa-lg"></i>
                    <span>村务管理</span>
                </template>
                <el-menu-item index="51" key="51">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">村级党建</span>
                </el-menu-item>
                <el-menu-item index="52" key="52">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">扶贫台账</span>
                </el-menu-item>
                <el-menu-item index="53" key="53">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">民生公开</span>
                </el-menu-item>
                <el-menu-item index="54" key="54">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">生态环境</span>
                </el-menu-item>
                <el-menu-item index="55" key="55">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">财务管理</span>
                </el-menu-item>
                <el-menu-item index="56" key="56">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">监督周报</span>
                </el-menu-item>
                <el-menu-item index="57" key="57">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">学习培训</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <i class="fa fa-server fa-lg"></i>
                    <span>金州教育</span>
                </template>
                <el-menu-item index="61" key="61">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">教育云</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">
                    <i class="fa fa-heart fa-lg"></i>
                    <span>健康医疗</span>
                </template>
                <el-menu-item index="71" key="71">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">公卫平台</span>
                </el-menu-item>
                <el-menu-item index="72" key="72">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">签约平台</span>
                </el-menu-item>
                <el-menu-item index="73" key="73">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">管理平台</span>
                </el-menu-item>
                <el-menu-item index="74" key="74">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">互联网医院</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title">
                    <i class="fa fa-user-o fa-lg"></i>
                    <span>企业管理</span>
                </template>
                <el-menu-item index="81" key="81">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">企业总揽</span>
                </el-menu-item>
                <el-menu-item index="82" key="82">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">一村一社</span>
                </el-menu-item>
                <el-menu-item index="83" key="83">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">贵州工业云</span>
                </el-menu-item>
                <el-menu-item index="84" key="84">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">综合治税</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="9">
                <template slot="title">
                    <i class="fa fa-user-circle-o fa-lg"></i>
                    <span>廉洁风险</span>
                </template>
                <el-menu-item index="91" key="91">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">行贿档案</span>
                </el-menu-item>
                <el-menu-item index="92" key="92">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">银行征信</span>
                </el-menu-item>
                <el-menu-item index="93" key="93">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">法院征信</span>
                </el-menu-item>
                <el-menu-item index="94" key="94">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">天眼查询</span>
                </el-menu-item>
                <el-menu-item index="95" key="95">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">投标监管</span>
                </el-menu-item>
                <el-menu-item index="96" key="96">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">中标企业</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="10">
                <template slot="title">
                    <i class="fa fa-folder-open-o fa-lg"></i>
                    <span>政务服务</span>
                </template>
                <el-menu-item index="101" key="101">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">审批事项</span>
                </el-menu-item>
                <el-menu-item index="102" key="102">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">阳光政采</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="11">
                <template slot="title">
                    <i class="fa fa-file-text-o fa-lg"></i>
                    <span>公文流转</span>
                </template>
                <el-menu-item index="111" key="111">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">收发统计</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="12">
                <template slot="title">
                    <i class="fa fa-lock fa-lg"></i>
                    <span>多规合一</span>
                </template>
                <el-menu-item index="121" key="121">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">多规蓝图</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
	export default {
		name: "left-menu",
		components: {

        },
        computed: {
            ...mapGetters({
                getFixedTabs: 'getFixedTabs'
            })
        },
		data() {
			return {
                isUnique: true,
                editableTabsValue: '/home/pageHomeDefault/systemProfile',
                fixedTabs: []
            }
		},
		methods: {
            ...mapActions([
                'addTab',
                'delTab',
                'setMyCenterTab'
            ]),
            getTabs: function () {
                this.fixedTabs = this.getFixedTabs;
            },
            addTabs(targetName) {
                let newTabName = targetName.index;

                for (let i = 0; i < this.fixedTabs.length; i++) {
                    if (this.fixedTabs[i].name === newTabName) {
                        this.editableTabsValue = newTabName;
                        return;
                    }
                }
                this.addTab({
                    label: targetName.$el.innerText,
                    name: targetName.index,
                    content: targetName.$el.innerText + '内容',
                    closable: true
                });
                this.editableTabsValue = newTabName;
            },
            handleSelect: function (index, indexPath) {

            }
        },
        mounted: function () {
            console.info("当前路由: ");
            console.info(this.$route);
            this.getTabs();
        }
	}
</script>

<style lang="scss" scoped>
    .left-menu-section {
        .el-menu {
            /*box-shadow: 0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px 0 rgba(0,0,0,0.14);*/
            li.is-active {
                background: transparent!important;
            }
        }
        .el-menu-item {
            span {
                position: relative;
                top: 2px !important;
            }
        }
        .el-submenu__title i {
            color: #1976D3;
            margin-right: 4px;
        }
        .el-submenu__title {
            color: #1976D3!important;
        }
        .el-icon-d-arrow-right:before {
            color: #1976D3;
        }
        .left-menu-section .el-menu li.is-active {
            background: transparent!important;
        }
        //css代码
        .el-submenu {
            .el-menu-item {
                border: 0;
                border-right: solid 1px #e6e6e6;
                /*自定义，必要时用!important*/

            }
            .el-menu-item.is-active {
                /*自定义，必要时用!important*/

            }
        }
    }
</style>
