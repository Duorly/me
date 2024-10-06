// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    modules: [
        '@nuxt/devtools',
        '@nuxt/ui',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate',
        '@nuxt/image',
        '@nuxt/fonts'
    ],
    devtools: {
        enabled: true
    },
    fonts: {
        provider: 'google'
    },
    tailwindcss:{
        
    }
})