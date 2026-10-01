---
id: "zh-php-function-function-hex2bin"
language: "php"
lang: "zh"
category: "function"
name: "hex2bin"
title: "转换十六进制字符串为二进制字符串"
signature: "string|false hex2bin(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.hex2bin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转换十六进制字符串为二进制字符串

## 说明

```php
string|false hex2bin(string $string)
```

转换十六进制字符串为二进制字符串。

> 这个函数*不是* 转换十六进制数字为二进制数字。这种转换可以使用`base_convert()` 函数。

## 参数

- **`$string`** — 十六进制表示的数据

## 返回值

返回给定数据的二进制表示 或者在失败时返回 `false`。

## 错误／异常

如果输入的十六进制字符串是奇数长数或者无效的十六进制字符串将会抛出 `E_WARNING` 级别的错误。

## 示例

**`hex2bin()` 例子**

```php


<?php
$hex = hex2bin("6578616d706c65206865782064617461");
var_dump($hex);
?>

   
```

以上示例的输出类似于：

```text


string(16) "example hex data"

   
```

## 参见

`bin2hex()` `unpack()`
