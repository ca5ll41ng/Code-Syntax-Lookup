---
id: "zh-php-function-function-array-find-key"
language: "php"
lang: "zh"
category: "function"
name: "array_find_key"
title: "返回满足回调函数条件的第一个元素的键"
signature: "mixed array_find_key(array $array, callable $callback)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-find-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回满足回调函数条件的第一个元素的键

## 说明

```php
mixed array_find_key(array $array, callable $callback)
```

`array_find_key()` 返回 `array` 中第一个使指定 `$callback` 返回 `true` 的元素的键。如果未找到匹配元素，则该函数返回 `null`。

## 参数

- **`$array`** — 需要被遍历的 `array`。
- **`$callback`** — 用于检查每个元素的回调函数，该函数必须 `bool``{callback}()` `mixed``$value` `mixed``$key` 如果该函数返回 `true`，`array_find_key()` 就会返回对应键名，并且不再对后续元素执行该回调函数。

## 返回值

该函数会返回首个使 `$callback` 返回 `true` 的元素的键。如果未找到匹配的元素，则函数返回 `null`。

## 示例

**`array_find_key()` 示例**

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
var_dump(array_find_key($array, function (string $value) {
    return strlen($value) > 4;
}));

// Find the first animal whose name begins with f.
var_dump(array_find_key($array, function (string $value) {
    return str_starts_with($value, 'f');
}));

// Find the first animal where the array key is the first symbol of the animal.
var_dump(array_find_key($array, function (string $value, $key) {
   return $value[0] === $key;
}));

// Find the first animal where the array key matching a RegEx.
var_dump(array_find_key($array, function ($value, $key) {
   return preg_match('/^([a-f])$/', $key);
}));
?>

   
```

以上示例会输出：

```text


string(1) "e"
NULL
string(1) "c"
string(1) "a"

   
```

## 参见

 `array_find()` `array_all()` `array_any()` `array_filter()` `array_reduce()`
