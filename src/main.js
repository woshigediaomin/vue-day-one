//webpack 打包的入口
import { addFn } from "./add/add";
import { getArrSum } from "./tool/tool"

console.log(addFn(5, 3));
console.log(getArrSum([5,6,7,8]));