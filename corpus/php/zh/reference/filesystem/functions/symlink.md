---
id: "zh-php-function-function-symlink"
language: "php"
lang: "zh"
category: "function"
name: "symlink"
title: "建立符号连接"
signature: "bool symlink(string $target, string $link)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.symlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立符号连接

## 说明

```php
bool symlink(string $target, string $link)
```

`symlink()` 对于已有的 `$target` 建立一个名为 `$link` 的符号连接。

## 参数

- **`$target`** — 连接的目标。
- **`$link`** — 连接的名称。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果 `$link` 已存在，函数将失败，并发出 `E_WARNING`。在 Windows 上，如果 `$target` 不存在，函数也会失败，并发出 `E_WARNING`。

## 示例

**创建一个符号连接**

```php


<?php
$target = 'uploads.php';
$link = 'uploads';
symlink($target, $link);

echo readlink($link);
?>

    
```

## 参见

`is_link()` `link()` `readlink()` `linkinfo()` `unlink()`
