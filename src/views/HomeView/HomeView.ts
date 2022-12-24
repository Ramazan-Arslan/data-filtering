import { Component, Vue } from 'vue-property-decorator';
import ShowDocuments from '@/components/ShowDocuments/ShowDocuments.vue';
@Component({
  components: {
    ShowDocuments,
  },
})
export default class HomeView extends Vue {
  protected mounted() {
    console.log('mounted');
  }
}
