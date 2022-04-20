/*
 * @Author: fafa
 * @Date: 2022-04-14 11:11:38
 * @LastEditors: fafa
 * @LastEditTime: 2022-04-14 11:11:38
 * @Description:
 */
import { InterfaceResponse } from '@/server';
import { UploadFile } from 'antd/lib/upload/interface';

export type GylImageRes = InterfaceResponse<{
  fileName: string;
  size: number;
  url: string;
}>;

export type IFile = UploadFile<GylImageRes>;

export type ISize = {
  width: number;
  height: number;
};

export type SizeLimitProps = {
  maxSize: number;
  minSize: number;
  minImageSize: ISize;
  maxImageSize: ISize;
};

export type ExtraPreProps = {
  sizeProps?: SizeLimitProps;
  uploadType?: string[];
  [key: string]: any;
};
