export type Action = { type: string, payload: any }
  | { type: string, payload: Error, error: true };

export type ImageDescriptor = {
  fileName: string,
  imagePath: string,
  pageNo: number
};
