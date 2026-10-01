---
id: "zh-php-function-function-is-link"
language: "php"
lang: "zh"
category: "function"
name: "is_link"
title: "判断给定文件名是否为一个符号连接"
signature: "bool is_link(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.is-link.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断给定文件名是否为一个符号连接

## 说明

```php
bool is_link(string $filename)
```

判断给定文件名是否为一个符号连接。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

如果文件存在并且是一个符号连接则返回 `true`，否则返回 `false`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**创建并确认一个文件是否为符号连接**

```php


<?php
$link = 'uploads';

if (is_link($link)) {
    echo readlink($link);
} else {
    symlink('uploads.php', $link);
}
?>

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`is_dir()` `is_file()` `readlink()` `symlink()`
