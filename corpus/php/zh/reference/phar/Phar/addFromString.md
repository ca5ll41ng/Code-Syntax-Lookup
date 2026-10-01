---
id: "zh-php-function-phar-addfromstring"
language: "php"
lang: "zh"
category: "function"
name: "Phar::addFromString"
title: "以字符串的形式添加一个文件到 phar 档案"
signature: "public void Phar::addFromString(string $localName, string $contents)"
module: "phar"
source_url: "https://www.php.net/manual/zh/phar.addfromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以字符串的形式添加一个文件到 phar 档案

## 说明

```php
public void Phar::addFromString(string $localName, string $contents)
```

> 此方法需要 将 php.ini 中的 `phar.readonly` 设为 `0` 以适合 `Phar` 对象. 否则, 将抛出`PharException`.

通过这个方法，任何字符串都可以被添加到 phar 档案中。 文件将会以 `localname` 为路径保存到档案中。 这个方法与 `ZipArchive::addFromString()` 类似。

## 参数

- **`$localName`** — 文件保存到档案时的路径。
- **`$contents`** — 要保存的文件内容。

## 返回值

没有返回值，失败时会抛出异常。

## 示例

**一个 `Phar::addFromString()` 示例**

```php


<?php
try {
    $a = new Phar('/path/to/phar.phar');

    $a->addFromString('path/to/file.txt', 'my simple file');
    $b = $a['path/to/file.txt']->getContent();

    // to add contents from a stream handle for large files, use offsetSet()
    $c = fopen('/path/to/hugefile.bin');
    $a['largefile.bin'] = $c;
    fclose($c);
} catch (Exception $e) {
    // handle errors here
}
?>

    
```

## 注释

> `Phar::addFile()`, `Phar::addFromString()` and `Phar::offsetSet()` save a new phar archive each time they are called. If performance is a concern, `Phar::buildFromDirectory()` or `Phar::buildFromIterator()` should be used instead.

## 参见

`Phar::offsetSet()` `PharData::addFromString()` `Phar::addFile()` `Phar::addEmptyDir()`
