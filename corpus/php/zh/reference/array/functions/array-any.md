---
id: "zh-php-function-function-array-any"
language: "php"
lang: "zh"
category: "function"
name: "array_any"
title: "检查数组中是否至少有一个元素满足回调函数的条件"
signature: "bool array_any(array $array, callable $callback)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-any.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查数组中是否至少有一个元素满足回调函数的条件

## 说明

```php
bool array_any(array $array, callable $callback)
```

如果指定的 `$callback` 对任意一个元素返回 `true`，则 `array_any()` 函数返回 `true`；否则该函数返回 `false`。

## 参数

- **`$array`** — 需要被遍历的 `array`。
- **`$callback`** — 用于检查每个元素的回调函数，该函数必须 `bool``{callback}()` `mixed``$value` `mixed``$key` 如果该函数返回 `true`，则 `array_any()` 会立即返回 `true`，并且不会再为后续元素调用该回调函数。

## 返回值

如果数组中至少存在一个元素能让 `$callback` 返回 `true`，则该函数返回 `true`；否则返回 `false`。

## 示例

**`array_any()` 示例**

```php


<?php
$array = [
    'a' => 'dog',
    'b' => 'cat',
    'c' => 'cow',
    'd' => 'duck',
    'e' => 'goose',
    'f' => 'elephant'
];

// Check, if any animal name is longer than 5 letters.
var_dump(array_any($array, function (string $value) {
    return strlen($value) > 5;
}));

// Check, if any animal name is shorter than 3 letters.
var_dump(array_any($array, function (string $value) {
    return strlen($value) < 3;
}));

// Check, if any array key is not a string.
var_dump(array_any($array, function (string $value, $key) {
   return !is_string($key);
}));
?>

   
```

以上示例会输出：

```text


bool(true)
bool(false)
bool(false)

   
```

## 参见

 `array_all()` `array_filter()` `array_find()` `array_find_key()`
