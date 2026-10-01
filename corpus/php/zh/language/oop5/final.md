---
id: "zh-php-syntax-language-oop5-final"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.final"
title: "Final 关键字"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.final.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Final 关键字

final 关键字通过在定义方法、属性和常量之前加上 `final` 来防止被子类覆盖。 如果一个类被声明为 final，则不能被继承。

**Final 方法示例**

```php


<?php
class BaseClass {
   public function test() {
       echo "BaseClass::test() called\n";
   }
   
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called\n";
   }
}

class ChildClass extends BaseClass {
   public function moreTesting() {
       echo "ChildClass::moreTesting() called\n";
   }
}
// 产生 Fatal error: Cannot override final method BaseClass::moreTesting()
?> 

    
```

**Final 类示例**

```php


<?php
final class BaseClass {
   public function test() {
       echo "BaseClass::test() called\n";
   }
   
   // 由于类已经是 final，所以 final 关键字是多余的
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called\n";
   }
}

class ChildClass extends BaseClass {
}
// 产生 Fatal error: Class ChildClass may not inherit from final class (BaseClass)
?> 

    
```

**PHP 8.4.0 起可用的 final 属性示例**

```php


<?php
class BaseClass {
   final protected string $test;
}

class ChildClass extends BaseClass {
    public string $test;
}
// Results in Fatal error: Cannot override final property BaseClass::$test
?>

  
```

**PHP 8.1.0 起可用的 final 常量示例**

```php


<?php
class Foo
{
    final public const X = "foo";
}

class Bar extends Foo
{
    public const X = "bar";
}

// Fatal error: Bar::X cannot override final constant Foo::X
?>

  
```

> 从 PHP 8.0.0 起，除了构造函数之外，私有方法也不能声明为 final 。
>
> 声明为 `private(set)` 的属性是隐式的 `final`。
