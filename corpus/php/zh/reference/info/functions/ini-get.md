---
id: "zh-php-function-function-ini-get"
language: "php"
lang: "zh"
category: "function"
name: "ini_get"
title: "获取一个配置选项的值"
signature: "string|false ini_get(string $option)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.ini-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个配置选项的值

## 说明

```php
string|false ini_get(string $option)
```

成功时返回配置选项的值。

## 参数

- **`$option`** — 配置选项名称。

## 返回值

成功是返回配置选项值的字符串，`null` 的值则返回空字符串。如果配置选项不存在，将会返回 `false`。

## 示例

**一些 `ini_get()` 示例**

```php


<?php

/*
我们的 php.ini 包含了以下的设置：

display_errors = On
opcache.enable_cli = Off
post_max_size = 8M
*/

echo 'display_errors = ' . ini_get('display_errors') . "\n";
echo 'opcache.enable_cli = ' . (int) ini_get('opcache.enable_cli') . "\n";
echo 'post_max_size = ' . ini_get('post_max_size') . "\n";
echo 'post_max_size + 1 = ' . (rtrim(ini_get('post_max_size'), 'KMG') + 1) . "\n";
echo 'post_max_size in bytes = ' . ini_parse_quantity(ini_get('post_max_size'));
?>

    
```

以上示例的输出类似于：

```text



display_errors = 1
opcache.enable_cli = 0
post_max_size = 8M
post_max_size+1 = 9
post_max_size in bytes = 8388608


    
```

## 注释

> 当查询一个 boolean 值
>
> 一个 `off` 的 boolean ini 值将会以空字符串或者 "0" 返回；`on` 的 ini 值会以 "1" 返回。 此函数也会返回 INI 值的文字字符串。

> 当查询一个内存尺寸的值
>
> 许多内存尺寸的 ini 值，类似 upload_max_filesize 是以简写表示法储存在 php.ini 文件里。 `ini_get()` 会返回 php.ini 文件中储存的确切字符串，而*不是*它的等量 `int`。 尝试对这些值进行正常的算术运算将不会得到预期的结果。 `ini_parse_quantity()` 函数可以用来将简写表示法转换为字节。

> `ini_get()` 无法读取 "array" 的 ini 选项， 例如 `pdo.dsn.{*}`， 在这个示例中会返回 `false`。

## 参见

`get_cfg_var()` `ini_get_all()` `ini_parse_quantity()` `ini_restore()` `ini_set()`
