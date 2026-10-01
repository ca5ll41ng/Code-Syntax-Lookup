---
id: "zh-php-function-function-unset"
language: "php"
lang: "zh"
category: "function"
name: "unset"
title: "`unset()` 指定变量"
signature: "void unset(mixed $var, mixed $vars)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.unset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# `unset()` 指定变量

## 说明

```php
void unset(mixed $var, mixed $vars)
```

`unset()` 销毁指定变量。

`unset()` 在函数中的行为会依赖于想要销毁的变量的类型而有所不同。

如果在函数中 `unset()` 一个全局变量，则只是局部变量被销毁，而在调用环境中的变量将保持调用 `unset()` 之前一样的值。

**使用 `unset()`**

```php


<?php
function destroy_foo() 
{
    global $foo;
    unset($foo);
}

$foo = 'bar';
destroy_foo();
echo $foo;
?>

    
```

如果您想在函数中 `unset()` 一个全局变量，可使用 `$GLOBALS` 数组来实现：

**`unset()` 全局变量**

```php


<?php
function foo() 
{
    unset($GLOBALS['bar']);
}

$bar = "something";
foo();
?>

    
```

如果在函数中 `unset()` 一个通过引用传递的变量，则只是局部变量被销毁，而在调用环境中的变量将保持调用 `unset()` 之前一样的值。

**`unset()` 引用**

```php


<?php
function foo(&$bar) 
{
    unset($bar);
    $bar = "blah";
}

$bar = 'something';
echo "$bar\n";

foo($bar);
echo "$bar\n";
?>

    
```

如果在函数中 `unset()` 一个静态变量，那么在函数内部此静态变量将被销毁。但是，当再次调用此函数时，此静态变量将被复原为上次被销毁之前的值。

**`unset()` 静态变量**

```php


<?php
function foo()
{
    static $bar;
    $bar++;
    echo "Before unset: $bar, ";
    unset($bar);
    $bar = 23;
    echo "after unset: $bar\n";
}

foo();
foo();
foo();
?>

    
```

## 参数

- **`$var`** — 要销毁的变量。
- **`$vars`** — 更多变量。

## 返回值

没有返回值。

## 示例

**`unset()` 示例**

```php


<?php
// 销毁单个变量
unset($foo);

// 销毁单个数组元素
unset($bar['quux']);

// 销毁一个以上的变量
unset($foo1, $foo2, $foo3);
?>

    
```

## 注释

> 因为是语言构造器而不是函数，不能被 可变函数 或者 命名参数 调用。

> 它可以取消设置当前上下文中可见的对象属性。
>
> 如果已声明，则在访问未设置的属性时调用 __get()， 在设置未设置的属性时调用 __set()。

> 无法在对象里销毁 `$this`。

> 在 `unset()` 一个无法访问的对象属性时，如果定义了 __unset() 则会调用这个重载方法。

## 参见

`isset()` `empty()` __unset() `array_splice()` (unset) 强制转换
