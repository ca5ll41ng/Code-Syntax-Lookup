---
id: "zh-php-function-function-array-chunk"
language: "php"
lang: "zh"
category: "function"
name: "array_chunk"
title: "将一个数组分割成多个"
signature: "array array_chunk(array $array, int $length, bool $preserve_keys = false)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-chunk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将一个数组分割成多个

## 说明

```php
array array_chunk(array $array, int $length, bool $preserve_keys = false)
```

将一个数组分割成多个数组，其中每个数组的单元数目由 `$length` 决定。最后一个数组的单元数目可能会少于 `$length` 个。

## 参数

- **`$array`** — 需要操作的数组
- **`$length`** — 每个数组的单元数目
- **`$preserve_keys`** — 设为 `true`，可以使 PHP 保留输入数组中原来的键名。如果你指定了 `false`，那每个结果数组将用从零开始的新数字索引。默认值是 `false`。

## 返回值

得到的数组是一个多维数组中的单元，其索引从零开始，每一维包含了 `$length` 个元素。

## 错误／异常

如果 `$length` 小于 `1`，会抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$length` 小于 `1`，现在会抛出 `ValueError`；之前会引发 `E_WARNING` 级别的错误且函数会返回 `null`。 |

## 示例

**`array_chunk()` 例子**

```php


<?php
$input_array = array('a', 'b', 'c', 'd', 'e');
print_r(array_chunk($input_array, 2));
print_r(array_chunk($input_array, 2, true));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => Array
        (
            [0] => a
            [1] => b
        )

    [1] => Array
        (
            [0] => c
            [1] => d
        )

    [2] => Array
        (
            [0] => e
        )

)
Array
(
    [0] => Array
        (
            [0] => a
            [1] => b
        )

    [1] => Array
        (
            [2] => c
            [3] => d
        )

    [2] => Array
        (
            [4] => e
        )

)

    
```

## 参见

`array_slice()`
