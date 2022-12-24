import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class HomeView extends Vue {
  protected mounted() {
    console.log('mounted');
  }
}
