import React from 'react';
import './index.less';
declare type ButtonHTMLType = 'submit' | 'button' | 'reset';
declare const ButtonTypes: [
    'default',
    'primary',
    'ghost',
    'dashed',
    'link',
    'text'
];
export declare type ButtonType = typeof ButtonTypes[number];
interface IABSButtonProps {
    /**设置按钮载入状态 */
    loading?: boolean;
    /**
     * 设置危险按钮
     * @default false
     */
    danger?: boolean;
    className?: string;
    /**按钮类型 */
    type?: ButtonType;
    style?: React.CSSProperties;
    /**设置按钮的图标组件 */
    icon?: React.ReactNode;
    children?: React.ReactNode;
    /**
     * 按钮失效状态
     * @default false
     */
    disabled?: boolean;
    block?: boolean;
    large?: boolean;
    htmlType?: ButtonHTMLType;
    /**按钮颜色 */
    color?: 'blue' | 'red' | 'yellow' | 'green' | 'white';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Button: React.FC<IABSButtonProps>;
export default Button;
