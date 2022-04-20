import { SizeLimitProps, IFile } from './type';
declare type Props = {
    /**上传地址 */
    actionUrl: string;
    uploadType?: string[];
    sizeProps?: SizeLimitProps;
    /**支持最多上传多少张图 */
    maxCount?: number;
    /**是否支持多选 */
    multiple?: boolean;
    fileList?: IFile[];
};
declare const ImageUpload: (props: Props) => JSX.Element;
export default ImageUpload;
