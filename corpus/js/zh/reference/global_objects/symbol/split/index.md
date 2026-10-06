---
id: "js-zh-syntax-web-javascript-reference-global_objects-symbol-split"
language: "js"
lang: "zh"
category: "syntax"
name: "Symbol.split"
title: "Symbol.split"
module: "reference\\global_objects\\symbol\\split\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.split

**`Symbol.split`** 指向一个正则表达式的索引处分割字符串的方法。这个方法通过 `String.prototype.split()` 调用。

详情请参阅 [`RegExp.prototype[Symbol.split]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) 和 `String.prototype.split()`。

`JavaScript Demo: Symbol.split`

```js interactive-example
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substring(0, index)}/${string.substring(
      index + this.value.length,
    )}`;
  }
}

console.log("foobar".split(new Split1("foo")));
// Expected output: "foo/bar"
```

## 值

内置通用符号 `Symbol.split`。

## 示例

### 自定义反向分割

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// [ "dust", "the", "bites", "one", "Another" ]
```

## 规范

## 浏览器兼容性

## 参阅

- [`core-js` 中 `Symbol.split` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-symbol)
- `Symbol.match`
- `Symbol.matchAll`
- `Symbol.replace`
- `Symbol.search`
- `String.prototype.split()`
- [`RegExp.prototype[Symbol.split]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
