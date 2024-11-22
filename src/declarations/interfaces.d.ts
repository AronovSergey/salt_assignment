export interface IApi {
  id: number;
  name: string;
  api: string;
}

export interface IPath {
  id: number;
  name: string;
  path: string;
}

export interface IRouteItem {
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
}

export interface IRoute {
  api: string;
  method: string;
  path: string;
  request: {
    urlParams: IRouteItem[];
    queryParams: IRouteItem[];
    headers: IRouteItem[];
    body: IRouteItem[];
  };
  response: {
    headers: IRouteItem[];
    body: IRouteItem[];
  };
}

export interface IBreadcrumb {
  label: string;
  url: string;
  disableClick?: boolean;
}

export interface IListColumnInfo<T> {
  width: number;
  title: string;
  view: (item: T) => JSX.Element;
}

export interface IListGroupedColumnInfo<T> {
  width: number;
  groupNames: { label: string; dataPropertyKey: string }[];
  columns: IListColumnInfo<T>[];
}

export interface IFilters {
  search: string;
  showPiiOnly: boolean;
}
