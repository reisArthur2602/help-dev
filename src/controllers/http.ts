export type HttpResponse<T> = {
  statusCode: number;
  body: T;
};

export type HttpRequest<B> = {
  params?: any;
  query?: any;
  headers?: any;
  body?: B;
  userId?: string;
};
