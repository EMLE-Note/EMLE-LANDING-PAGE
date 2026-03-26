
// @ts-nocheck
import locale_C_58_C_58_Users_user_Desktop_main_land_emle_32landing_locales_en_json from "../locales/en.json";
import locale_C_58_C_58_Users_user_Desktop_main_land_emle_32landing_locales_ar_json from "../locales/ar.json";


export const localeCodes =  [
  "en",
  "ar"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.json", load: () => Promise.resolve(locale_C_58_C_58_Users_user_Desktop_main_land_emle_32landing_locales_en_json), cache: true }],
  "ar": [{ key: "../locales/ar.json", load: () => Promise.resolve(locale_C_58_C_58_Users_user_Desktop_main_land_emle_32landing_locales_ar_json), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "language": "en-US",
      "dir": "ltr",
      "files": [
        "C:/Users/user/Desktop/main-land/emle landing/locales/en.json"
      ]
    },
    {
      "code": "ar",
      "language": "ar-EG",
      "dir": "rtl",
      "files": [
        "C:/Users/user/Desktop/main-land/emle landing/locales/ar.json"
      ]
    }
  ],
  "defaultLocale": "ar",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": "locales",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "language": "en-US",
    "dir": "ltr",
    "files": [
      {
        "path": "C:/Users/user/Desktop/main-land/emle landing/locales/en.json"
      }
    ]
  },
  {
    "code": "ar",
    "language": "ar-EG",
    "dir": "rtl",
    "files": [
      {
        "path": "C:/Users/user/Desktop/main-land/emle landing/locales/ar.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
