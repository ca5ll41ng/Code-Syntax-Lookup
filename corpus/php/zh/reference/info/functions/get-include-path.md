---
id: "zh-php-function-function-get-include-path"
language: "php"
lang: "zh"
category: "function"
name: "get_include_path"
title: "获取当前的 include_path 配置选项"
signature: "string|false get_include_path()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.get-include-path.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前的 include_path 配置选项

## 说明

```php
string|false get_include_path()
```

获取当前 include_path 配置选项的值。

## 参数

此函数没有参数。

## 返回值

返回字符串的路径， 或者在失败时返回 `false`。

## 示例

**`get_include_path()` 示例**

```php


<?php
echo get_include_path();

// 或使用 ini_get()
echo ini_get('include_path');
?>

    
```

## 参见

`ini_get()` `restore_include_path()` `set_include_path()` `include()`
