---
id: "zh-php-function-function-call-user-func-array"
language: "php"
lang: "zh"
category: "function"
name: "call_user_func_array"
title: "调用回调函数，并把一个数组参数作为回调函数的参数"
signature: "mixed call_user_func_array(callable $callback, array $args)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.call-user-func-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用回调函数，并把一个数组参数作为回调函数的参数

## 说明

```php
mixed call_user_func_array(callable $callback, array $args)
```

把第一个参数作为回调函数（`$callback`）调用，把参数数组作（`$args`）为回调函数的的参数传入。

## 参数

- **`$callback`** — 被调用的回调函数。
- **`$args`** — 要被传入回调函数的数组。 — 如果 `$args` 的 key 都是数字，则会忽略 key，并按顺序将每个元素作为位置参数传递给 `$callback` 。 — 如果 `$args` 的任一 key 是字符串，则这些元素将作为命名参数传递给 `$callback`，名称由 key 指定。 — 在 `$args` 中，如果数字 key 在 字符串 key 之后出现，或者字符串 key 与 `$callback` 的任何参数名称不匹配，将会导致 fatal error。

## 返回值

返回回调函数的结果。如果出错的话就返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$args` 键现在将被解释为参数名称，而不是被默默地忽略。 |

## 示例

**`call_user_func_array()`例子**

```php


<?php
function foobar($arg, $arg2) {
    echo __FUNCTION__, " got $arg and $arg2\n";
}
class foo {
    function bar($arg, $arg2) {
        echo __METHOD__, " got $arg and $arg2\n";
    }
}


// Call the foobar() function with 2 arguments
call_user_func_array("foobar", array("one", "two"));

// Call the $foo->bar() method with 2 arguments
$foo = new foo;
call_user_func_array(array($foo, "bar"), array("three", "four"));
?>

    
```

以上示例的输出类似于：

```text


foobar got one and two
foo::bar got three and four

    
```

**`call_user_func_array()`使用命名空间的情况**

```php


<?php

namespace Foobar;

class Foo {
    static public function test($name) {
        print "Hello {$name}!\n";
    }
}

call_user_func_array(__NAMESPACE__ .'\Foo::test', array('Hannes'));

call_user_func_array(array(__NAMESPACE__ .'\Foo', 'test'), array('Philip'));

?>

    
```

以上示例的输出类似于：

```text


Hello Hannes!
Hello Philip!

    
```

**把完整的函数作为回调传入`call_user_func_array()`**

```php


<?php

$func = function($arg1, $arg2) {
    return $arg1 * $arg2;
};

var_dump(call_user_func_array($func, array(2, 4)));

?>

    
```

以上示例会输出：

```text


int(8)

    
```

**传引用**

```php


<?php

function mega(&$a){
    $a = 55;
    echo "function mega \$a=$a\n";
}
$bar = 77;
call_user_func_array('mega',array(&$bar));
echo "global \$bar=$bar\n";

?>

    
```

以上示例会输出：

```text


function mega $a=55
global $bar=55

    
```

**`call_user_func_array()` 使用命名参数**

```php


<?php
function foobar($first, $second) {
    echo __FUNCTION__, " got $first and $second\n";
}

// Call the foobar() function with named arguments in non-positional order
call_user_func_array("foobar", array("second" => "two", "first" => "one"));

// Call the foobar() function with one named argument
call_user_func_array("foobar", array("foo", "second" => "bar"));

// Fatal error: Cannot use positional argument after named argument
call_user_func_array("foobar", array("first" => "one", "bar"));

?>

    
```

以上示例的输出类似于：

```text


foobar got one and two
foobar got foo and bar

Fatal error: Uncaught Error: Cannot use positional argument after named argument

    
```

## 注释

> 在函数中注册有多个回调内容时(如使用 `call_user_func()` 与 `call_user_func_array()`)，如在前一个回调中有未捕获的异常，其后的将不再被调用。

## 参见

`call_user_func()` `ReflectionFunction::invokeArgs()` `ReflectionMethod::invokeArgs()`
