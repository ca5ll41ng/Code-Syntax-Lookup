---
id: "zh-php-function-function-rename"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1,2]}
name: "rename"
title: "重命名一个文件或目录"
signature: "bool rename(string $from, string $to, resource|null $context = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.rename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重命名一个文件或目录

## 说明

```php
bool rename(string $from, string $to, resource|null $context = null)
```

尝试把 `$from` 重命名为 `$to`，必要时会在不同目录间移动。 如果重命名文件时 `$to` 已经存在，将会覆盖掉它。 如果重命名文件夹时 `$to` 已经存在，本函数将导致一个警告。

## 参数

- **`$from`** — 原名
  > 用于 `$from` 中的封装协议*必须*和用于 `$to` 中的相匹配。


- **`$to`** — 新的名字。 > 在 Windows 上，如果 `$to` 已经存在，它必须是可写的。 否则 `rename()` 将失败，并导致 `E_WARNING`。
- **`$context`** — 上下文流（context stream） `resource`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`rename()` 例子**

```php


<?php
rename("/tmp/tmp_file.txt", "/home/user/login/docs/my_file.txt");
?>

    
```

## 参见

`copy()` `unlink()` `move_uploaded_file()`
