---
id: "zh-php-function-function-get-loaded-extensions"
language: "php"
lang: "zh"
category: "function"
name: "get_loaded_extensions"
title: "返回所有编译并加载模块名的 array"
signature: "array get_loaded_extensions(bool $zend_extensions = false)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.get-loaded-extensions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回所有编译并加载模块名的 array

## 说明

```php
array get_loaded_extensions(bool $zend_extensions = false)
```

该函数返回了 PHP 解析器里所有编译并加载的模块名。

## 参数

- **`$zend_extensions`** — 只返回 Zend 扩展，并非类似 mysqli 的普通扩展。默认是 `false` (返回普通扩展)。

## 返回值

返回所有模块名的一个索引数组(array)。

## 示例

**`get_loaded_extensions()` 示例**

```php


<?php
print_r(get_loaded_extensions());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => Core
    [1] => date
    [2] => libxml
    [3] => pcre
    [4] => sqlite3
    [5] => zlib
    [6] => ctype
    [7] => dom
    [8] => fileinfo
    [9] => filter
    [10] => hash
    [11] => json
    [12] => mbstring
    [13] => SPL
    [14] => PDO
    [15] => session
    [16] => posix
    [17] => Reflection
    [18] => standard
    [19] => SimpleXML
    [20] => pdo_sqlite
    [21] => Phar
    [22] => tokenizer
    [23] => xml
    [24] => xmlreader
    [25] => xmlwriter
    [26] => gmp
    [27] => iconv
    [28] => intl
    [29] => bcmath
    [30] => sodium
    [31] => Zend OPcache
)

    
```

## 参见

`get_extension_funcs()` `extension_loaded()` `dl()` `phpinfo()`
