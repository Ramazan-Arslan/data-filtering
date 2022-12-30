import { Filter, Operations } from '@/interfaces/body';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class FilterQuery extends Vue {
  @Prop() public filterName!: string;
  public filterConditions: string[] = ['$eq', '$ne', '$qt', '$lt'];
  public selectedFilterCondition = '';
  public filterInput = '';
  protected filterQuery: Filter = {};
  protected filterCondition: Operations = {};

  @Watch('filterInput') filterInputChangeHandler() {
    if (this.selectedFilterCondition.length > 0) {
      if (this.filterName === 'event_date') {
        const date = { $date: this.filterInput };
        this.filterCondition[this.selectedFilterCondition] = date;
      } else {
        this.filterCondition[this.selectedFilterCondition] = this.filterInput;
      }

      this.filterQuery[this.filterName] = this.filterCondition;
      this.$emit('filter-query', this.filterQuery);
    }
  }
  public removeFilter(): void {
    this.$emit('delete-selected-filter', this.filterName);
  }
}
