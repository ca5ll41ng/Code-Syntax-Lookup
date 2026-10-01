---
id: "zh-php-function-function-umask"
language: "php"
lang: "zh"
category: "function"
name: "umask"
title: "改变当前的 umask"
signature: "int umask(int|null $mask = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.umask.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 改变当前的 umask

## 说明

```php
int umask(int|null $mask = null)
```

`umask()` 将 PHP 的 umask 设定为 `$mask` & 0777 并返回原来的 umask。当 PHP 被作为服务器模块使用时，在每个请求结束后 umask 会被恢复。

## 参数

- **`$mask`** — The new umask.

## 返回值

如果 `$mask` 为 `null`，`umask()` 仅返回当前的 umask，有参数则返回原来的 umask。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$mask` 现在可以为 null。 |

## 示例

**`umask()` 例子**

```php


<?php
$old = umask(0);
chmod("/path/some_dir/some_file.txt", 0755);
umask($old);

// Checking
if ($old != umask()) {
    die('An error occurred while changing back the umask');
}
?>

    
```

## 注释

> 在多线程的服务器上尽量避免使用这个函数。创建文件后要改变其权限最好还是使用 `chmod()`。使用 `umask()` 会导致并发程序和服务器发生不可预知的情况，因为它们是使用相同的 umask 的。
