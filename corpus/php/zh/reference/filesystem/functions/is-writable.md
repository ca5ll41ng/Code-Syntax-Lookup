---
id: "zh-php-function-function-is-writable"
language: "php"
lang: "zh"
category: "function"
name: "is_writable"
title: "判断给定的文件名是否可写"
signature: "bool is_writable(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.is-writable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断给定的文件名是否可写

## 说明

```php
bool is_writable(string $filename)
```

如果文件存在并且可写则返回 `true`。`$filename` 参数可以是一个允许进行是否可写检查的目录名。

记住 PHP 也许只能以运行 webserver 的用户名（通常为 'nobody'）来访问文件。

## 参数

- **`$filename`** — 要检查的文件名称。

## 返回值

如果文件 `$filename` 存在并且可写则返回 `true`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`is_writable()` 例子**

```php


<?php
$filename = 'test.txt';
if (is_writable($filename)) {
    echo 'The file is writable';
} else {
    echo 'The file is not writable';
}
?>

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`is_readable()` `file_exists()` `fwrite()`
