---
id: "zh-php-function-function-ltrim"
language: "php"
lang: "zh"
category: "function"
name: "ltrim"
title: "删除字符串开头的空白字符（或其他字符）"
signature: "string ltrim(string $string, string $characters = \" \\n\\r\\t\\v\\x00\")"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.ltrim.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除字符串开头的空白字符（或其他字符）

## 说明

```php
string ltrim(string $string, string $characters = " \n\r\t\v\x00")
```

去除字符串开头的空白字符（或其他字符）

不带第二个参数，`mb_ltrim()` 将去除下列字符：

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

该函数返回从 `$string` 开头去除了空白字符的字符串。

## 示例

**`ltrim()` 使用示例**

```php


<?php

$text = "\t\tThese are a few words :) ...  ";
$binary = "\x09Example string\x0A";
$hello  = "Hello World";
var_dump($text, $binary, $hello);

print "\n";


$trimmed = ltrim($text);
var_dump($trimmed);

$trimmed = ltrim($text, " \t.");
var_dump($trimmed);

$trimmed = ltrim($hello, "Hdle");
var_dump($trimmed);

// 删除 $binary 开头的 ASCII 控制字符
// (从 0 到 31，包括 0 和 31)
$clean = ltrim($binary, "\x00..\x1F");
var_dump($clean);

?>

    
```

以上示例会输出：

```text


string(32) "        These are a few words :) ...  "
string(16) "    Example string
"
string(11) "Hello World"

string(30) "These are a few words :) ...  "
string(30) "These are a few words :) ...  "
string(7) "o World"
string(15) "Example string
"

    
```

## 参见

 `trim()` `rtrim()`
