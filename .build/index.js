var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  range: () => range
});
function range(start, end, inc = 1) {
  let range2 = [];
  inc = Math.abs(inc);
  console.log(inc);
  if (start < end) {
    for (let i = start; i < end; i += inc)
      range2.push(i);
  } else {
    for (let i = start; i > end; i -= inc)
      range2.push(i);
  }
  return range2;
}
const r = range(0, 5);
const rr = range(4, 1);
const rrr = range(0, 10, 2);
const rrrr = range(5, 5);
console.log(r, rr, rrr, rrrr);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  range
});
//# sourceMappingURL=index.js.map
