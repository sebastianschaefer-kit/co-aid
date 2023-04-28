/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export function registerPlugins (app) {
  loadFonts()
  pinia.use(piniaPluginPersistedstate)
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
