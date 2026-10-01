---
id: "zh-php-function-function-array-find"
language: "php"
lang: "zh"
category: "function"
name: "array_find"
title: "返回满足回调函数条件的第一个元素"
signature: "mixed array_find(array $array, callable $callback)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-find.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回满足回调函数条件的第一个元素

## 说明

```php
mixed array_find(array $array, callable $callback)
```

`array_find()` 返回 `array` 中第一个使指定 `$callback` 返回 `true` 的元素的值。如果未找到匹配的元素，则该函数返回 `null`。

## 参数

- **`$array`** — 需要被遍历的 `array`。
- **`$callback`** — 用于检查每个元素的回调函数，该函数必须 `bool``{callback}()` `mixed``$value` `mixed``$key` 如果该回调函数返回 `true`，`array_find()` 就会返回对应元素的值，并且不再对后续元素执行该回调。

## 返回值

该函数返回第一个使 `$callback` 返回 `true` 的元素的值。如果未找到匹配的元素，则函数返回 `null`。

## 示例

**`array_find()` 示例**

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

// Find the first animal with a name longer than 4 characters.
var_dump(array_find($array, function (string $value) {
    return strlen($value) > 4;
}));

// Find the first animal whose name begins with f.
var_dump(array_find($array, function (string $value) {
    return str_starts_with($value, 'f');
}));

// Find the first animal where the array key is the first symbol of the animal.
var_dump(array_find($array, function (string $value, $key) {
   return $value[0] === $key;
}));

// Find the first animal where the array key matching a RegEx.
var_dump(array_find($array, function ($value, $key) {
   return preg_match('/^([a-f])$/', $key);
}));
?>

   
```

以上示例会输出：

```text


string(5) "goose"
NULL
string(3) "cow"
string(3) "dog"

   
```

## 参见

 `array_find_key()` `array_all()` `array_any()` `array_filter()` `array_reduce()`
