---
id: "zh-php-function-function-array-all"
language: "php"
lang: "zh"
category: "function"
name: "array_all"
title: "检查数组所有元素是否都满足回调函数的条件"
signature: "bool array_all(array $array, callable $callback)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查数组所有元素是否都满足回调函数的条件

## 说明

```php
bool array_all(array $array, callable $callback)
```

当 `$callback` 对全部元素均返回 `true` 时，`array_all()` 返回 `true`，否则返回 `false`。

## 参数

- **`$array`** — 需要被遍历的 `array`。
- **`$callback`** — 用于检查每个元素的回调函数，该函数必须 `bool``{callback}()` `mixed``$value` `mixed``$key` 如果该回调函数返回 `false`，则 `array_all()` 会立即返回 `false`，并且不会再对后续元素执行该回调。

## 返回值

如果 `$callback` 对所有元素都返回 `true`，则该函数返回 `true`；否则返回 `false`。

## 示例

**`array_all()` 示例**

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

// Check, if all animal names are shorter than 12 letters.
var_dump(array_all($array, function (string $value) {
    return strlen($value) < 12;
}));

// Check, if all animal names are longer than 5 letters.
var_dump(array_all($array, function (string $value) {
    return strlen($value) > 5;
}));

// Check, if all array keys are strings.
var_dump(array_all($array, function (string $value, $key) {
   return is_string($key);
}));
?>

   
```

以上示例会输出：

```text


bool(true)
bool(false)
bool(true)

   
```

## 参见

 `array_any()` `array_filter()` `array_find()` `array_find_key()`
