export const user_router = {
  path: "/user",
  name: "user",
  meta: {
    requiresAuth: true,
  },
  component: () =>
    import(
      /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
    ),
  children: [
    {
      path: "users",
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
        ),
      children: [
        {
          path: "",
          name: "user-list-user",
          component: () =>
            import(
              /* webpackChunkName: "list-user" */ "@/views/main/user/UserList.vue"
            ),
        },
        {
          path: "create",
          name: "user-create-user",
          component: () =>
            import(
              /* webpackChunkName: "create-user" */ "@/views/main/user/UserCreate.vue"
            ),
        },
        {
          path: "edit/:id",
          name: "user-edit-user",
          component: () =>
            import(
              /* webpackChunkName: "edit-user" */ "@/views/main/user/UserEdit.vue"
            ),
        },
        {
          path: ":id",
          name: "user-detail-user",
          component: () =>
            import(
              /* webpackChunkName: "detail-user" */ "@/views/main/user/UserDetail.vue"
            ),
        },
        {
          path: "import",
          name: "user-import-data-user",
          component: () =>
            import(
              /* webpackChunkName: "import-data-user" */ "@/views/main/user/UserImportData.vue"
            ),
        },
      ],
    },
    {
      path: "appconfigs",
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
        ),
      children: [
        {
          path: "",
          name: "user-list-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "list-appConfig" */ "@/views/main/appConfig/AppConfigList.vue"
            ),
        },
        {
          path: "create",
          name: "user-create-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "create-appConfig" */ "@/views/main/appConfig/AppConfigCreate.vue"
            ),
        },
        {
          path: "edit/:id",
          name: "user-edit-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "edit-appConfig" */ "@/views/main/appConfig/AppConfigEdit.vue"
            ),
        },
        {
          path: ":id",
          name: "user-detail-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "detail-appConfig" */ "@/views/main/appConfig/AppConfigDetail.vue"
            ),
        },
        {
          path: "import",
          name: "user-import-data-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "import-data-appConfig" */ "@/views/main/appConfig/AppConfigImportData.vue"
            ),
        },
      ],
    },
    {
      path: "products",
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
        ),
      children: [
        {
          path: "",
          name: "user-list-product",
          component: () =>
            import(
              /* webpackChunkName: "list-product" */ "@/views/main/product/ProductList.vue"
            ),
        },
        {
          path: "create",
          name: "user-create-product",
          component: () =>
            import(
              /* webpackChunkName: "create-product" */ "@/views/main/product/ProductCreate.vue"
            ),
        },
        {
          path: "edit/:id",
          name: "user-edit-product",
          component: () =>
            import(
              /* webpackChunkName: "edit-product" */ "@/views/main/product/ProductEdit.vue"
            ),
        },
        {
          path: ":id",
          name: "user-detail-product",
          component: () =>
            import(
              /* webpackChunkName: "detail-product" */ "@/views/main/product/ProductDetail.vue"
            ),
        },
        {
          path: "import",
          name: "user-import-data-product",
          component: () =>
            import(
              /* webpackChunkName: "import-data-product" */ "@/views/main/product/ProductImportData.vue"
            ),
        },
      ],
    },
  ],
};
