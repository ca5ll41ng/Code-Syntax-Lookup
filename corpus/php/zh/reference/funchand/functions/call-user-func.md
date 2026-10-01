---
id: "zh-php-function-function-call-user-func"
language: "php"
lang: "zh"
category: "function"
name: "call_user_func"
title: "把第一个参数作为回调函数调用"
signature: "mixed call_user_func(callable $callback, mixed $args)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.call-user-func.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 把第一个参数作为回调函数调用

## 说明

```php
mixed call_user_func(callable $callback, mixed $args)
```

第一个参数 `$callback` 是被调用的回调函数，其余参数是回调函数的参数。

## 参数

- **`$callback`** — 将被调用的回调函数（`callable`）。
- **`$args`** — 0个或以上的参数，被传入回调函数。
  > 请注意，传入`call_user_func()`的参数不能为引用传递。
  >
  > **`call_user_func()` 的参考例子**
  >
  > ```php
  >
  >
  > <?php
  > error_reporting(E_ALL);
  > function increment(&$var)
  > {
  >     $var++;
  > }
  >
  > $a = 0;
  > call_user_func('increment', $a);
  > echo $a."\n";
  >
  > // it is possible to use this instead
  > call_user_func_array('increment', array(&$a));
  > echo $a."\n";
  >
  > // it is also possible to use a variable function
  > $increment = 'increment';
  > $increment($a);
  > echo $a."\n";
  > ?>
  >
  >          
  > ```
  >
  > 以上示例会输出：
  >
  > ```text
  >
  >
  > Warning: Parameter 1 to increment() expected to be a reference, value given in …
  > 0
  > 1
  > 2
  >
  >          
  > ```



## 返回值

返回回调函数的返回值。

## 示例

**`call_user_func()` 的例子**

```php


<?php
function barber($type)
{
    echo "You wanted a $type haircut, no problem\n";
}
call_user_func('barber', "mushroom");
call_user_func('barber', "shave");
?>

    
```

以上示例会输出：

```text


You wanted a mushroom haircut, no problem
You wanted a shave haircut, no problem

    
```

**`call_user_func()` 命名空间的使用**

```php


<?php

namespace Foobar;

class Foo {
    static public function test() {
        print "Hello world!\n";
    }
}

call_user_func(__NAMESPACE__ .'\Foo::test');
call_user_func(array(__NAMESPACE__ .'\Foo', 'test'));

?>

    
```

以上示例会输出：

```text


Hello world!
Hello world!

    
```

**用`call_user_func()`来调用一个类里面的方法**

```php


<?php

class myclass {
    static function say_hello()
    {
        echo "Hello!\n";
    }
}

$classname = "myclass";

call_user_func(array($classname, 'say_hello'));
call_user_func($classname .'::say_hello');

$myobject = new myclass();

call_user_func(array($myobject, 'say_hello'));

?>

    
```

以上示例会输出：

```text


Hello!
Hello!
Hello!

    
```

**把完整的函数作为回调传入`call_user_func()`**

```php


<?php
call_user_func(function($arg) { print "[$arg]\n"; }, 'test');
?>

    
```

以上示例会输出：

```text


[test]

    
```

## 注释

> 在函数中注册有多个回调内容时(如使用 `call_user_func()` 与 `call_user_func_array()`)，如在前一个回调中有未捕获的异常，其后的将不再被调用。

## 参见

`call_user_func_array()` `is_callable()` Variable functions `ReflectionFunction::invoke()` `ReflectionMethod::invoke()`
