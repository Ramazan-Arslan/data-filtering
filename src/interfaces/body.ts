export interface Filter {
  device_operating_system: Operations;
}

export interface Operations {
  $eq: string;
  $ne: string;
  $qt: string;
  $lt: string;
}

export interface RequestBody {
  collection: string;
  database: string;
  dataSource: string;
  limit: number;
  skip: number;
  filter?: Filter;
}

export interface Pagination {
  page: number;
  itemsPerPage: number;
  pageStart: number;
  pageStop: number;
  pageCount: number;
  itemsLength: number;
}

export interface Header {
  text: string;
  value: string;
}
