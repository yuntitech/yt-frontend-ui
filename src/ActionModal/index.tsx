import React, { Component } from 'react';
import type { MouseEvent, CSSProperties } from 'react';
import { Button, Modal } from 'antd';
import type { ModalProps } from 'antd';

export type { ModalProps };
interface IProps {
  onVisibleChange?: (visible: boolean) => void;
  init?: () => void;
  beforeShow?: () => boolean;
  btn?: any;
  modalProps: ModalProps;
  style?: CSSProperties;
}

interface IState {
  visible: boolean;
}

class ActionModal extends Component<IProps, IState> {
  constructor(props: IProps) {
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
      btn: { onClick },
    } = this.props;
    try {
      onClick?.();
      (this.props?.beforeShow?.() ?? true) && this.changeVisible(true);
    } catch (err) {
      console.error(err);
    }
  };

  handleOk = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { onOk } = this.props.modalProps;
    if (onOk) {
      (onOk as any)(() => this.changeVisible(false));
    } else {
      this.changeVisible(false);
    }
  };

  handleCancel = (e: MouseEvent<HTMLElement>) => {
    const { onCancel } = this.props.modalProps;
    onCancel?.(e);
    this.changeVisible(false);
  };

  renderFooter = () => {
    const { footer } = this.props.modalProps;
    let result: any = {};
    if (footer === null) {
      result.footer = null;
    } else if (footer === undefined) {
      result.footer = undefined;
    } else if (typeof footer === 'function') {
      result.footer = footer(this.handleCancel, this.handleOk);
    } else {
      result.footer = footer;
    }
    return result;
  };

  render() {
    const { btn, children, modalProps, style } = this.props;
    const { visible } = this.state;

    return (
      <span style={{ ...style }}>
        {btn && btn.$$typeof ? (
          <span onClick={!btn.props.disabled ? this.btnClick : undefined}>{btn}</span>
        ) : (
          <Button ghost={true} type="primary" onClick={this.btnClick}>
            {btn.title || btn}
          </Button>
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
