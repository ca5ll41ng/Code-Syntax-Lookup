---
id: "zh-php-function-function-link"
language: "php"
lang: "zh"
category: "function"
name: "link"
title: "建立一个硬连接"
signature: "bool link(string $target, string $link)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.link.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立一个硬连接

## 说明

```php
bool link(string $target, string $link)
```

`link()` 建立一个硬连接。

## 参数

- **`$target`** — 要链接的目标。
- **`$link`** — 链接的名称。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果 `$link` 已存在或者 `$target` 不存在，此函数会失败并发出 `E_WARNING`。

## 示例

**创建简单的硬链接**

```php


<?php
$target = 'source.ext'; // This is the file that already exists
$link = 'newfile.ext'; // This the filename that you want to link it to

link($target, $link);
?>

    
```

## 注释

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。

> 仅适用于 Windows：此函数需要 PHP 在提升模式或者禁用 UAC 时运行。

## 参见

`symlink()` `readlink()` `linkinfo()` `unlink()`
