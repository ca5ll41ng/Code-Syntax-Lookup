---
id: "zh-php-function-function-str-repeat"
language: "php"
lang: "zh"
category: "function"
name: "str_repeat"
title: "重复一个字符串"
signature: "string str_repeat(string $string, int $times)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-repeat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重复一个字符串

## 说明

```php
string str_repeat(string $string, int $times)
```

返回 `$string` 重复 `$times` 次后的结果。

## 参数

- **`$string`** — 待操作的字符串。
- **`$times`** — `$string` 被重复的次数。 — `$times` 必须大于等于 0。如果 `$times` 被设置为 0，函数返回空字符串。

## 返回值

返回重复后的字符串。

## 示例

**`str_repeat()` 示例**

```php


<?php
echo str_repeat("-=", 10);
?>

    
```

以上示例会输出：

```text


-=-=-=-=-=-=-=-=-=-=

    
```

## 参见

for `str_pad()` `substr_count()`
