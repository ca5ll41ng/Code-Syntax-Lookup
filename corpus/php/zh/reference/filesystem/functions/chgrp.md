---
id: "zh-php-function-function-chgrp"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "chgrp"
title: "改变文件所属的组"
signature: "bool chgrp(string $filename, string|int $group)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.chgrp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 改变文件所属的组

## 说明

```php
bool chgrp(string $filename, string|int $group)
```

尝试将文件 `$filename` 所属的组改成 `$group`（通过组名或组 ID 指定）。

只有超级用户可以任意修改文件的组，其它用户可能只能将文件的组改成该用户自己所在的组。

## 参数

- **`$filename`** — 文件的路径。
- **`$group`** — 组的名称或数字。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**改变文件所属的组**

```php


<?php
$filename = 'shared_file.txt';
$format = "%s's Group ID @ %s: %d\n";
printf($format, $filename, date('r'), filegroup($filename));
chgrp($filename, 8);
clearstatcache(); // 不要缓存 filegroup() 结果
printf($format, $filename, date('r'), filegroup($filename));
?>

    
```

## 注释

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。

> 在 Windows 上，此函数应用在常规文件时会默默失败。

## 参见

`chown()` `chmod()`
