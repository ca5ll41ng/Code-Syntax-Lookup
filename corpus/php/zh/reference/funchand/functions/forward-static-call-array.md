---
id: "zh-php-function-function-forward-static-call-array"
language: "php"
lang: "zh"
category: "function"
name: "forward_static_call_array"
title: "调用静态方法且参数作为数组传递"
signature: "mixed forward_static_call_array(callable $callback, array $args)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.forward-static-call-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用静态方法且参数作为数组传递

## 说明

```php
mixed forward_static_call_array(callable $callback, array $args)
```

通过 `$callback` 参数指定调用用户定义的函数或者方法。此函数必须在方法上下文中调用，不能在类外使用。它使用后期静态绑定。转发方法的所有参数都作为值和数组传递，类似于 `call_user_func_array()`。

## 参数

- **`$callback`** — 要调用的函数或者方法。此参数可以是带类名及方法的 `array` 或者带函数名的 `string`。
- **`$args`** — 参数，将所有方法参数聚合到一个数组中。
  > 注意 `forward_static_call_array()` 的参数不是通过引用传递的。



## 返回值

返回函数的结果，失败时返回 `false`。

## 示例

**`forward_static_call_array()` 示例**

```php


<?php

class A
{
    const NAME = 'A';
    public static function test() {
        $args = func_get_args();
        echo static::NAME, " ".join(',', $args)." \n";
    }
}

class B extends A
{
    const NAME = 'B';

    public static function test() {
        echo self::NAME, "\n";
        forward_static_call_array(array('A', 'test'), array('more', 'args'));
        forward_static_call_array( 'test', array('other', 'args'));
    }
}

B::test('foo');

function test() {
        $args = func_get_args();
        echo "C ".join(',', $args)." \n";
    }

?>

    
```

以上示例会输出：

```text


B
B more,args 
C other,args

    
```

## 参见

`forward_static_call()` `call_user_func()` `call_user_func_array()` `is_callable()`
