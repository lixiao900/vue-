<template>
    <div>
        <el-tabs tab-position="bottom" style="height: 400px">
            <el-tab-pane>
                <template slot="label">
                    <!-- 按钮区域 -->
                    <el-form-item class="btns">
                        <el-button type="primary" @click="login"
                            >登录</el-button
                        >
                    </el-form-item>
                </template>
                <div>
                    <!-- 用户名 -->
                    <el-form-item label="账号：" prop="username">
                        <el-input
                            autocomplete="on"
                            type="text"
                            v-model="loginForm.username"
                            clearable
                        />
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item label="密码：" prop="password">
                        <el-input
                            autocomplete="on"
                            v-model="loginForm.password"
                            type="password"
                            clearable
                        />
                    </el-form-item>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <template slot="label">
                    <el-button type="info">注册</el-button>
                </template>
                注册界面
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
};
</script>

<style scoped lang="less">
</style>
