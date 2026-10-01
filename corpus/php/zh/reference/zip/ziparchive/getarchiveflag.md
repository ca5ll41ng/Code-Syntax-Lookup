---
id: "zh-php-function-ziparchive-getarchiveflag"
language: "php"
lang: "zh"
category: "function"
name: "ZipArchive::getArchiveFlag"
title: "返回 Zip 归档全局 flag 的值"
signature: "public int ZipArchive::getArchiveFlag(int $flag, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/zh/ziparchive.getarchiveflag.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 Zip 归档全局 flag 的值

## 说明

```php
public int ZipArchive::getArchiveFlag(int $flag, int $flags = 0)
```

返回 Zip 归档全局 flag 的值。

## 参数

- **`$flag`** — 检索的全局 flag，包含 `AFL_*` 常量： - `ZipArchive::AFL_RDONLY` - `ZipArchive::AFL_IS_TORRENTZIP` - `ZipArchive::AFL_WANT_TORRENTZIP` - `ZipArchive::AFL_CREATE_OR_KEEP_FILE_FOR_EMPTY_ARCHIVE`
- **`$flags`** — 如果将 `$flags` 设置为 `ZipArchive::FL_UNCHANGED`，则返回原始未更改的 flag。

## 返回值

如果 flag 在归档中设置了，返回 1，没有返回 0，发生错误，返回 -1。

## 示例

**测试归档是否是 torrentzip 格式**

```php


<?php

$zip = new ZipArchive();
$res = $zip->open('test.zip');

if ($res === true) {
    var_dump($zip->getArchiveFlag(ZipArchive::AFL_IS_TORRENTZIP));
} else {
    echo 'Failed, code: ' . $res;
}

?>

   
```

## 参见

`ZipArchive::setArchiveFlag()`
