/*
 * @Author: fafa
 * @Date: 2022-04-13 19:33:47
 * @LastEditors: fafa
 * @LastEditTime: 2022-04-20 16:39:10
 * @Description: 供应链公共图片上传 直接用于Form子组件也可
 */

import React, { useState } from 'react';
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { SizeLimitProps, IFile, ExtraPreProps } from './type';
import { checkImageWH } from './rcUtil';
import { isEmpty } from 'lodash';

type Props = {
  /**上传地址 */
  actionUrl: string;
  uploadType?: string[];
  sizeProps?: SizeLimitProps;
  /**支持最多上传多少张图 */
  maxCount?: number;
  /**是否支持多选 */
  multiple?: boolean;
  fileList?: IFile[];
};

function getBase64(file?: File | Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    file && reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const ImageUpload = (props: Props) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const {
    maxCount = 1,
    multiple = false,
    fileList = [],
    sizeProps,
    uploadType,
    actionUrl,
  } = props;
  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const beforeUpload = (
    file: IFile,
    fileList: IFile[],
    { uploadType = [], sizeProps }: ExtraPreProps,
  ) => {
    let limitSize = true,
      fitUploadType = true;

    const fileSizeSum = fileList
      .map((item) => Number(item.size || 0))
      .reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

    const limitSumSize = fileSizeSum <= 1024 * 1024 * 1024 * 2;
    if (!limitSumSize) {
      message.destroy();
      message.error(`文件总大小上限为2GB!`);
    }

    if (sizeProps) {
      const { maxSize = 1, minSize, minImageSize, maxImageSize } = sizeProps;

      if (maxSize && file.size) {
        limitSize = file.size <= 1024 * 1024 * Number(maxSize);
        if (!limitSize) {
          message.destroy();
          message.error(`单个文件大小上限为${maxSize}MB!`);
        }
      }
      if (minSize && file.size) {
        limitSize = file.size >= 1024 * 1024 * Number(maxSize);
        if (!limitSize) {
          message.destroy();
          message.error(`单个文件大小最小为${maxSize}MB!`);
        }
      }

      if (
        maxImageSize &&
        minImageSize &&
        !isEmpty(maxImageSize) &&
        !isEmpty(minImageSize) &&
        maxImageSize.width === minImageSize.width &&
        maxImageSize.height === minImageSize.height
      ) {
        return checkImageWH(file, maxImageSize.width, maxImageSize.height, '=');
      } else {
        if (maxImageSize && !isEmpty(maxImageSize)) {
          const { width, height } = maxImageSize;
          return checkImageWH(file, width, height, '>');
        }

        if (minImageSize && !isEmpty(minImageSize)) {
          const { width, height } = minImageSize;
          return checkImageWH(file, width, height, '<');
        }
      }
    }
    if (uploadType) {
      const newUploadType: string[] = uploadType.filter((item) => !!item);
      const fileName = file.name.toLowerCase();
      const fileType: string = fileName
        .substring(fileName.lastIndexOf('.'), fileName.length)
        .replace('.', '');
      fitUploadType = newUploadType.includes(fileType);

      if (!fitUploadType) {
        message.destroy();
        message.error(`文件类型不匹配!`);
      }
    }
    const validRule = limitSize && limitSumSize && fitUploadType;
    if (!validRule) {
      return Upload.LIST_IGNORE;
    }

    return validRule || Upload.LIST_IGNORE;
  };

  const handlePreview = async (file: IFile) => {
    const { url = '', preview = '' } = file;
    if (!file.url && !file.preview) {
      file.preview = (await getBase64(file?.originFileObj)) as string;
    }

    setPreviewImage(url || preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || url.substring(url.lastIndexOf('/') + 1));
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>点击上传</div>
    </div>
  );

  return (
    <>
      <Upload
        name="file"
        listType="picture-card"
        withCredentials
        accept=".jpg,.jpeg,.png,.gif"
        multiple={multiple}
        beforeUpload={(file: IFile, fileList: IFile[]) =>
          beforeUpload(file, fileList, {
            sizeProps,
            uploadType: uploadType ?? ['jpg', 'jpeg', 'png', 'gif'],
          })
        }
        action={actionUrl}
        onPreview={handlePreview}
        {...props}
      >
        {fileList.length >= maxCount ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default ImageUpload;
