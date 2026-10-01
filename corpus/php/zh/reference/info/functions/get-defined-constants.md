---
id: "zh-php-function-function-get-defined-constants"
language: "php"
lang: "zh"
category: "function"
name: "get_defined_constants"
title: "返回所有常量的关联数组，键是常量名，值是常量值"
signature: "array get_defined_constants(bool $categorize = false)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.get-defined-constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回所有常量的关联数组，键是常量名，值是常量值

## 说明

```php
array get_defined_constants(bool $categorize = false)
```

返回当前所有已定义的常量名和值。 这包含 `define()` 函数所创建的，也包含了所有扩展所创建的。

## 参数

- **`$categorize`** — 让此函数返回一个多维数组，分类为第一维的键名，常量和它们的值位于第二维。 ```php <?php define("MY_CONSTANT", 1); print_r(get_defined_constants(true)); ?> ``` 以上示例的输出类似于： ```text Array ( [Core] => Array ( [E_ERROR] => 1 [E_WARNING] => 2 [E_PARSE] => 4 [E_NOTICE] => 8 [E_CORE_ERROR] => 16 [E_CORE_WARNING] => 32 [E_COMPILE_ERROR] => 64 [E_COMPILE_WARNING] => 128 [E_USER_ERROR] => 256 [E_USER_WARNING] => 512 [E_USER_NOTICE] => 1024 [E_ALL] => 2047 [TRUE] => 1 ) [pcre] => Array ( [PREG_PATTERN_ORDER] => 1 [PREG_SET_ORDER] => 2 [PREG_OFFSET_CAPTURE] => 256 [PREG_SPLIT_NO_EMPTY] => 1 [PREG_SPLIT_DELIM_CAPTURE] => 2 [PREG_SPLIT_OFFSET_CAPTURE] => 4 [PREG_GREP_INVERT] => 1 ) [user] => Array ( [MY_CONSTANT] => 1 ) ) ```

## 返回值

返回的数组为 常量名 => 常量值，也可以按注册变量的扩展名称来分组。

## 示例

**`get_defined_constants()` 示例**

```php


<?php
print_r(get_defined_constants());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [E_ERROR] => 1
    [E_WARNING] => 2
    [E_PARSE] => 4
    [E_NOTICE] => 8
    [E_CORE_ERROR] => 16
    [E_CORE_WARNING] => 32
    [E_COMPILE_ERROR] => 64
    [E_COMPILE_WARNING] => 128
    [E_USER_ERROR] => 256
    [E_USER_WARNING] => 512
    [E_USER_NOTICE] => 1024
    [E_ALL] => 2047
    [TRUE] => 1
)

    
```

## 参见

`defined()` `constant()` `get_loaded_extensions()` `get_defined_functions()` `get_defined_vars()`
