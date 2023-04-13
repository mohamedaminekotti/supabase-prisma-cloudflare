import { ref } from "vue";
import { useAuthStore } from "@/store/useAuth";
const { currentUser } = useAuthStore();

export default function useDocMenuConfig() {
  const DocMenuConfig = ref([
    {
      pages: [
        {
          heading: "Home",
          route: "/",
          svgIcon: "svg/icons/art002.svg",
          fontIcon: "bi-app-indicator",
        },
      ],
    },
    {
      heading: "users",
      route: `/${currentUser.role}/users`,
      pages: [
        {
          heading: "All users",
          route: `/${currentUser.role}/users`,
          svgIcon: "/svg/icons/abs015.svg",
          fontIcon: "bi-calendar3-event",
        },
        {
          heading: "Create user",
          route: `/${currentUser.role}/users/create`,
          svgIcon: "/svg/icons/lay009.svg",
          fontIcon: "bi-calendar3-event",
        },
        {
          heading: "Import data",
          route: `/${currentUser.role}/users/import`,
          svgIcon: "/svg/files/upload.svg",
          fontIcon: "bi-calendar3-event",
        },
      ],
    },
    {
      heading: "appconfigs",
      route: `/${currentUser.role}/appconfigs`,
      pages: [
        {
          heading: "All appconfigs",
          route: `/${currentUser.role}/appconfigs`,
          svgIcon: "/svg/icons/abs015.svg",
          fontIcon: "bi-calendar3-event",
        },
        {
          heading: "Create appconfig",
          route: `/${currentUser.role}/appconfigs/create`,
          svgIcon: "/svg/icons/lay009.svg",
          fontIcon: "bi-calendar3-event",
        },
        {
          heading: "Import data",
          route: `/${currentUser.role}/appconfigs/import`,
          svgIcon: "/svg/files/upload.svg",
          fontIcon: "bi-calendar3-event",
        },
      ],
    },
    {
      heading: "products",
      route: `/${currentUser.role}/products`,
      pages: [
        {
          heading: "All products",
          route: `/${currentUser.role}/products`,
          svgIcon: "/svg/icons/abs015.svg",
          fontIcon: "bi-calendar3-event",
        },
        {
          heading: "Create product",
          route: `/${currentUser.role}/products/create`,
          svgIcon: "/svg/icons/lay009.svg",
          fontIcon: "bi-calendar3-event",
        },
        {
          heading: "Import data",
          route: `/${currentUser.role}/products/import`,
          svgIcon: "/svg/files/upload.svg",
          fontIcon: "bi-calendar3-event",
        },
      ],
    },

    {
      sectionTitle: "authentication",
      svgIcon: "svg/icons//teh004.svg",
      fontIcon: "bi-sticky",
      sub: [
        {
          sectionTitle: "basicFlow",
          sub: [
            {
              heading: "signIn",
              route: "/auth/sign-in",
            },
            {
              heading: "signUp",
              route: "/auth/sign-up",
            },
            {
              heading: "passwordReset",
              route: "/auth/password-reset",
            },
            {
              heading: "emailResetPassword",
              route: "/auth/email-reset-password",
            },
            {
              heading: "msgResetPassword",
              route: "/auth/msg-reset-password",
            },
          ],
        },
        {
          heading: "error404",
          route: "/404",
        },
      ],
    },
    {
      pages: [],
    },
  ]);
  return DocMenuConfig;
}
