---
id: "zh-php-function-function-bzerrno"
language: "php"
lang: "zh"
category: "function"
name: "bzerrno"
title: "返回一个 bzip2 错误码"
signature: "int bzerrno(resource $bz)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzerrno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个 bzip2 错误码

## 说明

```php
int bzerrno(resource $bz)
```

返回指定文件指针任意返回的 bzip2 错误的错误码。

## 参数

- **`$bz`** — 文件指针。它必须是有效的并且指向 `bzopen()` 成功打开的文件。

## 返回值

返回 integer 的错误码。

## 参见

 `bzerror()` `bzerrstr()`
