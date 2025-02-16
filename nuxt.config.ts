// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ["nuxt-server-utils", "@nuxtjs/tailwindcss", "nuxt-mdi", "@nuxtjs/supabase", "@nuxt/image"],
  nitro: {
    experimental: {
      database: true
    }
  },
  supabase: {
    url: process.env.NODE_ENV.SUPABASE_URL,
    key: process.env.NODE_ENV.SUPABASE_KEY,
    database: 'cars-db',
    schema: 'public',
    redirect: false,
  }
})
