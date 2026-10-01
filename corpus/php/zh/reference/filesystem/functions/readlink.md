---
id: "zh-php-function-function-readlink"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]},{"type":"sanitizer"}]
name: "readlink"
title: "返回符号连接指向的目标"
signature: "string|false readlink(string $path)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.readlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回符号连接指向的目标

## 说明

```php
string|false readlink(string $path)
```

`readlink()` 和同名的 C 函数做同样的事，返回符号连接的内容。

## 参数

- **`$path`** — 链接符号的路径。

## 返回值

返回链接的路径内容，出错则返回 `false`。

> 如果 `$path` 不是符号链接，则该函数将失败，但在 Windows 上除外，其中将返回规范化的路径。

## 示例

**`readlink()` 示例**

```php


<?php

// output e.g. /boot/vmlinux-2.4.20-xfs
echo readlink('/vmlinuz');

?>

    
```

## 参见

`is_link()` `symlink()` `linkinfo()`
