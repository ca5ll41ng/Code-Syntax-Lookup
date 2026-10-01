---
id: "zh-php-function-function-is-dir"
language: "php"
lang: "zh"
category: "function"
name: "is_dir"
title: "判断给定文件名是否是一个目录"
signature: "bool is_dir(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.is-dir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断给定文件名是否是一个目录

## 说明

```php
bool is_dir(string $filename)
```

判断给定文件名是否是一个目录。

## 参数

- **`$filename`** — 文件路径，如果 `$filename` 是相对文件名，会相对于当前工作目录进行检查。如果 `$filename` 是符号链接或者硬链接，然后解析链接并检查。如果启用了 open_basedir，则会应用更多限制。

## 返回值

如果文件名存在，并且是个目录，返回 `true`，否则返回`false`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`is_dir()` 例子**

```php


<?php
var_dump(is_dir('a_file.txt'));
var_dump(is_dir('bogus_dir/abc'));

var_dump(is_dir('..')); //one dir up
?>

    
```

以上示例会输出：

```text


bool(false)
bool(false)
bool(true)

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`chdir()` `dir()` `opendir()` `is_file()` `is_link()`
