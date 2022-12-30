import { Component, Vue, Watch } from 'vue-property-decorator';
import ShowDocuments from '@/components/ShowDocuments/ShowDocuments.vue';
import FilterQuery from '@/components/FilterQuery/FilterQuery.vue';
import { Filter } from '@/interfaces/body';
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
  public filter: Filter = {};
  public showQueryButton = false;

  @Watch('selectedFilterOption') selectedFilterOptionChangeHandler() {
    this.selectedFilters.push(this.selectedFilterOption);
    const selectedFilterIndex = this.possibleFilterOptions.indexOf(this.selectedFilterOption);
    this.possibleFilterOptions.splice(selectedFilterIndex, 1);
  }

  protected filterQueryHandler(filterQuery: Filter) {
    this.filter = Object.assign(this.filter, filterQuery);
    this.checkFilterSize();
  }

  protected filterOptionsHandler(filterOptions: string[]) {
    this.possibleFilterOptions = filterOptions;
  }

  protected deletedFilterHandler(deletedFilterName: string) {
    const deletedFilterIndex = this.selectedFilters.indexOf(deletedFilterName);
    this.selectedFilters.splice(deletedFilterIndex, 1);
    delete this.filter[deletedFilterName];
    this.possibleFilterOptions.push(deletedFilterName);
    this.checkFilterSize();
  }

  protected checkFilterSize() {
    this.showQueryButton = Object.keys(this.filter).length > 0 ? true : false;
  }
}
