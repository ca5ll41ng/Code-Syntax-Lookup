---
id: "zh-php-function-function-forward-static-call"
language: "php"
lang: "zh"
category: "function"
name: "forward_static_call"
title: "调用静态方法"
signature: "mixed forward_static_call(callable $callback, mixed $args)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.forward-static-call.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用静态方法

## 说明

```php
mixed forward_static_call(callable $callback, mixed $args)
```

使用以下参数，调用通过 `$callback` 参数给出的用户定义的函数或者方法。此函数必须在方法上下文中调用，不能在类外调用。它使用后期静态绑定

## 参数

- **`$callback`** — 要调用的函数或者方法。此参数可以是带类名及方法的 `array` 或者带函数名的 `string`。
- **`$args`** — 要传递给函数的零到多个参数。

## 返回值

返回函数结果，失败时返回 `false`。

## 示例

**`forward_static_call()` 示例**

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
        forward_static_call(array('A', 'test'), 'more', 'args');
        forward_static_call( 'test', 'other', 'args');
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

`forward_static_call_array()` `call_user_func_array()` `call_user_func()` `is_callable()`
