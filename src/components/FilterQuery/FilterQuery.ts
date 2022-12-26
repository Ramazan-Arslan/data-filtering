import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class FilterQuery extends Vue {
  @Prop() public filterName!: string;
  public filterConditions: string[] = ['$eq', '$ne', '$qt', '$lt'];
  public selectedFilterCondition = '';
  public filterInput = '';

  public removeFilter(): void {
    console.log('removeFilter');
  }
}
