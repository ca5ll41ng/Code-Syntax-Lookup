---
id: "zh-php-function-function-extension-loaded"
language: "php"
lang: "zh"
category: "function"
name: "extension_loaded"
title: "检查一个扩展是否已经加载"
signature: "bool extension_loaded(string $extension)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.extension-loaded.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查一个扩展是否已经加载

## 说明

```php
bool extension_loaded(string $extension)
```

检查一个扩展是否已经加载。

## 参数

- **`$extension`** — 扩展名称，大小写不敏感。 — 你可以用 `phpinfo()` 来查看一系列扩展名称，而在 `CGI` 或 `CLI` 的 PHP 版本里你可以使用 -m 参数来列出所有有效的扩展： ```text $ php -m [PHP Modules] xml tokenizer standard sockets session posix pcre overload mysql mbstring ctype [Zend Modules] ```

## 返回值

如果 `$extension` 指定的扩展已加载，返回 `true`，否则返回 `false`。

## 示例

**`extension_loaded()` 示例**

```php


<?php
if (!extension_loaded('gd')) {
    if (!dl('gd.so')) {
        exit;
    }
}
?>

    
```

## 参见

`get_loaded_extensions()` `get_extension_funcs()` `phpinfo()` `dl()` `function_exists()`
