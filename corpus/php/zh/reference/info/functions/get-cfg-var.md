---
id: "zh-php-function-function-get-cfg-var"
language: "php"
lang: "zh"
category: "function"
name: "get_cfg_var"
title: "获取 PHP 配置选项的值"
signature: "string|array|false get_cfg_var(string $option)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.get-cfg-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 PHP 配置选项的值

## 说明

```php
string|array|false get_cfg_var(string $option)
```

获取 PHP 配置选项 `$option` 的值。

此函数不会返回 PHP 编译的配置信息，或从 Apache 配置文件读取。

检查系统是否使用了一个配置文件，并尝试获取 cfg_file_path 的配置设置的值。如果有效，将会使用一个配置文件。

## 参数

- **`$option`** — 配置选项的名称。

## 返回值

返回 `$option` 指定的当前 PHP 配置变量的值，错误发生时返回 `false`。

## 参见

`ini_get()` `ini_get_all()`
