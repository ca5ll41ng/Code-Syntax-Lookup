---
id: "zh-php-function-function-is-file"
language: "php"
lang: "zh"
category: "function"
name: "is_file"
title: "判断给定文件名是否为一个正常的文件"
signature: "bool is_file(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.is-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断给定文件名是否为一个正常的文件

## 说明

```php
bool is_file(string $filename)
```

判断指定文件名是否为正常的文件。如果 `$filename` 是符号链接，将会解析符号链接并提供有关所引用文件的信息。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

如果文件存在且为正常的文件则返回 `true`，否则返回 `false`。

> 因为 PHP 的整数类型是有符号整型而且很多平台使用 32 位整型，对 2GB 以上的文件，一些文件系统函数可能返回无法预期的结果。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`is_file()` 例子**

```php


<?php
var_dump(is_file('a_file.txt')) . "\n";
var_dump(is_file('/usr/bin/')) . "\n";
?>

    
```

以上示例会输出：

```text


bool(true)
bool(false)

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`is_dir()` `is_link()` `SplFileInfo`
