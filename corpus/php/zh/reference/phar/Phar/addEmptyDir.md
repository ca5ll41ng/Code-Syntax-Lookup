---
id: "zh-php-function-phar-addemptydir"
language: "php"
lang: "zh"
category: "function"
name: "Phar::addEmptyDir"
title: "添加一个空目录到 phar 档案"
signature: "public void Phar::addEmptyDir(string $directory)"
module: "phar"
source_url: "https://www.php.net/manual/zh/phar.addemptydir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 添加一个空目录到 phar 档案

## 说明

```php
public void Phar::addEmptyDir(string $directory)
```

> 此方法需要 将 php.ini 中的 `phar.readonly` 设为 `0` 以适合 `Phar` 对象. 否则, 将抛出`PharException`.

通过这个方法，可以创建一个以 `dirname` 为路径名的空目录。 这个方法和 `ZipArchive::addEmptyDir()` 类似。

## 参数

- **`$directory`** — 需要在 phar 档案中创建的空目录名称

## 返回值

没有返回值, 失败时抛出异常（exception）。

## 示例

**一个 `Phar::addEmptyDir()` 示例**

```php


<?php
try {
    $a = new Phar('/path/to/phar.phar');

    $a->addEmptyDir('/full/path/to/file');
    // demonstrates how this file is stored
    $b = $a['full/path/to/file']->isDir();
} catch (Exception $e) {
    // handle errors here
}
?>

    
```

## 参见

`PharData::addEmptyDir()` `Phar::addFile()` `Phar::addFromString()`
