import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRotateLeft,
  faArrowRotateRight,
  faFaceSmile,
  faBold,
  faItalic,
  faStrikethrough,
  faCode,
  faLink,
  faCopy,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faArrowRotateLeft,
  faArrowRotateRight,
  faFaceSmile,
  faBold,
  faItalic,
  faStrikethrough,
  faCode,
  faLink,
  faCopy,
  faTrash,
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
