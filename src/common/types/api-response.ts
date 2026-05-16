export interface ApiSuccessResponse<TData> {
  success: true;
  data: TData;
}

export interface ApiMessageResponse {
  success: true;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  details?: unknown;
}
