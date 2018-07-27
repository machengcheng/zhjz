<template>
    <section class="user-detail-dialog-section">
        <el-dialog
            title="用户详情"
            :visible.sync="userDetailDialogVisible"
            :before-close="closeDialog"
            :lock-scroll="false"
            :close-on-click-modal="false"
            :open="initDialogData()"
        >
            <el-form :model="userDetailDialogForm" :rules="rules" ref="userDetailDialogForm" class="demo-form-inline" label-width="60px">
                <div class="content">
                    <el-col :span="24">
                        <el-form-item
                            align="left"
                            label="名称: "
                            prop="name"
                        >
                            <el-input
                                v-model="userDetailDialogForm.name"
                                size="medium"
                            >
                            </el-input>
                        </el-form-item>
                    </el-col>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog" class="default-button">取 消</el-button>
                <el-button type="primary" :loading="isLoading" class="danger-button" @click="closeDialog">确 定</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
	export default {
		name: "user-detail-dialog",
		components: {

        },
        props: ['userDetailDialogVisible'],
		data() {
			return {
                userDetailDialogForm: {
                    name: ''
                },
                isLoading: false,
                rules: {
                    name: [
                        {required: true, message: '节点名称不能为空', trigger: 'blur,change'}
                    ]
                }
            }
		},
		methods: {
            closeDialog: function () {
                this.$emit('userDetailDialogVisibleEvent', this.userDetailDialogVisible);
            },
            initDialogData: function () {

            },

        }
	}
</script>

<style lang="scss" scoped>
    .user-detail-dialog-section {

    }
</style>
