import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {MotionPlugin} from '@vueuse/motion'


const app = createApp(App)

app.use(MotionPlugin, {
    directives: {
      'fade-up': {  
        initial: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 700,
                delay: 100,
            },
        }
      },
    },
  })
  
app.mount('#app')
