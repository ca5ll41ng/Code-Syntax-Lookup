---
id: "zh-php-syntax-language-oop5-inheritance"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.inheritance"
title: "对象继承"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.inheritance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对象继承

继承已为大家所熟知的一个程序设计特性，PHP 的对象模型也使用了继承。继承将会影响到类与类，对象与对象之间的关系。

比如，当扩展一个类，子类就会继承父类所有 public 和 protected 的方法，属性和常量。除非子类覆盖了父类的方法，被继承的方法都会保留其原有功能。

继承有助于功能的设计和抽象，在实现类似的对象、增加新功能时，无须重复编写这些公用的功能。

子类无法访问父类的私有方法。因此，子类无需考虑正常的继承规则而重新实现私有方法。 然而，在 PHP 8.0.0 之前， `final` 和 `static` 的限制会应用于 private 方法。 从 PHP 8.0.0 开始，仅 `private final` 的构造器是唯一受限的 private 方法； 想要“禁用”构造器，我们通常用静态工厂方法作为代替。

方法，属性和常量的 可见性 可以放宽，例如 `protected` 方法可以标记为 `public`， 但不能增加限制，例如标记 `public` 属性为 `private`。有个例外是构造方法，可以限制其可见性，例如 `public` 构造方法可以在子类中标记为 `private`。

> 除非使用了自动加载，否则一个类必须在使用之前被定义。如果一个类扩展了另一个，则父类必须在子类之前被声明。此规则适用于类继承其它类与接口。

> 不允许使用只读属性覆盖可读写属性，反之亦然。 ```php <?php class A { public int $prop; } class B extends A { // Illegal: read-write -> readonly public readonly int $prop; } ?> ```

**继承示例**

```php


<?php

class Foo
{
    public function printItem($string)
    {
        echo 'Foo: ' . $string . PHP_EOL;
    }
    
    public function printPHP()
    {
        echo 'PHP is great.' . PHP_EOL;
    }
}

class Bar extends Foo
{
    public function printItem($string)
    {
        echo 'Bar: ' . $string . PHP_EOL;
    }
}

$foo = new Foo();
$bar = new Bar();
$foo->printItem('baz'); // 输出: 'Foo: baz'
$foo->printPHP();       // 输出: 'PHP is great' 
$bar->printItem('baz'); // 输出: 'Bar: baz'
$bar->printPHP();       // 输出: 'PHP is great'

?>

  
```

### 返回类型与内部类兼容

PHP 8.1 之前，大多数内部类或方法没有声明其返回类型，并且在继承它们时允许返回任何类型。

自 PHP 8.1.0 起，大多数内部方法开始“暂时”声明其返回类型，在这种情况下，方法的返回类型应该与继承的父级方法兼容；否则，将发出弃用通知。注意，没有指定返回声明也会视为签名不匹配，从而导致弃用通知。

如果由于 PHP 跨版本兼容性问题而无法为重写方法声明返回类型，则可以添加 `ReturnTypeWillChange` 注解来消除弃用通知。

**重写方法未声明任何返回类型**

```php

    
<?php
class MyDateTime extends DateTime
{
    public function modify(string $modifier) { return false; }
}

// "Deprecated: Return type of MyDateTime::modify(string $modifier) should either be compatible with DateTime::modify(string $modifier): DateTime|false, or the #[\ReturnTypeWillChange] attribute should be used to temporarily suppress the notice" as of PHP 8.1.0
?>

   
```

**重写方法声明了错误的返回类型**

```php

    
<?php
class MyDateTime extends DateTime
{
    public function modify(string $modifier): ?DateTime { return null; }
}

// "Deprecated: Return type of MyDateTime::modify(string $modifier): ?DateTime should either be compatible with DateTime::modify(string $modifier): DateTime|false, or the #[\ReturnTypeWillChange] attribute should be used to temporarily suppress the notice" as of PHP 8.1.0
?>

   
```

**重写方法声明了错误的返回类型但没有弃用通知**

```php

    
<?php
class MyDateTime extends DateTime
{
    /**
     * @return DateTime|false
     */
    #[\ReturnTypeWillChange]
    public function modify(string $modifier) { return false; }
}

// No notice is triggered
?>

   
```
