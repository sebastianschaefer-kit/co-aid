/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#4CAF50',
          secondary: '#455A64',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  defaults: {
    VBtn: {
      variant: 'tonal'
    },
    VCard: {
      variant: 'tonal'
    },
    VTabs: {
      variant: 'tonal'
    },
  }
})
