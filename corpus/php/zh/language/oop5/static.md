---
id: "zh-php-syntax-language-oop5-static"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.static"
title: "静态（static）关键字"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.static.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 静态（static）关键字

> 本页说明了用 `static` 关键字来定义静态方法和属性。`static` 也可用于定义静态变量， 静态匿名函数 以及后期静态绑定。参见上述页面了解 `static` 在其中的用法。

声明类属性或方法为静态，就可以不实例化类而直接访问。可以在实例化的类对象中通过静态访问。

### 静态方法

由于静态方法不需要通过对象即可调用，所以伪变量 `$this` 在静态方法中不可用。

> 用静态方式调用一个非静态方法会抛出 `Error`。
>
> 在 PHP 8.0.0 之前，通过静态方式调用一个非静态方法这种用法已经被废弃，并且会导致一个 `E_DEPRECATED` 级别的警告。

**静态方法示例**

```php


<?php
class Foo {
    public static function aStaticMethod() {
        // ...
    }
}

Foo::aStaticMethod();
$classname = 'Foo';
$classname::aStaticMethod();
?> 

     
```

### 静态属性

静态属性使用 范围解析操作符 （ `::` ）访问，不能通过对象操作符（ `->` ）访问。

通过变量来引用一个类是可行的，但这个变量的值不能是一个保留字 （例如`self`，`parent`和 `static`）

**静态属性示例**

```php


<?php
class Foo
{
    public static $my_static = 'foo';

    public function staticValue() {
        return self::$my_static;
    }
}

class Bar extends Foo
{
    public function fooStatic() {
        return parent::$my_static;
    }
}


print Foo::$my_static . "\n";

$foo = new Foo();
print $foo->staticValue() . "\n";
print $foo->my_static . "\n";      // 未定义的 "属性" my_static

print $foo::$my_static . "\n";
$classname = 'Foo';
print $classname::$my_static . "\n";

print Bar::$my_static . "\n";
$bar = new Bar();
print $bar->fooStatic() . "\n";
?>

    
```

以上示例在 PHP 8 中的输出类似于：

```text


foo
foo

Notice: Accessing static property Foo::$my_static as non static in /in/V0Rvv on line 23

Warning: Undefined property: Foo::$my_static in /in/V0Rvv on line 23

foo
foo
foo
foo

    
```
