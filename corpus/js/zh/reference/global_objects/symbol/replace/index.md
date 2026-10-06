---
id: "js-zh-syntax-web-javascript-reference-global_objects-symbol-replace"
language: "js"
lang: "zh"
category: "syntax"
name: "Symbol.replace"
title: "Symbol.replace"
module: "reference\\global_objects\\symbol\\replace\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.replace

**`Symbol.replace`** 这个属性指定了当一个字符串替换所匹配字符串时所调用的方法。`String.prototype.replace()` 方法会调用此方法。

更多信息，详见 [`RegExp.prototype[Symbol.replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) 和 `String.prototype.replace()`。

`JavaScript Demo: Symbol.replace`

```js interactive-example
class Replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`;
  }
}

console.log("foo".replace(new Replace1("bar")));
// Expected output: "s/foo/bar/g"
```

## 规范

## 浏览器兼容性

## 参见

- `Symbol.match`
- `Symbol.search`
- `Symbol.split`
- [`RegExp.prototype[Symbol.replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
