---
id: "js-zh-syntax-web-javascript-reference-global_objects-symbol-search"
language: "js"
lang: "zh"
category: "syntax"
name: "Symbol.search"
title: "Symbol.search"
module: "reference\\global_objects\\symbol\\search\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.search

`Symbol.search` 指定了一个搜索方法，这个方法接受用户输入的正则表达式，返回该正则表达式在字符串中匹配到的下标，这个方法由以下的方法来调用 `String.prototype.search()`。

更多信息请参见 [`RegExp.prototype[Symbol.search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) 和 `String.prototype.search()`。

## 案例

### 自定义字符串搜索

```plain
class caseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

console.log('foobar'.search(new caseInsensitiveSearch('BaR')));
// expected output: 3
```

## 规范

## 浏览器兼容性

## 参见

- `Symbol.match`
- `Symbol.replace`
- `Symbol.split`
- [`RegExp.prototype[Symbol.search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
