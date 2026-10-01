---
id: "zh-php-function-function-array-fill"
language: "php"
lang: "zh"
category: "function"
name: "array_fill"
title: "用给定的值填充数组"
signature: "array array_fill(int $start_index, int $count, mixed $value)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-fill.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用给定的值填充数组

## 说明

```php
array array_fill(int $start_index, int $count, mixed $value)
```

用 `$value` 参数的值填充 `$count` 个元素到数组， 开始键名由 `$start_index` 参数指定。

## 参数

- **`$start_index`** — 返回的数组的第一个索引值。 — 如果 `$start_index` 是负数，在 PHP 8.0.0 之前，返回的数组的第一个索引是 `$start_index`， 而后面索引则从 0 开始；自 PHP 8.0.0 起， 负数键将会正常递增。（参见 例子）
- **`$count`** — 要插入元素的数量。必须大于或等于 0 且小于或等于 `2147483647`。
- **`$value`** — 用来填充的值。

## 返回值

返回填充后的数组。

## 错误／异常

如果 `$count` 超出范围，将会抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `array_fill()` 的 `$count` 超出范围现在将会抛出 `ValueError`， 之前会引发 `E_WARNING` 且函数返回 `false`。 |

## 示例

**`array_fill()` 示例**

```php


<?php
$a = array_fill(5, 6, 'banana');
print_r($a);
?>

    
```

以上示例会输出：

```text


Array
(
    [5]  => banana
    [6]  => banana
    [7]  => banana
    [8]  => banana
    [9]  => banana
    [10] => banana
)

    
```

**开始索引为负数的 `array_fill()` 示例**

```php


<?php
$a = array_fill(-2, 4, 'pear');
print_r($a);
?>

    
```

以上示例在 PHP 8 中的输出：

```text


Array
(
    [-2] => pear
    [-1] => pear
    [0] => pear
    [1] => pear
)

    
```

以上示例在 PHP 7 中的输出：

```text


Array
(
    [-2] => pear
    [0] => pear
    [1] => pear
    [2] => pear
)

    
```

注意 索引 `-1` 在 PHP 8.0.0 之前不存在。

## 注释

参见手册上数组一节里关于负数的键的详细解释。

## 参见

`array_fill_keys()` `str_repeat()` `range()`
