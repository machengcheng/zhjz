<template>
    <section class="page-home-default-section">
        <div class="result-list">
            <el-col :span="24">
                <el-tabs v-model="editableTabsValue" type="border-card" :closable="isClosable" :tab-position="tabPosition" @tab-click="handleClick" @tab-remove="removeTabs">
                    <!--<el-tab-pane label="系统简介" :key="1" name="system-profile">-->
                        <!--<basic-settings-tab :basicSettingsVisible="systemProfileVisible"></basic-settings-tab>-->
                    <!--</el-tab-pane>-->
                    <!--<el-tab-pane label="扶贫云" :key="2" name="fuPin-cloud">-->
                        <!--<mail-settings-tab :mailSettingsVisible="fuPinCloudVisible"></mail-settings-tab>-->
                    <!--</el-tab-pane>-->
                    <!--<el-tab-pane label="生态云" :key="3" name="shengTai-cloud">-->
                        <!--<ldap-settings-tab :ldapSettingsVisible="shengTaiCloudVisible"></ldap-settings-tab>-->
                    <!--</el-tab-pane>-->
                    <!--<el-tab-pane label="环保云" :key="4" name="huanBao-cloud">-->
                        <!--<terminal-settings-tab :terminalSettingsVisible="huanBaoCloudVisible"></terminal-settings-tab>-->
                    <!--</el-tab-pane>-->
                    <!--<el-tab-pane label="安全云" :key="5" name="anQuan-cloud">-->
                        <!--<terminal-settings-tab :terminalSettingsVisible="anQuanCloudVisible"></terminal-settings-tab>-->
                    <!--</el-tab-pane>-->
                    <!--<el-tab-pane label="水务云" :key="6" name="shuiWu-cloud">-->
                        <!--<terminal-settings-tab :terminalSettingsVisible="shuiWuCloudVisible"></terminal-settings-tab>-->
                    <!--</el-tab-pane>-->
                    <!--<el-tab-pane label="二维码" :key="7" name="erWeiMa-cloud">-->
                        <!--<terminal-settings-tab :terminalSettingsVisible="erWeiMaCloudVisible"></terminal-settings-tab>-->
                    <!--</el-tab-pane>-->
                    <el-tab-pane
                        :key="item.name"
                        v-for="(item, index) in fixedTabs"
                        :label="item.label"
                        :name="item.name"
                        :closable="item.closable"
                    >
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
	export default {
		name: "page-home-default",
		components: {

        },
        computed: {
            ...mapGetters({
                getFixedTabs: 'getFixedTabs'
            })
        },
		data() {
			return {
                editableTabsValue: '/home/pageHomeDefault/systemProfile',
                tabPosition: 'top',
                isClosable: false,
                fixedTabs: [],
                systemProfileVisible: '',
                fuPinCloudVisible: '',
                shengTaiCloudVisible: '',
                huanBaoCloudVisible: '',
                anQuanCloudVisible: '',
                shuiWuCloudVisible: '',
                erWeiMaVisible: '',
                oaOfficeVisible: '',
                shuJuZongLanVisible: '',
                yiDiBanQianDefaultVisible: ''
            }
		},
        watch: {
            'fixedTabs': function (newVal, oldVal) {
                if(newVal.length >= 2 && oldVal.length === 0) {
                    this.$router.push({ path: '/home/pageHomeDefault/systemProfile'});
                }
            },
            $route(){
                let tempPath = 0;

                for (let i = 0; i < this.fixedTabs.length; i++) {
                    if (this.$route.path === this.fixedTabs[i].name) {
                        tempPath = 1;
                    }
                }

                if (!tempPath) {
                    if (this.$route.path != this.$route.matched[1].path) {
                        this.setMyCenterTab(this.$route.path);
                    } else {
                        this.$router.push({ path: '/home/pageHomeDefault/systemProfile'});
                    }
                }
                this.editableTabsValue = this.$route.matched[2].path;
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
            removeTabs(targetName) {
                this.delTab(targetName);
                this.editableTabsValue = this.fixedTabs[this.fixedTabs.length - 1].name;
                this.$router.push({ path: this.editableTabsValue});
            },
            handleClick: function (tab, event) {
                console.info('tab00');
                console.info(tab);
                console.info('tab11');
                let tabLabel = tab.label.trim();
                switch(tabLabel) {
                    case '系统简介':
                        let tempDate1 = new Date();
                        this.systemProfileVisible = tempDate1.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { systemProfileVisible: this.systemProfileVisible }});
                        break;
                    case '扶贫云':
                        let tempDate2 = new Date();
                        this.fuPinCloudVisible = tempDate2.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { fuPinCloudVisible: this.fuPinCloudVisible }});
                        break;
                    case '生态云':
                        let tempDate3 = new Date();
                        this.shengTaiCloudVisible = tempDate3.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { shengTaiCloudVisible: this.shengTaiCloudVisible }});
                        break;
                    case '环保云':
                        let tempDate4 = new Date();
                        this.huanBaoCloudVisible = tempDate4.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { huanBaoCloudVisible: this.huanBaoCloudVisible }});
                        break;
                    case '安全云':
                        let tempDate5 = new Date();
                        this.anQuanCloudVisible = tempDate5.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { anQuanCloudVisible: this.anQuanCloudVisible }});
                        break;
                    case '水务云':
                        let tempDate6 = new Date();
                        this.shuiWuCloudVisible = tempDate6.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { shuiWuCloudVisible: this.shuiWuCloudVisible }});
                        break;
                    case '二维码':
                        let tempDate7 = new Date();
                        this.erWeiMaVisible = tempDate7.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { erWeiMaVisible: this.erWeiMaVisible }});
                        break;
                    case 'OA办公':
                        let tempDate8 = new Date();
                        this.oaOfficeVisible = tempDate8.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { oaOfficeVisible: this.oaOfficeVisible }});
                        break;
                    case '数据总览':
                        let tempDate9 = new Date();
                        this.shuJuZongLanVisible = tempDate9.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { shuJuZongLanVisible: this.shuJuZongLanVisible }});
                        break;
                    case '易地搬迁':
                        let tempDate10 = new Date();
                        this.yiDiBanQianDefaultVisible = tempDate10.toTimeString();
                        this.$router.push({ path: this.editableTabsValue, query: { yiDiBanQianDefaultVisible: this.yiDiBanQianDefaultVisible }});
                        break;
                    default:
                        break;
                }
            }
        },
        mounted: function () {
		    let that = this;
            that.getTabs();
        },
        updated: function () {

        }
	}
</script>

<style lang="scss" scoped>
    .page-home-default-section {
        /*padding: 25px 0;*/
        /*padding: 0 22px 26px;*/
        /*margin: 0;*/
        background-color: #F9F9FA;
        .result-list {
            padding: 0;
            margin: 0 auto;
            .result-item {
                width: 220px;
                height: 260px;
                margin: 10px auto 40px auto!important;
                color: #fff;
                font-size: 16px;
                background: #EFEFEF!important;
                -webkit-border-radius: 0;
                -moz-border-radius: 0;
                border-radius: 0;
                position: relative;
                overflow: hidden;
                img {
                    width: 100%;
                    vertical-align: baseline;
                }
            }
            .thumbnail-block {

            }
            .el-tabs--border-card {
                -webkit-box-shadow: none;
                -moz-box-shadow: none;
                box-shadow: none;
                border-bottom: 0;
                border-right: 0;
                border-left: 0;
            }
            .el-tabs__nav {
                float: left;
            }
            .el-tabs--border-card > .el-tabs__header {
                border-right: 1px solid #e4e7ed;
                border-left: 1px solid #e4e7ed;
            }
        }
    }
</style>
