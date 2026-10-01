---
id: "zh-php-function-function-lchown"
language: "php"
lang: "zh"
category: "function"
name: "lchown"
title: "修改符号链接的所有者"
signature: "bool lchown(string $filename, string|int $user)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.lchown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 修改符号链接的所有者

## 说明

```php
bool lchown(string $filename, string|int $user)
```

尝试修改符号链接 `$filename` 的 所有者 `$user`

只有超级用户任意修改符号链接的所有者。

## 参数

- **`$filename`** — 文件路径。
- **`$user`** — 所有者名称或编号

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**Changing the owner of a symbolic link**

```php


<?php
$target = 'output.php';
$link = 'output.html';
symlink($target, $link);

lchown($link, 8);
?>

    
```

## 注释

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。

> 此函数未在 Windows 平台下实现。

## 参见

`chown()` `lchgrp()` `chgrp()` `chmod()`
