---
id: "zh-php-function-function-bin2hex"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "bin2hex"
title: "将二进制数据转换为十六进制表示"
signature: "string bin2hex(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.bin2hex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将二进制数据转换为十六进制表示

## 说明

```php
string bin2hex(string $string)
```

返回 ASCII 字符串，包含 `$string` 的十六进制表示。转换是高位优先，按字节完成的。

## 参数

- **`$string`** — 字符串。

## 返回值

返回指定字符串的十六进制表示。

## 示例

**`bin2hex()` 示例**

```php


<?php

$hex = bin2hex('Hello world!');

var_dump($hex);
var_dump(hex2bin($hex));
?>

    
```

以上示例会输出：

```text


string(24) "48656c6c6f20776f726c6421"
string(12) "Hello world!"

    
```

## 参见

`hex2bin()` `pack()`
