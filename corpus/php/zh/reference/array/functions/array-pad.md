---
id: "zh-php-function-function-array-pad"
language: "php"
lang: "zh"
category: "function"
name: "array_pad"
title: "以指定长度将一个值填充进数组"
signature: "array array_pad(array $array, int $length, mixed $value)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-pad.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以指定长度将一个值填充进数组

## 说明

```php
array array_pad(array $array, int $length, mixed $value)
```

`array_pad()` 返回 `$array` 的一个拷贝，并用 `$value` 将其填补到 `$length` 指定的长度。如果 `$length` 为正，则填补到数组的右侧，如果为负则从左侧开始填补。如果 `$length` 的绝对值小于或等于 `$array` 数组的长度则没有任何填补。

## 参数

- **`$array`** — 需要被填充的原始数组。
- **`$length`** — 新数组的长度。
- **`$value`** — 将被填充的值，只有在 `$array` 的现有长度小于 `$length` 的长度时才有效。

## 返回值

返回 `$array` 用 `$value` 填充到 `$length` 指定的长度之后的一个副本。如果 `$length` 为正，则填补到数组的右侧，如果为负则从左侧开始填补。如果 `$length` 的绝对值小于或等于 `$array` 数组的长度则没有任何填补。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 在 8.3 版本之前，一次只能添加 1048576 个元素。 现在，它只受数组最大大小的限制。 |

## 示例

**`array_pad()` 例子**

```php


<?php
$input = array(12, 10, 9);

$result = array_pad($input, 5, 0);
// result 是 array(12, 10, 9, 0, 0)
echo join(', ', $result), PHP_EOL;

$result = array_pad($input, -7, -1);
// result 是 array(-1, -1, -1, -1, 12, 10, 9)
echo join(', ', $result), PHP_EOL;

$result = array_pad($input, 2, "noop");
// 没有填充
echo join(', ', $result), PHP_EOL;
?>

    
```

## 参见

`array_fill()` `range()`
