import React from 'react';
import { Button } from 'antd';
import { ActionModal } from '@yunti/web-ui';

const Demo = () => {
  const handleOk = (cb: () => void) => {
    console.log('ok');
    // 关闭弹窗回调
    cb();
  };
  return (
    <ActionModal
      btn={<Button>Open</Button>}
      modalProps={{ title: '测试弹窗', onOk: handleOk }}
    >
      弹窗内容
    </ActionModal>
  );
};

export default Demo;
