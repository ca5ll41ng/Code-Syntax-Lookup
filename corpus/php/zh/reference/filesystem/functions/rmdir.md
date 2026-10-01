---
id: "zh-php-function-function-rmdir"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "rmdir"
title: "删除目录"
signature: "bool rmdir(string $directory, resource|null $context = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.rmdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除目录

## 说明

```php
bool rmdir(string $directory, resource|null $context = null)
```

尝试删除 `$directory` 所指定的目录。 该目录必须是空的，而且要有相应的权限。 失败时会产生一个 `E_WARNING` 级别的错误。

## 参数

- **`$directory`** — 目录的路径。
- **`$context`** — 上下文流（context stream） `resource`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`rmdir()` 例子**

```php


<?php
if (!is_dir('examples')) {
    mkdir('examples');
}

rmdir('examples');
?>

     
```

## 参见

`is_dir()` `mkdir()` `unlink()`
