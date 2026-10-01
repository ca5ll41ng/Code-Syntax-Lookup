---
id: "zh-php-function-phar-addfile"
language: "php"
lang: "zh"
category: "function"
name: "Phar::addFile"
title: "将一个文件从文件系统添加到 phar 档案中"
signature: "public void Phar::addFile(string $filename, string|null $localName = null)"
module: "phar"
source_url: "https://www.php.net/manual/zh/phar.addfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将一个文件从文件系统添加到 phar 档案中

## 说明

```php
public void Phar::addFile(string $filename, string|null $localName = null)
```

> 此方法需要 将 php.ini 中的 `phar.readonly` 设为 `0` 以适合 `Phar` 对象. 否则, 将抛出`PharException`.

通过这个方法，任何文件或者 URL 可以被添加到 phar 档案中。如果第二个可选参数 `$localName` 被设定， 那么文件则会以该参数为名称保存到档案中，此外，`file` 参数会被作为路径保存在档案中。 URLs 必须提交 localname 参数，否则会抛出异常。 这个方法与 `ZipArchive::addFile()` 类似。

## 参数

- **`$filename`** — 需要添加到 phar 档案的文件在磁盘上的完全（绝对）或者相对路径。
- **`$localName`** — 文件保存到档案时的路径。

## 返回值

没有返回值，失败时会抛出异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$localName` 现在可以为空。 |

## 示例

**一个 `Phar::addFile()` 示例**

```php


<?php
try {
    $a = new Phar('/path/to/phar.phar');

    $a->addFile('/full/path/to/file');
    // demonstrates how this file is stored
    $b = $a['full/path/to/file']->getContent();

    $a->addFile('/full/path/to/file', 'my/file.txt');
    $c = $a['my/file.txt']->getContent();

    // demonstrate URL usage
    $a->addFile('http://www.example.com', 'example.html');
} catch (Exception $e) {
    // handle errors here
}
?>

    
```

## 注释

> `Phar::addFile()`, `Phar::addFromString()` and `Phar::offsetSet()` save a new phar archive each time they are called. If performance is a concern, `Phar::buildFromDirectory()` or `Phar::buildFromIterator()` should be used instead.

## 参见

`Phar::offsetSet()` `PharData::addFile()` `Phar::addFromString()` `Phar::addEmptyDir()`
