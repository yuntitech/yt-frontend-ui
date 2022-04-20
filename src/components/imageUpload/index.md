---
title: ImageUpload
nav:
  title: 组件
  path: /components
group:
  title: 组件总览
  path: /components
  order: 1
---

## ImageUpload

图片上传组件，可以直接作为 Form 的子元素，支持添加上传规则，例如图片的大小，类型，尺寸等。触发相应的业务逻辑。

代码演示

```tsx
import React from 'react';
import { ImageUpload } from '@yunti/web-ui';
import { Space, Form } from 'antd';

const normFile = (e: any) => {
  let newFileList: any[] = [];
  if (Array.isArray(e)) {
    newFileList = e;
  } else {
    newFileList = e && e.fileList;
  }

  const dealFileList = newFileList.map((file) => {
    const { url, fileName, size } = file.response
      ? file.response.data
      : { url: file.url, fileName: '', size: 0 };
    return {
      status: file.status,
      uid: file.uid,
      name: fileName,
      size,
      url,
    };
  });

  return dealFileList;
};

export default () => (
  <Form>
    <Form.Item
      label="营业执照"
      getValueFromEvent={normFile}
      name="postCard"
      valuePropName="fileList"
    >
      <ImageUpload actionUrl="https://www.bookln.cn/comm/file/upload.do?v=2" />
    </Form.Item>
  </Form>
);
```

<API></API>
