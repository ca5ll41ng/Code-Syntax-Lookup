---
id: "zh-php-function-function-array-key-first"
language: "php"
lang: "zh"
category: "function"
name: "array_key_first"
title: "获取指定数组的第一个键"
signature: "int|string|null array_key_first(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-key-first.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取指定数组的第一个键

## 说明

```php
int|string|null array_key_first(array $array)
```

不影响到数组内部指针，取得指定数组的 `$array` 第一个键。

## 参数

- **`$array`** — 要操作的数组。

## 返回值

如果 `$array` 不是空的，返回第一个键，否则返回 `null`。

## 示例

**`array_key_first()` 基本用法**

```php


<?php
$array = ['a' => 1, 'b' => 2, 'c' => 3];

$firstKey = array_key_first($array);

var_dump($firstKey);
?>

    
```

以上示例会输出：

```text


string(1) "a"

    
```

## 注释

> 在 PHP 7.3.0 之前，有几种方式可以实现该功能。可以使用 `array_keys()` 函数，但是性能会比较低。也可以使用 `reset()` 和 `key()` 函数，但这可能会影响内部数组指针。实现该功能的 polyfill 写法如下:
>
> ```php <?php if (!function_exists('array_key_first')) { function array_key_first(array $arr) { foreach($arr as $key => $unused) { return $key; } return NULL; } } ?> ```

## 参见

 `array_first()` `array_key_last()` `reset()`
