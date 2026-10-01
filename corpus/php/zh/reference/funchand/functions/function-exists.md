---
id: "zh-php-function-function-function-exists"
language: "php"
lang: "zh"
category: "function"
name: "function_exists"
title: "如果给定的函数已经被定义就返回 `true`"
signature: "bool function_exists(string $function)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.function-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 如果给定的函数已经被定义就返回 `true`

## 说明

```php
bool function_exists(string $function)
```

在已经定义的函数列表（包括系统自带的函数和用户自定义的函数）中查找 `$function`。

## 参数

- **`$function`** — 函数名，必须为一个字符串。

## 返回值

如果 `$function` 存在且的确是一个函数就返回 `true`，反之则返回 `false`。

> 对于语法结构的判断，例如 `include_once()` 和 `echo()` 将会返回 `false`。

## 示例

**`function_exists()` 的例子**

```php


<?php
if (function_exists('imap_open')) {
    echo "IMAP functions are available.<br />\n";
} else {
    echo "IMAP functions are not available.<br />\n";
}
?>

    
```

## 注释

> 即使函数本身由于配置或者编译选项而无法使用，该函数名也可能存在（image 就是一个现成的例子）。

## 参见

`method_exists()` `is_callable()` `get_defined_functions()` `class_exists()` `extension_loaded()`
