---
id: "zh-php-syntax-language-oop5-paamayim-nekudotayim"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.paamayim-nekudotayim"
title: "范围解析操作符 （::）"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.paamayim-nekudotayim.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 范围解析操作符 （::）

范围解析运算符（也称作 Paamayim Nekudotayim）或更简单地说是双冒号，是一种允许访问类或其中一个父类的常量、static 属性或 static 方法的标记。此外，静态属性或方法也可以通过后期静态绑定来覆盖。

当在类定义之外引用到这些项目时，要使用类名。

可以通过变量来引用类，该变量的值不能是关键字（如 `self`，`parent` 和 `static`）。

把 Paamayim Nekudotayim 选作双冒号操作符的名字似乎有些奇怪。然而，这是 Zend 开发小组在写 Zend Engine 0.5（被用于 PHP 3 中）时所作出的决定。事实上这个词在希伯莱文就是双冒号的意思。

**在类的外部使用 :: 操作符**

```php


<?php
class MyClass {
    const CONST_VALUE = 'A constant value';
}

$classname = 'MyClass';
echo $classname::CONST_VALUE;

echo MyClass::CONST_VALUE;
?>

  
```

`self`，`parent` 和 `static` 这三个特殊的关键字是用于在类定义的内部对其属性或方法进行访问的。

**在类定义内部使用 ::**

```php


<?php
class MyClass {
    const CONST_VALUE = 'A constant value';
}

class OtherClass extends MyClass
{
    public static $my_static = 'static var';

    public static function doubleColon() {
        echo parent::CONST_VALUE . "\n";
        echo self::$my_static . "\n";
    }
}

$classname = 'OtherClass';
$classname::doubleColon();

OtherClass::doubleColon();
?>

  
```

当一个子类覆盖其父类中的方法时，PHP 不会调用父类中已被覆盖的方法。是否调用父类的方法取决于子类。这种机制也作用于构造函数和析构函数，重载以及魔术方法。

**调用父类的方法**

```php


<?php
class MyClass
{
    protected function myFunc() {
        echo "MyClass::myFunc()\n";
    }
}

class OtherClass extends MyClass
{
    // 覆盖了父类的定义
    public function myFunc()
    {
        // 但还是可以调用父类中被覆盖的方法
        parent::myFunc();
        echo "OtherClass::myFunc()\n";
    }
}

$class = new OtherClass();
$class->myFunc();
?>

  
```

参见 伪变量的示例。
