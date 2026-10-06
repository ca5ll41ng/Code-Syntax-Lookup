---
id: "js-zh-syntax-web-javascript-reference-global_objects-string-sup"
language: "js"
lang: "zh"
category: "syntax"
name: "String.prototype.sup"
title: "String.prototype.sup()"
module: "reference\\global_objects\\string\\sup\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/String/sup"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# String.prototype.sup()

`String` 值的 **`sup()`** 方法创建一个 `sup` 元素字符串，其中嵌入了调用的字符串（`<sup>str</sup>`）中，这会导致该字符串显示为上标。

> [!NOTE]
> 所有 [HTML 包装器方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法) 均已弃用，仅出于兼容性目的而进行标准化。请改用 [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)，例如 [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement)。

## 语法

```js-nolint
sup()
```

### 参数

无。

### 返回值

以 `<sup>` 开始标记开头的字符串，然后是文本 `str`，最后是 `</sup>` 结束标记。

## 示例

### 使用 sub() 和 sup() 方法

下面的示例使用了 `String.prototype.sub()` 和 `sup()` 方法来格式化字符串：

```js
const superText = "上标";
const subText = "下标";

console.log(`这就是${superText.sup()}的样子。`);
// "这就是<sup>上标</sup>的样子。"

console.log(`这就是${subText.sub()}的样子。`);
// "这就是<sub>下标</sub>的样子。"
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `String.prototype.sup` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- `String.prototype.sub()`
