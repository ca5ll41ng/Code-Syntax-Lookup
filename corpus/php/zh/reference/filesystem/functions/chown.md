---
id: "zh-php-function-function-chown"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "chown"
title: "改变文件的所有者"
signature: "bool chown(string $filename, string|int $user)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.chown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 改变文件的所有者

## 说明

```php
bool chown(string $filename, string|int $user)
```

尝试将文件 `$filename` 的所有者改成用户 `$user`（由用户名或用户 ID 指定）。 只有超级用户可以改变文件的所有者。

## 参数

- **`$filename`** — 文件路径。
- **`$user`** — 用户名或数字。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**简单的 `chown()` 用法**

```php


<?php

// 要使用的文件名和用户名
$file_name= "foo.php";
$path = "/home/sites/php.net/public_html/sandbox/" . $file_name ;
$user_name = "root";

// 设置用户
chown($path, $user_name);

// 检测结果
$stat = stat($path);
print_r(posix_getpwuid($stat['uid']));

?>

    
```

以上示例的输出类似于：

```text


Array
(
    [name] => root
    [passwd] => x
    [uid] => 0
    [gid] => 0
    [gecos] => root
    [dir] => /root
    [shell] => /bin/bash
)

    
```

## 注释

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。

> 在 Windows 上对普通文件使用此函数会静默失败。

## 参见

`chmod()` `chgrp()`
