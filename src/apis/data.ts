import { IApi, IPath, IRoute } from '../declarations/interfaces';

export const apis: IApi[] = [
  {
    id: 1,
    name: 'news',
    api: 'https://api.news.com',
  },
];

export const paths: IPath[] = [
  {
    id: 1,
    name: 'v1/news',
    path: '/v1/news/{category}',
  },
];

export const routes: IRoute[] = [
  {
    api: 'api.news.com',
    method: 'get',
    path: '/v1/news/{category}',
    request: {
      urlParams: [
        {
          name: 'category',
          pii: false,
          masked: false,
          type: 'string',
        },
      ],
      queryParams: [
        {
          name: 'page',
          pii: false,
          masked: false,
          type: 'integer',
        },
        {
          name: 'page_size',
          pii: false,
          masked: false,
          type: 'integer',
        },
        {
          name: 'from_date',
          pii: false,
          masked: false,
          type: 'date',
        },
        {
          name: 'to_date',
          pii: false,
          masked: false,
          type: 'date',
        },
      ],
      headers: [
        {
          name: 'token',
          pii: true,
          masked: true,
          type: 'string',
        },
        {
          name: 'cookie',
          pii: true,
          masked: false,
          type: 'string',
        },
      ],
      body: [],
    },
    response: {
      headers: [
        {
          name: 'cookie',
          pii: true,
          masked: false,
          type: 'string',
        },
      ],
      body: [
        {
          name: 'news_items',
          pii: false,
          masked: false,
          type: 'array',
        },
        {
          name: 'page',
          pii: false,
          masked: false,
          type: 'integer',
        },
        {
          name: 'page_size',
          pii: false,
          masked: false,
          type: 'integer',
        },
      ],
    },
  },
];
