import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    component: function (resolve) {
      require(["../views/Login/Login.vue"], resolve);
    }
  },
  {
    path: "/register",
    component: function (resolve) {
      require(["../views/Login/Register.vue"], resolve);
    }
  },
  {
    path: "/home",
    name: "Home",
    component: function (resolve) {
      require(["../views/Home.vue"], resolve)
    },
    redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        component: function (resolve) {
          require(["../views/Welcome.vue"], resolve)
        }
      }, {
        path: "/users",
        component: function (resolve) {
          require(["../views/Users/Users.vue"], resolve)
        }
      },
      {
        path: "/rights",
        component: function (resolve) {
          require(["../views/Rights/Rights.vue"], resolve)
        }

      },
      {
        path: "/roles",
        component: function (resolve) {
          require(["../views/Roles/Roles.vue"], resolve)
        }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: function (resolve) {
      require(["../views/About.vue"], resolve)
    },

  }
];

const router = new VueRouter({
  routes
});
// vue-router3.1报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default router;
