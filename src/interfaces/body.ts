export interface Document {
  event_data: string;
  event_name: string;
  event_params_key: string;
  user_properties_value_string_value: string;
  device_operating_system: string;
  app_info_version: string;
  event_date: string;
  geo_country: string;
  geo_city: string;
  user_pseudo_id: string;
  _id?: string;
}

export interface x {
  [key: string]: Filter;
}
export interface Filter {
  [key: string]: Operations;
}

export interface Operations {
  [key: string]: string;
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
