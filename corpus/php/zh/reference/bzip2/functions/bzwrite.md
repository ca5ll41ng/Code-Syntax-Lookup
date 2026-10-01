---
id: "zh-php-function-function-bzwrite"
language: "php"
lang: "zh"
category: "function"
name: "bzwrite"
title: "二进制安全地写入 bzip2 文件"
signature: "int|false bzwrite(resource $bz, string $data, int|null $length = null)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzwrite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 二进制安全地写入 bzip2 文件

## 说明

```php
int|false bzwrite(resource $bz, string $data, int|null $length = null)
```

`bzwrite()` 把字符串（string）写入了指定的 bzip2 文件流。

## 参数

- **`$bz`** — 文件指针。它必须是有效的并且指向 `bzopen()` 成功打开的文件。
- **`$data`** — 要写入的数据。
- **`$length`** — 如果提供了这个参数，将仅仅写入 `$length`（未压缩）个字节，若 `$data` 小于该指定的长度则写入全部数据。

## 返回值

返回写入的数据字节数，错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$length` 现在可为空（nullable）。 |

## 示例

**`bzwrite()` 范例**

```php


<?php
$str = "uncompressed data";
$bz = bzopen("/tmp/foo.bz2", "w");
bzwrite($bz, $str, strlen($str));
bzclose($bz);
?>

   
```

## 参见

 `bzread()` `bzopen()`
