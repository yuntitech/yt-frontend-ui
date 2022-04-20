/*
 * @Author: fafa
 * @Date: 2022-04-14 11:08:06
 * @LastEditors: fafa
 * @LastEditTime: 2022-04-14 11:09:08
 * @Description:
 */
import { message } from 'antd';

// 返回一个promise  检测通过返回resolve  失败返回reject阻止图片上传
export function checkImageWH(
  file: any,
  width: number,
  height: number,
  type: string,
) {
  return new Promise<void>(function (resolve, reject) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const src = e.target?.result;
      const image = new Image();
      image.onload = function () {
        const actionMap: {
          [key: string]: { express: boolean; title: string };
        } = {
          '=': {
            express: image.width != width && image.height != height,
            title: `请上传宽为${width}，高为${height}的图片`,
          },
          '>': {
            express: image.width > width && image.height > height,
            title: `请上传宽小于${width}，高小于${height}的图片`,
          },
          '<': {
            express: image.width < width && image.height < height,
            title: `请上传宽大于${width}，高大于${height}的图片`,
          },
        };

        // 上传图片的宽高与传递过来的限制宽高作比较，超过限制则调用失败回调
        if (actionMap[type].express) {
          message.destroy();
          message.error(actionMap[type].title, 2);
          reject();
        } else {
          resolve();
        }
      };
      image.onerror = reject;
      image.src = src as string;
    };
    fileReader.readAsDataURL(file);
  });
}
