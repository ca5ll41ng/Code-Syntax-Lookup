---
id: "zh-php-function-function-func-get-args"
language: "php"
lang: "zh"
category: "function"
name: "func_get_args"
title: "返回一个包含函数参数列表的数组"
signature: "array func_get_args()"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.func-get-args.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个包含函数参数列表的数组

## 说明

```php
array func_get_args()
```

获取函数参数列表的数组。

该函数可以配合 `func_get_arg()` 和 `func_num_args()` 一起使用，从而使得用户自定义函数可以接受自定义个数的参数列表。

## 参数

此函数没有参数。

## 返回值

返回一个数组，其中每个元素都是目前用户自定义函数的参数列表的相应元素的副本。

## 错误／异常

在用户自定义函数外调用则会出现错误警告。

## 示例

**`func_get_args()` 例子**

```php


<?php
function foo()
{
    $numargs = func_num_args();
    echo "Number of arguments: $numargs \n";
    if ($numargs >= 2) {
        echo "Second argument is: " . func_get_arg(1) . "\n";
    }
    $arg_list = func_get_args();
    for ($i = 0; $i < $numargs; $i++) {
        echo "Argument $i is: " . $arg_list[$i] . "\n";
    }
}

foo(1, 2, 3);
?>

    
```

以上示例会输出：

```text


Number of arguments: 3 
Second argument is: 2
Argument 0 is: 1
Argument 1 is: 2
Argument 2 is: 3

    
```

**byRef 和 byVal 参数的 `func_get_args()` 示例**

```php


<?php
function byVal($arg) {
    echo 'As passed     : ', var_export(func_get_args()), PHP_EOL;
    $arg = 'baz';
    echo 'After change  : ', var_export(func_get_args()), PHP_EOL;
}

function byRef(&$arg) {
    echo 'As passed     : ', var_export(func_get_args()), PHP_EOL;
    $arg = 'baz';
    echo 'After change  : ', var_export(func_get_args()), PHP_EOL;
}

$arg = 'bar';
byVal($arg);
byRef($arg);
?>

    
```

以上示例会输出：

```text

As passed     : array (
  0 => 'bar',
)
After change  : array (
  0 => 'baz',
)
As passed     : array (
  0 => 'bar',
)
After change  : array (
  0 => 'baz',
)
    
```

## 注释

> As of PHP 8.0.0, the func_*() family of functions is intended to be mostly transparent with regard to named arguments, by treating the arguments as if they were all passed positionally, and missing arguments are replaced with their defaults. This function ignores the collection of unknown named variadic arguments. Unknown named arguments which are collected can only be accessed through the variadic parameter.

> 如果参数以引用方式传递，函数对该参数的任何改变将在函数返回后保留。As of PHP 7 the current values will also be returned if the arguments are passed by value.

> 该函数仅仅是返回传递参数的一个副本，并且不包含没有传入的默认参数。

## 参见

`...` 语法 `func_get_arg()` `func_num_args()` `ReflectionFunctionAbstract::getParameters()`
