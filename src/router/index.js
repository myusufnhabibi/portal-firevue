import AdminLayout from "@/layouts/AdminLayout.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";
import CategoryDetailView from "@/views/CategoryDetailView.vue";
import CategoryView from "@/views/CategoryView.vue";
import DashboardView from "@/views/DashboardView.vue";
import NotFoundView from "@/views/error/NotFoundView.vue";
import LandingView from "@/views/LandingView.vue";
import NewsView from "@/views/NewsView.vue";
import ProfileView from "@/views/ProfileView.vue";
import CategoryViewPublic from "@/views/public/CategoryView.vue";
import LoginView from "@/views/public/LoginView.vue";
import RegisterView from "@/views/public/RegisterView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // AdminLayout
    {
      path: "/admin",
      component: AdminLayout,
      children: [
        {
          path: "",
          name: "Dashboard",
          component: DashboardView,
        },
        {
          path: "category",
          name: "Category",
          component: CategoryView,
        },
        {
          path: "news",
          name: "News",
          component: NewsView,
        },
        {
          path: "profile",
          name: "Profile",
          component: ProfileView,
        },
        {
          path: "category/:name",
          name: "CategoryDetail",
          component: CategoryDetailView,
        },
      ],
    },
    // PublicLayout
    {
      path: "/",
      component: PublicLayout,
      children: [
        {
          path: "/",
          name: "Home",
          component: LandingView,
        },
        {
          path: "/category",
          name: "CategoryView",
          component: CategoryViewPublic,
        },
        {
          path: "/login",
          name: "Login",
          component: LoginView,
        },
        {
          path: "/regsiter",
          name: "Register",
          component: RegisterView,
        },
      ],
    },
    // error
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NotFoundView,
    },
  ],
});

export default router;
