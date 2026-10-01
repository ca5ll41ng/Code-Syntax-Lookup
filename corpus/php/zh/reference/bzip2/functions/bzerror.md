---
id: "zh-php-function-function-bzerror"
language: "php"
lang: "zh"
category: "function"
name: "bzerror"
title: "返回包含 bzip2 错误号和错误字符串的一个 array"
signature: "array bzerror(resource $bz)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回包含 bzip2 错误号和错误字符串的一个 array

## 说明

```php
array bzerror(resource $bz)
```

返回文件指针中返回的 bzip2 错误的错误号和错误字符串。

## 参数

- **`$bz`** — 文件指针。它必须是有效的并且指向 `bzopen()` 成功打开的文件。

## 返回值

返回一个关联数组，包含错误码于 `errno` 条目， 以及错误信息于 `errstr` 条目。

## 示例

**`bzerror()` 范例**

```php


<?php
$error = bzerror($bz);

echo $error["errno"];
echo $error["errstr"];
?>

   
```

## 参见

 `bzerrno()` `bzerrstr()`
