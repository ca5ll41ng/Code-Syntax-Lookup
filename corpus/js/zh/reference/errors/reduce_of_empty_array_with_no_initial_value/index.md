---
id: "js-zh-syntax-web-javascript-reference-errors-reduce_of_empty_array_with_no_initial_value"
language: "js"
lang: "zh"
category: "syntax"
name: "TypeError: Reduce of empty array with no initial value"
title: "TypeError: Reduce of empty array with no initial value"
module: "reference\\errors\\reduce_of_empty_array_with_no_initial_value\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypeError: Reduce of empty array with no initial value

## 消息

```plain
TypeError: reduce of empty array with no initial value
```

## 错误类型

`TypeError`

## 哪里出问题了？

在 JavaScript 中，有一些 reduce 函数：

- `Array.prototype.reduce()`，`Array.prototype.reduceRight()` 和
- `TypedArray.prototype.reduce()`， `TypedArray.prototype.reduceRight()`)。

这些函数有选择性的接收 `initialValue` (将会被用作回调函数第一次被调用的参数)。然而，如果没有初始值提供，它会用 `Array` 或 `TypedArray` 的第一个元素作为初始值。当提供一个空数组的时候这个错误会出现，因为那种情况下没有初始值被返回。

## 示例

### 无效的情况

当和过滤器（`Array.prototype.filter()`、`TypedArray.prototype.filter()`）结合使用的时候，可能会出现列表中所有元素被移除的情况。因此导致初始值为空。

```js example-bad
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // removes all elements
  .reduce((x, y) => x + y); // no more elements to use for the initial value.
```

类似的，当选择器中有瑕疵的时候相同的问题会发生，或者是列表中未预期的数量的元素：

```js example-bad
var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(
  names,
  (acc, name) => acc + ", " + name,
);
```

### 有效的情况

这个问题有两种可能的解决办法：

一种是提供一个初始值作为操作符的中立元素，比如加法里的 0，乘法里的 1，或者是合并中的一个空字符串。

```js example-good
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x < 0) // removes all elements
  .reduce((x, y) => x + y, 0); // the initial value is the neutral element of the addition
```

另一种办法是两方处理空的情况，要么在调用 `reduce` 之前，或者是在添加一个未预料的初始虚拟址后的回调函数中：

```js example-good
var names = document.getElementsByClassName("names");

var name_list1 = "";
if (names1.length >= 1)
  name_list1 = Array.prototype.reduce.call(
    names,
    (acc, name) => acc + ", " + name,
  );
// name_list1 == "" when names is empty.

var name_list2 = Array.prototype.reduce.call(
  names,
  (acc, name) => {
    if (acc == "")
      // initial value
      return name;
    return acc + ", " + name;
  },
  "",
);
// name_list2 == "" when names is empty.
```

## 参见

- `Array.prototype.reduce()`
- `Array.prototype.reduceRight()`
- `TypedArray.prototype.reduce()`
- `TypedArray.prototype.reduceRight()`
- `Array`
- `TypedArray`
- `Array.prototype.filter()`
- `TypedArray.prototype.filter()`
