---
id: "zh-php-function-function-lchgrp"
language: "php"
lang: "zh"
category: "function"
name: "lchgrp"
title: "修改符号链接的所有组"
signature: "bool lchgrp(string $filename, string|int $group)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.lchgrp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 修改符号链接的所有组

## 说明

```php
bool lchgrp(string $filename, string|int $group)
```

尝试修改符号链接 `$filename` 的所有组 `$group`

只有超级用户可以任意修改符号链接的所有组;其他用户可能需要有修改目标组的权限才能修改至目标所有组。

## 参数

- **`$filename`** — 符号链接路径
- **`$group`** — 所有组的名字或者编号

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**更改符号链接的所有组**

```php


<?php
$target = 'output.php';
$link = 'output.html';
symlink($target, $link);

lchgrp($link, 8);
?>

    
```

## 注释

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。

> 此函数未在 Windows 平台下实现。

## 参见

`chgrp()` `lchown()` `chown()` `chmod()`
