import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";


const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settings.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
  },
  {
    path: "/files",
    name: "files",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Files.vue"),
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tasks.vue"),
  },
  {
    path: "/task/:id",
    name: "TaskLayout",
    props: true ,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/tasks/TaskLayout.vue"),
    children : [
      {
        path : "" , 
        name : "TaskDetails" , 
        component : () => 
          import("../views/tasks/Details.vue")
      },
      {
        path : "edit" , 
        name : "TaskEdit" , 
        component : () => 
          import("../views/tasks/Edit.vue")
      },
      {
        path : "progress" , 
        name : "TaskProgress" , 
        component : () => 
          import("../views/tasks/progress.vue")
      }
    ]
  },
  {
    path: "/notifications",
    name: "notifications",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Notifications.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
