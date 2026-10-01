---
id: "zh-php-syntax-language-types-callable"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.callable"
title: "Callable"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.callable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Callable

callable 是对函数或方法的引用，作为参数传递给其他函数，使用 `callable` 类型声明来表示。

 
```php

<?php
function foo(callable $callback) {
    $callback();
}
?>

  
```

 

一些函数接受回调函数作为参数，例如 `array_map()`、`usort()` 或 `preg_replace_callback()`。

### callable 的创建

callable 是一种表示可调用内容的类型。Callable 可作为参数传递给需要回调参数的函数或方法，也可直接调用。`callable` 类型不能用于类属性的类型声明，此时应使用 `Closure` 类型声明。

Callable 可通过多种方式创建：

- `Closure` 对象
- 包含函数名或方法名的 `string`
- 索引 0 为类名或者 `object`，索引 1 是方法名的 `array`
- 实现了 __invoke() 魔术方法的 `object`

`Closure` 对象可通过匿名函数语法、箭头函数语法、一级可调用语法，或 `Closure::fromCallable()` 方法创建。

> 一级可调用语法 仅自 PHP 8.1.0 起可用。

**使用 `Closure` 的 Callback 示例**

```php


<?php
// 使用匿名函数语法
$double1 = function ($a) {
    return $a * 2;
};

// 使用一级可调用语法
function double_function($a) {
    return $a * 2;
}
$double2 = double_function(...);

// 使用箭头函数语法
$double3 = fn($a) => $a * 2;

// 使用 Closure::fromCallable
$double4 = Closure::fromCallable('double_function');

// 此处使用 closure 作为回调，将范围内每个元素的值翻倍。
$new_numbers = array_map($double1, range(1, 5));
print implode(' ', $new_numbers) . PHP_EOL;

$new_numbers = array_map($double2, range(1, 5));
print implode(' ', $new_numbers) . PHP_EOL;

$new_numbers = array_map($double3, range(1, 5));
print implode(' ', $new_numbers) . PHP_EOL;

$new_numbers = array_map($double4, range(1, 5));
print implode(' ', $new_numbers);

?>

   
```

以上示例在 PHP 8.1 中的输出：

```text


2 4 6 8 10
2 4 6 8 10
2 4 6 8 10
2 4 6 8 10

   
```

callable 也可以是包含函数名或静态方法名的字符串。除语言结构（如 `array()`、`echo()`、`empty()`、`eval()`、`isset()`、`list()`、`print()` 或 `unset()`）外，任何内置或用户自定义函数均可使用。

静态类方法可在不实例化该类 `object` 的情况下使用，方式包括：创建数组，其中索引 0 为类名，索引 1 为方法名；或使用作用域解析运算符 `::` 的特殊语法，例如 `'ClassName::methodName'`。

已实例化 `object` 的方法在以数组形式提供时可作为 callable，其中索引 0 为该 `object`，索引 1 为方法名。

`Closure` 对象与 `callable` 类型的主要区别在于，`Closure` 对象与作用域无关，始终可直接调用，而 callable 类型可能依赖于作用域，不一定能直接调用。创建 callable 时，推荐使用 `Closure`。

> `Closure` 对象绑定于其创建时所在的作用域，而以字符串或数组形式引用类方法的 callable 则在其被调用的作用域中解析。若需从 private 或 protected 方法创建可在类作用域外部调用的可调用项，应使用 `Closure::fromCallable()` 或一级可调用语法。

PHP 允许创建 callable，可用作回调参数，但无法直接调用。它们是上下文相关的 callable，引用类继承层次中的某个类方法，例如 `'parent::method'` 或 `["static", "method"]`。

> 自 PHP 8.2.0 起，已弃用上下文相关的 callable 。应通过将 `'parent::method'` 替换为 `parent::class . '::method'`，或使用一级可调用语法，以消除上下文依赖。

**使用 `call_user_function()` 调用各类 callable**

```php


<?php

// callback 函数示例
function my_callback_function() {
    echo 'hello world!', PHP_EOL;
}

// callback 方法示例
class MyClass {
    static function myCallbackMethod() {
        echo 'Hello World!', PHP_EOL;
    }
}

// 类型 1：简单回调
call_user_func('my_callback_function');

// 类型2：静态类方法回调
call_user_func(['MyClass', 'myCallbackMethod']);

// 类型 3：对象方法回调
$obj = new MyClass();
call_user_func([$obj, 'myCallbackMethod']);

// 类型 4：静态类方法回调
call_user_func('MyClass::myCallbackMethod');

// 类型 5：使用 ::class 关键字的静态类方法回调
call_user_func([MyClass::class, 'myCallbackMethod']);

// 类型 6：相对静态类方法调用
class A {
    public static function who() {
        echo 'A', PHP_EOL;
    }
}

class B extends A {
    public static function who() {
        echo 'B', PHP_EOL;
    }
}

call_user_func(['B', 'parent::who']); // 自 PHP 8.2.0 起弃用

// 类型 7：实现 __invoke 的对象用于 callable
class C {
    public function __invoke($name) {
        echo 'Hello ', $name;
    }
}

$c = new C();
call_user_func($c, 'PHP!');
?>

   
```

以上示例会输出：

```text


hello world!
Hello World!
Hello World!
Hello World!
Hello World!

Deprecated: Callables of the form ["B", "parent::who"] are deprecated in script on line 41
A
Hello PHP!

   
```

> 在函数中注册有多个回调内容时(如使用 `call_user_func()` 与 `call_user_func_array()`)，如在前一个回调中有未捕获的异常，其后的将不再被调用。
