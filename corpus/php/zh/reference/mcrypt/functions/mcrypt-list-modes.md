---
id: "zh-php-function-function-mcrypt-list-modes"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_list_modes"
title: "获取所支持的模式"
signature: "array mcrypt_list_modes(string $lib_dir = ini_get(\"mcrypt.modes_dir\"))"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-list-modes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取所支持的模式

## 说明

```php
array mcrypt_list_modes(string $lib_dir = ini_get("mcrypt.modes_dir"))
```

获取 `$lib_dir` 中 包含的受支持的模式。

## 参数

- **`$lib_dir`** — 指定模式所在的位置。 如果未指定，将使用 php.ini 中的 `mcrypt.modes_dir` 指示所指定的位置。

## 返回值

以数组形式返回受支持的模式。

## 示例

**`mcrypt_list_modes()` 示例**

```php


<?php
    $modes = mcrypt_list_modes();

    foreach ($modes as $mode) {
        echo "$mode <br />\n";
    }
?>

   
```

本示例列出在默认目录中 所有受支持的模式。 如果在 php.ini 中未指定 `mcrypt.modes_dir`， 则使用默认的 mcrypt 库 安装目录（`/usr/local/lib/libmcrypt`）。
