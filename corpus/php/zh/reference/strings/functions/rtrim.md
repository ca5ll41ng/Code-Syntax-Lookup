---
id: "zh-php-function-function-rtrim"
language: "php"
lang: "zh"
category: "function"
name: "rtrim"
title: "去除字符串末尾的空白字符（或者其他字符）"
signature: "string rtrim(string $string, string $characters = \" \\n\\r\\t\\v\\x00\")"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.rtrim.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 去除字符串末尾的空白字符（或者其他字符）

## 说明

```php
string rtrim(string $string, string $characters = " \n\r\t\v\x00")
```

该函数去除 `$string` 末尾的空白字符（或者其他字符）并返回。

不使用第二个参数，`rtrim()` 将去除以下字符：

- `" "`： ASCII SP 字符 `0x20`，一个普通的空格。
- `"\t"`： ASCII HT 字符 `0x09`，一个制表符。
- `"\n"`： ASCII LF 字符 `0x0A`，一个换行符。
- `"\r"`： ASCII CR 字符 `0x0D`，一个回车符。
- `"\0"`： ASCII NUL 字符 `0x00`，一个 NUL 字节。
- `"\v"`： ASCII VT 字符 `0x0B`，一个垂直制表符。

## 参数

- **`$string`** — 输入字符串。
- **`$characters`** — 可选，也可以使用 `$characters` 参数指定要剥离的字符。 只需列出所有需要剥离的字符。 使用 `..` 可以指定一个递增的字符范围。

## 返回值

返回改变后的字符串。

## 示例

**`rtrim()` 使用示例**

```php


<?php

$text = "\t\tThese are a few words :) ...  ";
$binary = "\x09Example string\x0A";
$hello  = "Hello World";
var_dump($text, $binary, $hello);

print "\n";

$trimmed = rtrim($text);
var_dump($trimmed);

$trimmed = rtrim($text, " \t.");
var_dump($trimmed);

$trimmed = rtrim($hello, "Hdle");
var_dump($trimmed);

// 删除 $binary 末端的 ASCII 码控制字符
// (包括 0 - 31)
$clean = rtrim($binary, "\x00..\x1F");
var_dump($clean);

?>

    
```

以上示例会输出：

```text


string(32) "        These are a few words :) ...  "
string(16) "    Example string
"
string(11) "Hello World"

string(30) "        These are a few words :) ..."
string(26) "        These are a few words :)"
string(9) "Hello Wor"
string(15) "    Example string"

    
```

## 参见

 `trim()` `ltrim()`
