import { Component } from 'react';
import type { MouseEvent, CSSProperties } from 'react';
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
declare class ActionModal extends Component<IProps, IState> {
    constructor(props: IProps);
    changeVisible: (bool: boolean) => void;
    btnClick: () => void;
    handleOk: (e: {
        preventDefault: () => void;
    }) => void;
    handleCancel: (e: MouseEvent<HTMLElement>) => void;
    renderFooter: () => any;
    render(): JSX.Element;
}
export default ActionModal;
