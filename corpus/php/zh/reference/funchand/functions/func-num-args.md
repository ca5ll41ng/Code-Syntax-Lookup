---
id: "zh-php-function-function-func-num-args"
language: "php"
lang: "zh"
category: "function"
name: "func_num_args"
title: "返回传递给函数的参数数量"
signature: "int func_num_args()"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.func-num-args.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回传递给函数的参数数量

## 说明

```php
int func_num_args()
```

获取传递给函数的参数数量。

此函数可以与 `func_get_arg()` 和 `func_get_args()` 结合使用，以便于允许用户定义的函数可以接受可变长度的参数列表。

## 参数

此函数没有参数。

## 返回值

返回传递给当前用户定义函数的参数数量。

## 错误／异常

如果从用户定义的函数外部调用，则生成警告。

## 示例

**`func_num_args()` 示例**

```php



<?php
function foo()
{
    echo "Number of arguments: ", func_num_args(), PHP_EOL;
}

foo(1, 2, 3);   
?>

    
```

以上示例会输出：

```text


Number of arguments: 3

    
```

## 注释

> As of PHP 8.0.0, the func_*() family of functions is intended to be mostly transparent with regard to named arguments, by treating the arguments as if they were all passed positionally, and missing arguments are replaced with their defaults. This function ignores the collection of unknown named variadic arguments. Unknown named arguments which are collected can only be accessed through the variadic parameter.

## 参见

`...` 语法 `func_get_arg()` `func_get_args()` `ReflectionFunctionAbstract::getNumberOfParameters()`
