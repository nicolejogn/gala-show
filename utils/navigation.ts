import {routeConstants} from "@/constants/route";


import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";


export const navigateTo = (navigate: AppRouterInstance) => () => {
  navigate.push(routeConstants.SIGN_UP)

}
