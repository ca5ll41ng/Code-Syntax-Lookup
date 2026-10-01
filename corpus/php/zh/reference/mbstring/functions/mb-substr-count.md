---
id: "zh-php-function-function-mb-substr-count"
language: "php"
lang: "zh"
category: "function"
name: "mb_substr_count"
title: "统计字符串出现的次数"
signature: "int mb_substr_count(string $haystack, string $needle, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-substr-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 统计字符串出现的次数

## 说明

```php
int mb_substr_count(string $haystack, string $needle, string|null $encoding = null)
```

统计子字符串 `$needle` 出现在`字符串` `$haystack` 中的次数。

## 参数

- **`$haystack`** — 要检查的`字符串`。
- **`$needle`** — 待查找的`字符串`。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

子字符串 `$needle` 出现在 `string` `$haystack` 中的次数。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 示例

**`mb_substr_count()` 示例**

```php


<?php
echo mb_substr_count("This is a test", "is"); // 输出 2
?>

    
```

## 参见

`mb_strpos()` `mb_substr()` `substr_count()`
