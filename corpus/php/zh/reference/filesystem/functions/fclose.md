---
id: "zh-php-function-function-fclose"
language: "php"
lang: "zh"
category: "function"
name: "fclose"
title: "关闭一个已打开的文件指针"
signature: "bool fclose(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fclose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭一个已打开的文件指针

## 说明

```php
bool fclose(resource $stream)
```

将 `$stream` 指向的文件关闭。

## 参数

- **`$stream`** — 文件指针必须有效，并且是通过 `fopen()` 或 `fsockopen()` 成功打开的。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**一个简单 `fclose()` 例子**

```php


<?php

$handle = fopen('somefile.txt', 'r');

fclose($handle);

?>

    
```

## 参见

`fopen()` `fsockopen()`
