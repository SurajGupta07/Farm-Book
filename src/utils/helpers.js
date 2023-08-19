export function throttleShoot(fn, l) {
  let flag = true;
  let mycontext = this,
    args = arguments;
  return function () {
    if (flag) {
      fn.apply(mycontext, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, l);
    }
  };
}
