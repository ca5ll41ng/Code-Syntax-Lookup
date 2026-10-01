---
id: "zh-php-function-function-fileowner"
language: "php"
lang: "zh"
category: "function"
name: "fileowner"
title: "取得文件的所有者"
signature: "int|false fileowner(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fileowner.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得文件的所有者

## 说明

```php
int|false fileowner(string $filename)
```

取得文件的所有者。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

返回文件所有的用户 ID，如果出错则返回 `false`。用户 ID 以数字格式返回，用 `posix_getpwuid()` 来将其解析为用户名。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**找到文件的所有者**

```php


<?php
$filename = 'index.php';
print_r(posix_getpwuid(fileowner($filename)));
?>

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`filegroup()` `stat()` `posix_getpwuid()`
