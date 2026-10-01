---
id: "zh-php-function-function-filetype"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "filetype"
title: "取得文件类型"
signature: "string|false filetype(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.filetype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得文件类型

## 说明

```php
string|false filetype(string $filename)
```

返回文件的类型。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

返回文件的类型。 可能的值有 fifo，char，dir，block，link，file 和 unknown。

如果出错则返回 `false`。如果 stat 调用失败或者文件类型未知的话 `filetype()` 还会产生一个 `E_NOTICE` 消息。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`filetype()` 例子**

```php


<?php

echo filetype('/etc/passwd');
echo "\n";
echo filetype('/etc/');

?>

    
```

以上示例会输出：

```text

     
file
dir

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`is_dir()` `is_file()` `is_link()` `file_exists()` `mime_content_type()` `pathinfo()` `stat()`
