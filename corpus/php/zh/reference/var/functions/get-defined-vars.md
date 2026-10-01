---
id: "zh-php-function-function-get-defined-vars"
language: "php"
lang: "zh"
category: "function"
name: "get_defined_vars"
title: "返回由所有已定义变量所组成的数组"
signature: "array get_defined_vars()"
module: "var"
source_url: "https://www.php.net/manual/zh/function.get-defined-vars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回由所有已定义变量所组成的数组

## 说明

```php
array get_defined_vars()
```

此函数返回多维数组。包含调用 `get_defined_vars()` 作用域内所有已定义的变量、环境变量、服务器变量、用户定义变量列表。

## 参数

此函数没有参数。

## 返回值

包含所有变量的多维数组。

## 示例

**`get_defined_vars()` 示例**

```php


<?php
$b = array(1, 1, 2, 3, 5, 8);

$arr = get_defined_vars();

// 打印 $b
print_r($arr["b"]);

/* 打印 PHP 解释器的路径（如果用于 CGI）
 * 例如 /usr/local/bin/php */
echo $arr["_"];

// 打印命令行参数（如果有的话）
print_r($arr["argv"]);

// 打印所有服务器变量
print_r($arr["_SERVER"]);

// 打印变量数组的所有可用键
print_r(array_keys(get_defined_vars()));
?>

    
```

## 参见

`isset()` `get_defined_functions()` `get_defined_constants()`
