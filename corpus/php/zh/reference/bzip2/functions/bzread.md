---
id: "zh-php-function-function-bzread"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "bzread"
title: "bzip2 文件二进制安全地读取"
signature: "string|false bzread(resource $bz, int $length = 1024)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzread.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# bzip2 文件二进制安全地读取

## 说明

```php
string|false bzread(resource $bz, int $length = 1024)
```

`bzread()` 从指定的 bzip2 文件指针中读取数据。

读取到 `$length`（未经压缩的长度）个字节，或者到文件尾，取决于先到哪个。

## 参数

- **`$bz`** — 文件指针。它必须是有效的并且指向 `bzopen()` 成功打开的文件。
- **`$length`** — 如果没有提供， `bzread()` 一次会读入 1024 个字节（未经压缩的长度）。 一次最大可读入 8192 个未压缩的字节。

## 返回值

返回解压的数据，在错误时返回 `false`。

## 示例

**`bzread()` 范例**

```php


<?php

$file = "/tmp/foo.bz2";
$bz = bzopen($file, "r") or die("Couldn't open $file");

$decompressed_file = '';
while (!feof($bz)) {
  $decompressed_file .= bzread($bz, 4096);
}
bzclose($bz);

echo "The contents of $file are: <br />\n";
echo $decompressed_file;

?>

   
```

## 参见

 `bzwrite()` `feof()` `bzopen()`
