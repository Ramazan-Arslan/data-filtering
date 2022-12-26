import { Component, Vue, Watch } from 'vue-property-decorator';
import ShowDocuments from '@/components/ShowDocuments/ShowDocuments.vue';
import FilterQuery from '@/components/FilterQuery/FilterQuery.vue';
@Component({
  components: {
    ShowDocuments,
    FilterQuery,
  },
})
export default class HomeView extends Vue {
  public possibleFilterOptions: string[] = [];
  public selectedFilterOption = '';
  public selectedFilters: string[] = [];

  @Watch('selectedFilterOption') selectedFilterOptionChangeHandler() {
    this.selectedFilters.push(this.selectedFilterOption);
    const selectedFilterIndex = this.possibleFilterOptions.indexOf(this.selectedFilterOption);
    this.possibleFilterOptions.splice(selectedFilterIndex, 1);
  }

  protected filterOptionsHandler(filterOptions: string[]) {
    this.possibleFilterOptions = filterOptions;
  }

  protected deletedFilterHandler(deletedFilterName: string) {
    const deletedFilterIndex = this.selectedFilters.indexOf(deletedFilterName);
    this.selectedFilters.splice(deletedFilterIndex, 1);
    this.possibleFilterOptions.push(deletedFilterName);
  }
}
