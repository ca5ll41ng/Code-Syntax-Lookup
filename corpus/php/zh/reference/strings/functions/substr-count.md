---
id: "zh-php-function-function-substr-count"
language: "php"
lang: "zh"
category: "function"
name: "substr_count"
title: "计算字串出现的次数"
signature: "int substr_count(string $haystack, string $needle, int $offset = 0, int|null $length = null)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.substr-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算字串出现的次数

## 说明

```php
int substr_count(string $haystack, string $needle, int $offset = 0, int|null $length = null)
```

`substr_count()` 返回子字符串 `$needle` 在字符串 `$haystack` 中出现的次数。注意 `$needle` 区分大小写。

> 该函数不会计算重叠字符串！参见下面的例子。

## 参数

- **`$haystack`** — 在此字符串中进行搜索。
- **`$needle`** — 要搜索的字符串。
- **`$offset`** — 开始计数的偏移位置。如果是负数，就从字符的末尾开始统计。
- **`$length`** — 指定偏移位置之后的最大搜索长度。如果偏移量加上这个长度的和大于 `$haystack` 的总长度，则打印警告信息。 负数的长度 length 是从 `$haystack` 的末尾开始统计的。

## 返回值

该函数返回 `int`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$length` 可以为空（nullable）。 |
| 7.1.0 | 开始支持负数的 `$offset` 和 `$length`。 |

## 示例

**`substr_count()` 示例**

```php


<?php
$text = 'This is a test';
echo strlen($text), PHP_EOL; // 14

echo substr_count($text, 'is'), PHP_EOL; // 2

// 字符串被简化为 's is a test'，因此输出 1
echo substr_count($text, 'is', 3), PHP_EOL;

// 字符串被简化为 's i'，所以输出 0
echo substr_count($text, 'is', 3, 3), PHP_EOL;

// 输出 1，因为该函数不计算重叠字符串
$text2 = 'gcdgcdgcd';
echo substr_count($text2, 'gcdgcd'), PHP_EOL;

// 因为 5+10 > 14，所以抛出异常
echo substr_count($text, 'is', 5, 10), PHP_EOL;
?>

    
```

## 参见

`count_chars()` `strpos()` `substr()` `strstr()`
