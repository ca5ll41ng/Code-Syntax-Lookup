---
id: "zh-php-function-function-ftruncate"
language: "php"
lang: "zh"
category: "function"
name: "ftruncate"
title: "将文件截断到指定的长度"
signature: "bool ftruncate(resource $stream, int $size)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.ftruncate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将文件截断到指定的长度

## 说明

```php
bool ftruncate(resource $stream, int $size)
```

接受文件指针 `$stream` 作为参数，并将文件大小截取为 `$size`。

## 参数

- **`$stream`** — 文件指针。
  > `$stream` 必须打开写入。


- **`$size`** — 截断的大小。
  > If `$size` is larger than the file then the file is extended with null bytes.
  >
  > If `$size` is smaller than the file then the file is truncated to that size.



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**文件截取示例**

```php


<?php
$filename = 'lorem_ipsum.txt';

$handle = fopen($filename, 'r+');
ftruncate($handle, rand(1, filesize($filename)));
rewind($handle);
echo fread($handle, filesize($filename));
fclose($handle);
?>

    
```

## 注释

> 文件指针*不会*改变。

## 参见

`fopen()` `fseek()`
