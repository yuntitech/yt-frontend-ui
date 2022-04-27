import React, { CSSProperties } from 'react';
import { ModalProps } from 'antd';

export interface ActionModalProps {
  /** visible切换时，change事件 */
  onVisibleChange?: (visible: boolean) => void;
  /** 每次显示弹窗时，初始化函数 */
  init?: () => void;
  /** 打开弹窗前校验，返回true打开弹窗，false阻止打开 */
  beforeShow?: () => boolean;
  /** 渲染打开弹窗的按钮或其他元素 */
  btn?: any;
  /** 原Modal组件参数，自定义了onOk */
  modalProps: Omit<ModalProps, 'onOk'> & {
    onOk?: (cb: () => void, e?: React.MouseEvent<HTMLElement>) => void;
  };
  /** ActionModal容器样式 */
  style?: CSSProperties;
}
