---
id: "zh-php-function-ziparchive-extractto"
language: "php"
lang: "zh"
category: "function"
name: "ZipArchive::extractTo"
title: "解压缩文件"
signature: "public bool ZipArchive::extractTo(string $pathto, array|string|null $files = null)"
module: "zip"
source_url: "https://www.php.net/manual/zh/ziparchive.extractto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解压缩文件

## 说明

```php
public bool ZipArchive::extractTo(string $pathto, array|string|null $files = null)
```

将完整归档或指定文件提取到指定的目录。

> 提取的文件和目录的默认权限提供尽可能广泛的访问权限。这可以通过设置当前 umask 来限制，可以使用 `umask()` 更改。
>
> 出于安全原因，不会恢复原始权限。有关如何还原的示例，请参阅 `ZipArchive::getExternalAttributesIndex()` 页面上的代码示例。

## 参数

- **`$pathto`** — 解压缩的本地目标路径
- **`$files`** — 要提取的条目。接受单个条目名称或名称数组。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**提取所有条目**

```php


<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->extractTo('/my/destination/dir/');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```

**提取两个条目**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test_im.zip');
if ($res === TRUE) {
    $zip->extractTo('/my/destination/dir/', array('pear_item.gif', 'testfromfile.php'));
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```

## 注释

> Windows NTFS file systems do not support some characters in filenames, namely `<|>*?":`. Filenames with a trailing dot are not supported either. Contrary to some extraction tools, this method does not replace these characters with an underscore, but instead fails to extract such files.
