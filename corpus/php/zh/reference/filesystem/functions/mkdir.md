---
id: "zh-php-function-function-mkdir"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "mkdir"
title: "新建目录"
signature: "bool mkdir(string $directory, int $permissions = 0777, bool $recursive = false, resource|null $context = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.mkdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 新建目录

## 说明

```php
bool mkdir(string $directory, int $permissions = 0777, bool $recursive = false, resource|null $context = null)
```

尝试新建由 `$directory` 指定的目录。

## 参数

- **`$directory`** — 目录的路径。 > 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。
- **`$permissions`** — 默认权限是 0777，意味着最大可能的访问权。有关权限的更多信息请阅读 `chmod()` 页面。
  > `$permissions` 在 Windows 下被忽略。

 — 注意也许想用八进制数指定 `$permissions`，也就是说该数应以零打头。`$permissions` 也会被当前的 umask 修改，可以用 `umask()` 来改变。
- **`$recursive`** — 如果为 `true`，还将会创建指定 `$directory` 的任何父级目录，并具有相同的权限。
- **`$context`** — 上下文流（context stream） `resource`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果创建的目录已存在，则视为错误，仍然返回 `false`。在尝试创建之前，使用 `is_dir()` 或者 `file_exists()` 检查目录是否已经存在。

## 错误／异常

目录已存在时，产生 `E_WARNING` 错误。

如果因为权限问题无法创建目录，导致 `E_WARNING` 错误。

## 示例

**`mkdir()` 例子**

```php


<?php
mkdir("/path/to/my/dir", 0700);
?>

    
```

**通过 `$recursive` 参数使用 `mkdir()`**

```php


<?php
// 期望的目录结构
$structure = './depth1/depth2/depth3/';

// 要创建嵌套结构，必须指定 mkdir()
// 的 $recursive 参数。

if (!mkdir($structure, 0777, true)) {
    die('Failed to create directories...');
}

// ...
?>

    
```

## 参见

`is_dir()` `rmdir()` `umask()`
