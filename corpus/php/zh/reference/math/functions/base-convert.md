---
id: "zh-php-function-function-base-convert"
language: "php"
lang: "zh"
category: "function"
name: "base_convert"
title: "在任意进制之间转换数字"
signature: "string base_convert(string $num, int $from_base, int $to_base)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.base-convert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在任意进制之间转换数字

## 说明

```php
string base_convert(string $num, int $from_base, int $to_base)
```

返回字符串，包含 `$num` 以 `$to_base` 进制的表示。`$num` 本身的进制由 `$from_base` 指定。`$from_base` 和 `$to_base` 都只能在 2 和 36 之间（包括 2 和 36）。高于十进制的数字用字母 a-z 表示，例如 a 表示 10，b 表示 11 以及 z 表示 35。字母的大小无关紧要，即 `$num` 不区分大小写。

> 由于使用内部的 `float` 类型，`base_convert()` 的操作可能会导致大数值中的精度丢失。请参见本手册的浮点数章节以便获得更多详细信息。

## 参数

- **`$num`** — 要转换的数字。`$num` 中的任何无效字符都会默认忽略。自 PHP 7.4.0 起，弃用使用任何无效字符。
- **`$from_base`** — `$num` 的进制数
- **`$to_base`** — `$num` 要转换为的进制数

## 返回值

`$num` 转换为 `$to_base` 进制

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 传递任何无效字符现在将生成弃用通知。但仍会计算结果，就好像无效字符不存在一样。 |

## 示例

**`base_convert()` 示例**

```php


<?php
$hexadecimal = 'a37334';
echo base_convert($hexadecimal, 16, 2);
?>

    
```

以上示例会输出：

```text


101000110111001100110100

    
```

## 参见

`intval()`
