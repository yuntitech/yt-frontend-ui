import '@testing-library/jest-dom';
import React from 'react';
import { Button } from 'antd';
import { render, screen } from '@testing-library/react';
import ActionModal from './index';

describe('<ActionModal />', () => {
  it('render ActionModal with dumi', () => {
    const msg = 'dumi';

    render(
      <ActionModal
        btn={<Button type="primary">导入</Button>}
        modalProps={{
          title: '导入',
          destroyOnClose: true,
        }}
      />,
    );
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
