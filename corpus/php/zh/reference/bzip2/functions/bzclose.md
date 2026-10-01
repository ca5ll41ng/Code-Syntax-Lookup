---
id: "zh-php-function-function-bzclose"
language: "php"
lang: "zh"
category: "function"
name: "bzclose"
title: "关闭一个 bzip2 文件"
signature: "bool bzclose(resource $bz)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzclose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭一个 bzip2 文件

## 说明

```php
bool bzclose(resource $bz)
```

关闭给出的 bzip2 文件指针。

## 参数

- **`$bz`** — 文件指针。它必须是有效的并且指向 `bzopen()` 成功打开的文件。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

 `bzopen()`
