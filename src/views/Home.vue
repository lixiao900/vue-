<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <span>恒歌科技</span>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#373d41"
          text-color="#fff"
          active-text-color="#373d41"
        >
          <el-submenu index="1">
            <template slot="title">我的工作台</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
              <el-menu-item index="1-4-2">选项2</el-menu-item>
              <el-menu-item index="1-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >订单管理</a
            ></el-menu-item
          >
        </el-menu>
      </div>
      <template>
        <el-button type="info" @click="logout">退出</el-button>
      </template>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        
        <!-- 侧边栏菜单区域 -->

        <el-menu
          background-color="#373d41"
          text-color="#fff"
          active-text-color="#409bff"
          :collapse="isCollapse"
          :unique-opened="true"
          :router="true"
        >
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">一级菜单</span>
            </template>

            <el-menu-item index="users"
              ><template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">users菜单</span>
              </template></el-menu-item
            >
          </el-submenu>

          <!-- 一级菜单 -->
          <el-submenu index="2">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">一级菜单</span>
            </template>

            <el-menu-item index="Rights"
              ><template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Rights菜单</span>
              </template></el-menu-item
            >
          </el-submenu>
          <!-- 一级菜单 -->
          <el-submenu index="3">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">一级菜单</span>
            </template>

            <el-menu-item index="Roles"
              ><template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Roles菜单</span>
              </template></el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->

        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: false
    };
  },
  methods: {
    //   退出
    logout() {
      this.$confirm("是否退出登录？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          window.sessionStorage.clear();
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    // 折叠菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    routerTo() {
      this.$router.push("/users");
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      width: 200px;
    }
  }
}

.el-aside {
  background-color: #333744;

  z-index: 1;
  .el-menu {
    border-right: none;
    background-color: #333744;
  }
  .el-menu-item {
    color: #fff;
  }
}

.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
