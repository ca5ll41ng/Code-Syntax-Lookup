---
id: "zh-php-function-function-debug-backtrace"
language: "php"
lang: "zh"
category: "function"
name: "debug_backtrace"
title: "产生一条回溯跟踪(backtrace)"
signature: "array debug_backtrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT, int $limit = 0)"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.debug-backtrace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 产生一条回溯跟踪(backtrace)

## 说明

```php
array debug_backtrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT, int $limit = 0)
```

`debug_backtrace()` 产生一条 PHP 的回溯跟踪(backtrace)。

## 参数

 {{{ 

- **`$options`** — 这个参数是以下选项的位掩码： | DEBUG_BACKTRACE_PROVIDE_OBJECT | 是否填充 "object" 的索引。 | | --- | --- | | DEBUG_BACKTRACE_IGNORE_ARGS | 是否忽略 "args" 的索引，包括所有的 function/method 的参数，能够节省内存开销。 | > 有四种可能的组合： > > | debug_backtrace() | 两个索引都有 | > | --- | --- | > | debug_backtrace(DEBUG_BACKTRACE_PROVIDE_OBJECT) | > | debug_backtrace(1) | > | debug_backtrace(0) | 忽略索引 `"object"` 和填充索引 `"args"`。 | > | debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS) | 忽略索引 `"object"` *和* 索引 `"args"`。 | > | debug_backtrace(2) | > | debug_backtrace(DEBUG_BACKTRACE_PROVIDE_OBJECT\|DEBUG_BACKTRACE_IGNORE_ARGS) | 填充索引 `"object"` *和*忽略索引 `"args"`。 | > | debug_backtrace(3) |
- **`$limit`** — 这个参数能够用于限制返回堆栈帧的数量。默认为（`$limit`=`0`），返回所有的堆栈帧。

 }}} 

## 返回值

返回一个包含众多关联数组的 `array`。 以下为有可能返回的元素：

| 名字 | 类型 | 说明 |
| --- | --- | --- |
| function | `string` | 当前的函数名，参见：__FUNCTION__。 |
| line | `int` | 当前的行号。参见：__LINE__。 |
| file | `string` | 当前的文件名。参见：__FILE__。 |
| class | `string` | 当前 class 的名称。参见__CLASS__ |
| object | `object` | 当前的 object。 |
| type | `string` | 当前调用的类型。如果是一个方法，会返回 "->"。如果是一个静态方法，会返回 "::"。如果是一个函数调用，则返回空。 |
| args | `array` | 如果在一个函数里，这会列出函数的参数。如果是在一个被包含的文件里，会列出包含的文件名。 |

## 示例

**`debug_backtrace()` 范例**

```php


<?php
// filename: /tmp/a.php

function a_test($str)
{
    echo "\nHi: $str";
    var_dump(debug_backtrace());
}

a_test('friend');
?>

<?php
// filename: /tmp/b.php
include_once '/tmp/a.php';
?>

    
```

执行 `/tmp/b.php` 返回的结果类似于以下：

```text


Hi: friend
array(2) {
[0]=>
array(4) {
    ["file"] => string(10) "/tmp/a.php"
    ["line"] => int(10)
    ["function"] => string(6) "a_test"
    ["args"]=>
    array(1) {
      [0] => &string(6) "friend"
    }
}
[1]=>
array(4) {
    ["file"] => string(10) "/tmp/b.php"
    ["line"] => int(2)
    ["args"] =>
    array(1) {
      [0] => string(10) "/tmp/a.php"
    }
    ["function"] => string(12) "include_once"
  }
}

    
```

## 参见

`trigger_error()` `debug_print_backtrace()`
