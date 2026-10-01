---
id: "zh-php-function-function-convert-uudecode"
language: "php"
lang: "zh"
category: "function"
name: "convert_uudecode"
title: "解码一个 uuencode 编码的字符串"
signature: "string|false convert_uudecode(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.convert-uudecode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解码一个 uuencode 编码的字符串

## 说明

```php
string|false convert_uudecode(string $string)
```

`convert_uudecode()` 解码一个 uuencode 编码的字符串。

> `convert_uudecode()` 既不接受 `begin` 行也不接受 `end`，它们是 uuencoded *files* 的一部分。

## 参数

- **`$string`** — uuencode 编码后的数据。

## 返回值

返回解码后的字符串数据， 或者在失败时返回 `false`.。

## 示例

**`convert_uudecode()` 例子**

```php


<?php
echo convert_uudecode("+22!L;W9E(%!(4\"$`\n`");
?>

    
```

以上示例会输出：

```text


I love PHP!

    
```

## 参见

`convert_uuencode()`
