---
id: "zh-php-function-function-debug-print-backtrace"
language: "php"
lang: "zh"
category: "function"
name: "debug_print_backtrace"
title: "打印一条回溯。"
signature: "void debug_print_backtrace(int $options = 0, int $limit = 0)"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.debug-print-backtrace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打印一条回溯。

## 说明

```php
void debug_print_backtrace(int $options = 0, int $limit = 0)
```

`debug_print_backtrace()` 打印了一条 PHP 回溯。它打印了函数调用、被 `include()`d/`require()`d 的文件和 `eval()` 的代码。

## 参数

 {{{ 

- **`$options`** — 这个参数是以下选项的位掩码： | DEBUG_BACKTRACE_IGNORE_ARGS | 是否忽略 "args" 的索引，包括所有的 function/method 的参数，能够节省内存开销。 | | --- | --- |
- **`$limit`** — 这个参数能够用于限制返回堆栈帧的数量。 默认为 (`$limit`=`0`) ，返回所有的堆栈帧。

 }}} 

## 返回值

没有返回值。

## 示例

**`debug_print_backtrace()` 范例**

```php


<?php
// include.php file

function a() {
    b();
}

function b() {
    c();
}

function c(){
    debug_print_backtrace();
}

a();

?>

      
```

```php


<?php
// 文件 test.php
// 这是你应该运行的文件

include 'include.php';
?>

     
```

以上示例的输出类似于：

```text


#0  c() called at [/tmp/include.php:10]
#1  b() called at [/tmp/include.php:6]
#2  a() called at [/tmp/include.php:17]
#3  include(/tmp/include.php) called at [/tmp/test.php:3]

     
```

## 参见

`debug_backtrace()`
