import VueRouter from 'vue-router'
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>;
  export default Vue
}
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}
