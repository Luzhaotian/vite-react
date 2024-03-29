/**
 * @description: 随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @return {number} 返回随机数
 */
export const randomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
