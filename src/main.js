import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import './router/filter';
import ElementUI from 'element-ui';
import common from './common/common';
import store from './store/AppStore';
import VueWechatTitle from 'vue-wechat-title';
import 'element-ui/lib/theme-chalk/index.css';
import vueFilter from 'vue-filter';
import QuillEditor from 'vue-quill-editor';
import 'font-awesome/css/font-awesome.min.css';
import go from 'gojs';


Vue.use(go);
Vue.use(VueWechatTitle);
Vue.use(ElementUI);
Vue.use(QuillEditor);
Vue.use(common);
Vue.use(vueFilter);

Vue.config.productionTip = false;

var app = new Vue({
  el: '#app',
  router,
  store,
  data (){
    return {
      loading: false
    }
  },
  render: h => h(App)
});

export { app };
