import router from './router/router';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import components from './components/UI';
import VIntersection from './directives/VIntersection';
import directives from './directives';
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});
directives.forEach(directive=>{
  app.directive(directive.name, directive);
})


app.use(router).mount('#app');
