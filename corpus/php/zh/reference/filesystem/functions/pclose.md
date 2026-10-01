---
id: "zh-php-function-function-pclose"
language: "php"
lang: "zh"
category: "function"
name: "pclose"
title: "关闭进程文件指针"
signature: "int pclose(resource $handle)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.pclose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭进程文件指针

## 说明

```php
int pclose(resource $handle)
```

关闭用 `popen()` 打开的指向管道的文件指针。

## 参数

- **`$handle`** — 文件指针必须有效，且必须是成功调用 `popen()` 所返回的。

## 返回值

返回运行的进程的终止状态。发生错误时会返回 `-1`。

> 如果 PHP 是通过 --enable-sigchild 编译的，此函数将没有返回值。

## 示例

**`pclose()` 例子**

```php


<?php
$handle = popen('/bin/ls', 'r');
pclose($handle);
?>

    
```

## 注释

> 仅限 Unix
>
> `pclose()` 在内部使用 `waitpid(3)` 系统调用实现的。要获得真正的退出状态码，应该使用 `pcntl_wexitstatus()` 函数。

## 参见

`popen()`
