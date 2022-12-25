import { Component, Vue } from 'vue-property-decorator';
import fetchData from '@/api/api';
import { RequestBody, Pagination, Header } from '@/interfaces/body';
import { TABLE } from '@/enums/Table';
@Component({})
export default class ShowDocuments extends Vue {
  public headers: Header[] = [];
  public items: any = [];
  private requestBody: RequestBody = {
    collection: 'analytics',
    database: 'juno',
    dataSource: 'Cluster0',
    limit: TABLE.MAX_ITEM_PER_PAGE,
    skip: 0,
  };

  protected async mounted() {
    await this.findMultipleDocuments();
  }

  protected async checkPageNumber(paginationValue: Pagination) {
    if (paginationValue.page * paginationValue.itemsPerPage === paginationValue.itemsLength) {
      this.requestBody.skip = paginationValue.pageStop / TABLE.MAX_ITEM_PER_PAGE;
      await this.findMultipleDocuments();
    }
  }

  private createTableHeaders(headers: string[]) {
    for (let i = 0; i < headers.length; i++) {
      const headerTitles: Header = {
        text: '',
        value: '',
      };
      headerTitles.text = headers[i];
      headerTitles.value = headers[i];
      this.headers.push(headerTitles);
    }
  }

  private createTableContents(rows: object[]) {
    for (let i = 0; i < rows.length; i++) {
      this.items.push(rows[i]);
    }
  }

  private async findMultipleDocuments() {
    const response = await fetchData(this.requestBody);
    const headers = Object.keys(response.documents[0]);
    this.createTableHeaders(headers);
    this.createTableContents(response.documents);
  }
}
