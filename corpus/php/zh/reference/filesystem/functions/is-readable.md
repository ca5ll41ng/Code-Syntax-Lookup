---
id: "zh-php-function-function-is-readable"
language: "php"
lang: "zh"
category: "function"
name: "is_readable"
title: "判断给定文件名是否可读"
signature: "bool is_readable(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.is-readable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断给定文件名是否可读

## 说明

```php
bool is_readable(string $filename)
```

判断给定文件名是否存在并且可读。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

如果由 `$filename` 指定的文件或目录存在并且可读则返回 `true`，否则返回 `false`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`is_readable()` 例子**

```php


<?php
$filename = 'test.txt';
if (is_readable($filename)) {
    echo 'The file is readable';
} else {
    echo 'The file is not readable';
}
?>

    
```

## 注释

记住 PHP 也许只能以运行 webserver 的用户名（通常为 'nobody'）来访问文件。不计入安全模式的限制。

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

> The check is done using the real UID/GID instead of the effective one.

对于目录这个函数可能会返回 `true`。请使用 `is_dir()` 来区分文件和目录。

## 参见

`is_writable()` `file_exists()` `fgets()`
