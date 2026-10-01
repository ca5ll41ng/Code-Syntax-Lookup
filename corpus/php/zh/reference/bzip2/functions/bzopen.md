---
id: "zh-php-function-function-bzopen"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "bzopen"
title: "打开 bzip2 压缩文件"
signature: "resource|false bzopen(string|resource $file, string $mode)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzopen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开 bzip2 压缩文件

## 说明

```php
resource|false bzopen(string|resource $file, string $mode)
```

`bzopen()` 打开一个 bzip2（`.bz2`）文件用于读或写。

## 参数

- **`$file`** — 待打开的文件的文件名，或者已经存在的资源流。
- **`$mode`** — 支持 `'r'`（读）和 `'w'`（写）模式。 其他任何模式都会导致 `bzopen()` 返回 `false`。

## 返回值

如果打开失败，`bzopen()` 会返回 `false`，否则返回一个指向最新打开文件的指针。

## 示例

**`bzopen()` 范例**

```php


<?php

$file = "/tmp/foo.bz2";
$bz = bzopen($file, "r") or die("Couldn't open $file for reading");

bzclose($bz);

?>

   
```

## 参见

 `bzclose()`
