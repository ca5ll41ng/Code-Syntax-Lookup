---
id: "zh-php-function-function-is-executable"
language: "php"
lang: "zh"
category: "function"
name: "is_executable"
title: "判断给定文件名是否可执行"
signature: "bool is_executable(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.is-executable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断给定文件名是否可执行

## 说明

```php
bool is_executable(string $filename)
```

判断给定文件名是否可执行。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

如果文件存在且可执行则返回 `true`，错误时返回 `false`。在 POSIX 系统中，如果设置了文件权限的可执行位，则文件可执行。对于 Windows，请参阅下面的注释。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`is_executable()` 例子**

```php


<?php

$file = '/home/vincent/somefile.sh';

if (is_executable($file)) {
    echo $file.' is executable';
} else {
    echo $file.' is not executable';
}

?>

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

> 在 Windows 上，如果文件是 Win API `GetBinaryType()` 报告的正确可执行文件，则该文件视为可执行文件；由于 BC 原因，扩展名是 `.bat` 或 `.cmd` 的文件也被视为可执行文件。在 PHP 7.4.0 之前，任何扩展名是 `.bat` 或 `.cmd` 的非空文件都被视为可执行文件。注意 PATHEXT 与 `is_executable()` 无关。

## 参见

`is_file()` `is_link()`
