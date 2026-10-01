---
id: "zh-php-function-function-posix-getpid"
language: "php"
lang: "zh"
category: "function"
name: "posix_getpid"
title: "返回当前进程 id"
signature: "int posix_getpid()"
module: "posix"
source_url: "https://www.php.net/manual/zh/function.posix-getpid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前进程 id

## 说明

```php
int posix_getpid()
```

Return the process identifier of the current process. 返回当前进程的 id

## 参数

此函数没有参数。

## 返回值

返回进程 id 号，是整型（`int`）。

## 示例

**`posix_getpid()` 的使用例子**

```php

                    
<?php
echo posix_getpid(); //8805
?>

                
```

## 参见

`posix_kill()` POSIX man page GETPID(2)
