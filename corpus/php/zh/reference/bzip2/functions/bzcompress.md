---
id: "zh-php-function-function-bzcompress"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "bzcompress"
title: "把一个字符串压缩成 bzip2 编码数据"
signature: "string|int bzcompress(string $data, int $block_size = 4, int $work_factor = 0)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzcompress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 把一个字符串压缩成 bzip2 编码数据

## 说明

```php
string|int bzcompress(string $data, int $block_size = 4, int $work_factor = 0)
```

`bzcompress()` 压缩了指定的字符串并以 bzip2 编码返回数据。

## 参数

- **`$data`** — 待压缩的字符串。
- **`$block_size`** — 指定压缩时使用的块大小，应该是一个 1-9 的数字。9 可以有最高的压缩比，但会使用更多的资源。
- **`$work_factor`** — 控制压缩阶段出现最坏的重复性高的情况下输入数据时的行为。 该值可以是在 0 至 250 之间，0是一个特殊的情况。 — 无论 `$work_factor`是什么，产生的输出都是一致的。

## 返回值

压缩后的字符串，或者在出现错误时返回错误号。

## 示例

**压缩数据**

```php


<?php
$str = "sample data";
$bzstr = bzcompress($str, 9);
echo $bzstr;
?>

   
```

## 参见

 `bzdecompress()`
