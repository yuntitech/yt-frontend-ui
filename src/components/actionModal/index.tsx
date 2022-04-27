import React, { Component, ReactNode } from 'react';
import type { MouseEvent } from 'react';
import { Button, Modal } from 'antd';
import type { ModalProps } from 'antd';
import type { ActionModalProps } from './type';

export type { ModalProps };

interface IState {
  visible: boolean;
}

class ActionModal extends Component<ActionModalProps, IState> {
  constructor(props: ActionModalProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  changeVisible = (bool: boolean) => {
    const { onVisibleChange, init } = this.props;
    this.setState(
      {
        visible: bool,
      },
      () => {
        onVisibleChange?.(bool);
      },
    );
    // 执行初始化条件
    bool && init?.();
  };

  btnClick = () => {
    const {
      btn: { onClick = () => true },
    } = this.props;
    try {
      onClick?.();
      (this.props?.beforeShow?.() ?? true) && this.changeVisible(true);
    } catch (err) {
      console.error(err);
    }
  };

  handleOk = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { onOk } = this.props.modalProps;
    if (onOk) {
      onOk(() => this.changeVisible(false));
    } else {
      this.changeVisible(false);
    }
  };

  handleCancel = (e: MouseEvent<HTMLElement>) => {
    const { onCancel } = this.props.modalProps;
    onCancel?.(e);
    this.changeVisible(false);
  };

  renderInternalButton = () => {
    const { btn } = this.props;
    const btnNode = btn?.title || btn;
    return btnNode ? (
      <Button type="primary" onClick={this.btnClick}>
        {btnNode}
      </Button>
    ) : null;
  };

  renderFooter = () => {
    const { footer } = this.props.modalProps;
    const result: { footer?: ReactNode } = {};
    if (footer === null) {
      result.footer = null;
    } else if (footer === undefined) {
      result.footer = undefined;
    } else if (typeof footer === 'function') {
      result.footer = footer(this.handleCancel, this.handleOk);
    } else {
      result.footer = footer;
    }
    return result as { footer: ReactNode | undefined };
  };

  render() {
    const { btn, children, modalProps, style = {} } = this.props;
    const { visible } = this.state;

    return (
      <span style={{ ...style }}>
        {btn && btn.$$typeof ? (
          <span onClick={!btn.props.disabled ? this.btnClick : undefined}>
            {btn}
          </span>
        ) : (
          this.renderInternalButton()
        )}
        <Modal
          visible={visible}
          {...modalProps}
          {...this.renderFooter()}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {children}
        </Modal>
      </span>
    );
  }
}

export default ActionModal;
