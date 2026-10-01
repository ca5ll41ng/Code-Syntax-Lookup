---
id: "zh-php-function-ziparchive-setarchiveflag"
language: "php"
lang: "zh"
category: "function"
name: "ZipArchive::setArchiveFlag"
title: "设置 ZIP 归档的全局 flag"
signature: "public bool ZipArchive::setArchiveFlag(int $flag, int $value)"
module: "zip"
source_url: "https://www.php.net/manual/zh/ziparchive.setarchiveflag.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 ZIP 归档的全局 flag

## 说明

```php
public bool ZipArchive::setArchiveFlag(int $flag, int $value)
```

设置 ZIP 归档的全局 flag。

## 参数

- **`$flag`** — 要改变的全局 flag，包含 `AFL_*` 常量。 - `ZipArchive::AFL_WANT_TORRENTZIP` - `ZipArchive::AFL_CREATE_OR_KEEP_FILE_FOR_EMPTY_ARCHIVE`
- **`$value`** — flag 的新值。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**创建 torrentzip 归档**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->setArchiveFlag(ZipArchive::AFL_WANT_TORRENTZIP, 1);
    $zip->addFromString('test.txt', 'file content goes here');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```

## 参见

`ZipArchive::getArchiveFlag()`
