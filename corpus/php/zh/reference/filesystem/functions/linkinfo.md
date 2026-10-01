---
id: "zh-php-function-function-linkinfo"
language: "php"
lang: "zh"
category: "function"
name: "linkinfo"
title: "获取一个连接的信息"
signature: "int|false linkinfo(string $path)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.linkinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个连接的信息

## 说明

```php
int|false linkinfo(string $path)
```

获取一个连接的信息。

本函数用来验证一个连接（由 `$path` 所指向的）是否确实存在（使用 `stat.h` 中的 S_ISLNK 宏同样的方法）。

## 参数

- **`$path`** — 连接的路径。

## 返回值

`linkinfo()` 返回 `lstat` 系统调用所返回的 UNIX C stat 结构中的 `st_dev` 字段。成功时返回非负数，如果链接未找到则返回 -1，如果跟 open.base_dir 冲突则返回 `false`。

## 示例

**`linkinfo()` 例子**

```php


<?php

echo linkinfo('/vmlinuz'); // 835

?>

    
```

## 参见

`symlink()` `link()` `readlink()`
