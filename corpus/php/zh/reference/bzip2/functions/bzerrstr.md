---
id: "zh-php-function-function-bzerrstr"
language: "php"
lang: "zh"
category: "function"
name: "bzerrstr"
title: "返回一个 bzip2 的错误字符串"
signature: "string bzerrstr(resource $bz)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzerrstr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个 bzip2 的错误字符串

## 说明

```php
string bzerrstr(resource $bz)
```

获取指定文件指针中返回 bzip2 任何错误的错误字符串。

## 参数

- **`$bz`** — 文件指针。它必须是有效的并且指向 `bzopen()` 成功打开的文件。

## 返回值

返回包含错误信息的 string。

## 参见

 `bzerrno()` `bzerror()`
