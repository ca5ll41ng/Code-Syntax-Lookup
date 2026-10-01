---
id: "zh-php-function-function-func-get-arg"
language: "php"
lang: "zh"
category: "function"
name: "func_get_arg"
title: "返回参数列表的某一项"
signature: "mixed func_get_arg(int $position)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.func-get-arg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回参数列表的某一项

## 说明

```php
mixed func_get_arg(int $position)
```

从用户自定义函数的参数列表中获取某个指定的参数。

该函数可以配合 `func_get_args()` 和 `func_num_args()` 一起使用，从而使得用户自定义函数可以接受自定义个数的参数列表。

## 参数

- **`$position`** — 参数的偏移量。函数的参数是从 0 开始计数的。

## 返回值

返回指定的参数，错误则返回 `false`。

## 错误／异常

当在自定义函数的外面调用的该函数的时候会发出一个警告， 或者是当 `$position` 比实际传入的参数的数目大的时候也会发出一个警告。

## 示例

**`func_get_arg()` 例子**

```php


<?php
function foo()
{
     $numargs = func_num_args();
     echo "Number of arguments: $numargs\n";
     if ($numargs >= 2) {
         echo "Second argument is: " . func_get_arg(1) . "\n";
     }
}

foo(1, 2, 3);
?>

    
```

以上示例会输出：

```text


Number of arguments: 3
Second argument is: 2

    
```

**byRef 和 byVal 参数的 `func_get_arg()` 示例**

```php


<?php
function byVal($arg) {
    echo 'As passed     : ', var_export(func_get_arg(0)), PHP_EOL;
    $arg = 'baz';
    echo 'After change  : ', var_export(func_get_arg(0)), PHP_EOL;
}

function byRef(&$arg) {
    echo 'As passed     : ', var_export(func_get_arg(0)), PHP_EOL;
    $arg = 'baz';
    echo 'After change  : ', var_export(func_get_arg(0)), PHP_EOL;
}

$arg = 'bar';
byVal($arg);
byRef($arg);
?>

    
```

以上示例会输出：

```text

As passed     : 'bar'
After change  : 'baz'
As passed     : 'bar'
After change  : 'baz'
    
```

## 注释

> As of PHP 8.0.0, the func_*() family of functions is intended to be mostly transparent with regard to named arguments, by treating the arguments as if they were all passed positionally, and missing arguments are replaced with their defaults. This function ignores the collection of unknown named variadic arguments. Unknown named arguments which are collected can only be accessed through the variadic parameter.

> 如果参数以引用方式传递，函数对该参数的任何改变将在函数返回后保留。As of PHP 7 the current values will also be returned if the arguments are passed by value.

> 此函数仅返回传递参数的副本，不会考虑默认（未传递）参数。

## 参见

`...` 语法 `func_get_args()` `func_num_args()`
