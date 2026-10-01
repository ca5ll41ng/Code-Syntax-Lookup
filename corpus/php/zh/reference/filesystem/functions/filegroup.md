---
id: "zh-php-function-function-filegroup"
language: "php"
lang: "zh"
category: "function"
name: "filegroup"
title: "取得文件的组"
signature: "int|false filegroup(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.filegroup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得文件的组

## 说明

```php
int|false filegroup(string $filename)
```

取得该文件所属组的 ID。组 ID 以数字格式返回，用 `posix_getgrgid()` 来将其解析为组名。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

返回该文件所属组的 ID。或在错误时返回 `false`。 组 ID 以数字格式返回，用 `posix_getgrgid()` 来将其解析为组名。如果出错则返回 `false`。

## 错误／异常

失败时会发出 `E_WARNING`。

## 示例

**查找文件所在的组**

```php


<?php
$filename = 'index.php';
print_r(posix_getgrgid(filegroup($filename)));
?>

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`fileowner()` `posix_getgrgid()`
