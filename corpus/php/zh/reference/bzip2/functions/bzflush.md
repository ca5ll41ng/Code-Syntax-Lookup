---
id: "zh-php-function-function-bzflush"
language: "php"
lang: "zh"
category: "function"
name: "bzflush"
title: "什么都不做"
signature: "bool bzflush(resource $bz)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzflush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 什么都不做

## 说明

```php
bool bzflush(resource $bz)
```

该函数应该强制写入 bzip2 文件指针 `$bz` 的所有写缓冲数据。但在 libbz2 中实现为空函数，因此什么都不做。

## 参数

- **`$bz`** — 文件指针。它必须是有效的并且指向 `bzopen()` 成功打开的文件。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

 `bzread()` `bzwrite()`
