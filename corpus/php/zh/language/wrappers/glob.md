---
id: "zh-php-function-wrappers-glob"
language: "php"
lang: "zh"
category: "function"
name: "glob://"
title: "查找匹配的文件路径模式"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.glob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找匹配的文件路径模式

## 说明

 {{{ 

`glob:` 数据流包装器。

 }}} 

## 用法

 {{{ 

- `glob://`

 }}} 

## 可选项

 {{{ 

| 属性 | 支持 |
| --- | --- |
| 受限于 allow_url_fopen | No |
| 受限于 allow_url_include | No |
| 允许读取 | No |
| 允许写入 | No |
| 允许附加 | No |
| 允许同时读写 | No |
| 支持 `stat()` | No |
| 支持 `unlink()` | No |
| 支持 `rename()` | No |
| 支持 `mkdir()` | No |
| 支持 `rmdir()` | No |

 }}} 

## 示例

 {{{ 

**基本用法**

```php


<?php
// 循环 ext/spl/examples/ 目录里所有 *.php 文件
// 并打印文件名和文件尺寸
$it = new DirectoryIterator("glob://ext/spl/examples/*.php");
foreach($it as $f) {
    printf("%s: %.1FK\n", $f->getFilename(), $f->getSize()/1024);
}
?>

   
```

```text


tree.php: 1.0K
findregex.php: 0.6K
findfile.php: 0.7K
dba_dump.php: 0.9K
nocvsdir.php: 1.1K
phar_from_dir.php: 1.0K
ini_groups.php: 0.9K
directorytree.php: 0.9K
dba_array.php: 1.1K
class_tree.php: 1.8K

   
```

 }}}
