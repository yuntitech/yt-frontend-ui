---
nav:
  title: Components
  path: /components
---

## ActionModal

Demo:

```tsx
import React from 'react';
import { ActionModal } from '@yunti-private/yt-frontend-ui';
import { Button } from 'antd';

export default () => (
  <ActionModal
    btn={<Button type="primary">导入</Button>}
    modalProps={{
      title: '导入',
      destroyOnClose: true,
    }}
  >
    <h2>你好 测试中</h2>
  </ActionModal>
);
```
