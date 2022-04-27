import React, { Component, ReactNode } from 'react';
import type { MouseEvent } from 'react';
import type { ModalProps } from 'antd';
import type { ActionModalProps } from './type';
export type { ModalProps };
interface IState {
    visible: boolean;
}
declare class ActionModal extends Component<ActionModalProps, IState> {
    constructor(props: ActionModalProps);
    changeVisible: (bool: boolean) => void;
    btnClick: () => void;
    handleOk: (e: React.MouseEvent<HTMLElement>) => void;
    handleCancel: (e: MouseEvent<HTMLElement>) => void;
    renderInternalButton: () => JSX.Element | null;
    renderFooter: () => {
        footer?: ReactNode;
    };
    render(): JSX.Element;
}
export default ActionModal;
