---
id: "zh-php-function-function-fileinode"
language: "php"
lang: "zh"
category: "function"
name: "fileinode"
title: "取得文件的 inode"
signature: "int|false fileinode(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fileinode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得文件的 inode

## 说明

```php
int|false fileinode(string $filename)
```

取得文件的 inode。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

返回文件的 inode 节点号， 或者在失败时返回 `false`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**将某个文件和当前文件的 inode 进行对比**

```php


<?php
$filename = 'index.php';
if (getmyinode() == fileinode($filename)) {
    echo 'You are checking the current file.';
}
?>

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`getmyinode()` `stat()`
