'use client'

import {routeConstants} from "@/constants/route";

import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";


export const navigateTo = (navigate: AppRouterInstance) => () => {
  navigate.push(routeConstants.SIGN_IN)
}


export const getResponseRoute = (router: AppRouterInstance, type: 'email' | '2fa' | 'all') => {
  const navigationMapper = {
    'email': routeConstants.VERIFY_EMAIL,
    '2fa': routeConstants.TWO_FA,
  }

  if (type === 'all') {
    window.location.assign('https://games.gala.com/')
    return
  }

  router.push(navigationMapper[type as 'email' | '2fa'])
}
