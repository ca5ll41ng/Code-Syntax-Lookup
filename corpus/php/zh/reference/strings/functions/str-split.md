---
id: "zh-php-function-function-str-split"
language: "php"
lang: "zh"
category: "function"
name: "str_split"
title: "将字符串转换为数组"
signature: "array str_split(string $string, int $length = 1)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-split.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串转换为数组

## 说明

```php
array str_split(string $string, int $length = 1)
```

将一个字符串转换为数组。

## 参数

- **`$string`** — 输入字符串。
- **`$length`** — 每一段的长度。

## 返回值

如果指定了可选的 `$length` 参数，返回数组中的每个元素长度均为 `$length` 的块，除了最后一个块，如果字符串不是均匀划分，则可能会更短。默认 `$length` 是 `1`，这意味着每个块的大小是一个字节。

## 错误／异常

如果 `$length` 小于 `1`，将会抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 如果 `$string` 为空，现在返回空 `array`。之前返回的 `array` 包含单个空字符串。 |
| 8.0.0 | 如果 `$length` 小于 `1`，现在会抛出 `ValueError`；之前会触发 `E_WARNING` 级别的错误且函数会返回 `false`。 |

## 示例

**`str_split()` 使用示例**

```php


<?php

$str = "Hello Friend";

$arr1 = str_split($str);
$arr2 = str_split($str, 3);

print_r($arr1);
print_r($arr2);

?>

    
```

以上示例会输出：

```text


Array
(
    [0] => H
    [1] => e
    [2] => l
    [3] => l
    [4] => o
    [5] =>
    [6] => F
    [7] => r
    [8] => i
    [9] => e
    [10] => n
    [11] => d
)

Array
(
    [0] => Hel
    [1] => lo
    [2] => Fri
    [3] => end
)

    
```

## 注释

> 处理多字节编码字符串时，`str_split()` 将拆分为字节，而不是字符。`mb_str_split()` 可用于将字符串拆分为码点。`grapheme_str_split()` 可用于将字符串拆分为字素簇。

## 参见

`mb_str_split()` `grapheme_str_split()` `chunk_split()` `preg_split()` `explode()` `count_chars()` `str_word_count()` for
