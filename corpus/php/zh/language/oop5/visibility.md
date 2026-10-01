---
id: "zh-php-syntax-language-oop5-visibility"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.visibility"
title: "访问控制（可见性）"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.visibility.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 访问控制（可见性）

对属性或方法的访问控制（PHP 7.1.0 以后支持常量），是通过在前面添加关键字 `public`（公有），`protected`（受保护）或 `private`（私有）来实现的。被定义为公有的类成员可以在任何地方被访问。 被定义为受保护的类成员则可以被其自身以及其子类和父类访问。被定义为私有的类成员则只能被其定义所在的类访问。

### 属性的访问控制

类属性可以定义为public， private 或者 protected。在没有任何访问控制关键字的情况下，属性声明为 public。

**属性声明**

```php


<?php
/**
 * Define MyClass
 */
class MyClass
{
    public $public = 'Public';
    protected $protected = 'Protected';
    private $private = 'Private';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj = new MyClass();
echo $obj->public; // 这行能被正常执行
echo $obj->protected; // 这行会产生一个致命错误
echo $obj->private; // 这行也会产生一个致命错误
$obj->printHello(); // 输出 Public、Protected 和 Private


/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
    // 可以对 public 和 protected 进行重定义，但 private 而不能
    public $public = 'Public2';
    protected $protected = 'Protected2';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj2 = new MyClass2();
echo $obj2->public; // 这行能被正常执行
echo $obj2->protected; // 这行会产生一个致命错误
echo $obj2->private; // 未定义 private
$obj2->printHello(); // 输出 Public2、Protected2 和 Undefined

?> 

    
```

#### 不对称属性可见性

从 PHP 8.4 开始，对象属性也可以设置不对称的可见性，读取（`get`） 和写入（`set`）可以有不同的范围。 具体来说，可以单独指定`set`可见性，只要它不比默认可见性更宽。

**不对称属性可见性**

```php


<?php
class Book
{
    public function __construct(
        public private(set) string $title,
        public protected(set) string $author,
        protected private(set) int $pubYear,
    ) {}
}

class SpecialBook extends Book
{
    public function update(string $author, int $year): void
    {
        $this->author = $author; // OK
        $this->pubYear = $year; // Fatal Error
    }
}

$b = new Book('How to PHP', 'Peter H. Peterson', 2024);

echo $b->title; // Works
echo $b->author; // Works
echo $b->pubYear; // Fatal Error

$b->title = 'How not to PHP'; // Fatal Error
$b->author = 'Pedro H. Peterson'; // Fatal Error
$b->pubYear = 2023; // Fatal Error
?>

     
```

从 PHP 8.5 开始，`set` 可见性也可以应用于类的静态属性。

**不对称静态属性可见性**

```php


<?php
class Manager
{
    public private(set) static int $calls = 0;

    public function doAThing(): string
    {
        self::$calls++;
        // Do other stuff.
        return "some string";
    }
}

$m = new Manager();

$m->doAThing(); // Works
echo Manager::$calls; // Works
Manager::$calls = 5; // Fatal error
?>

     
```

以上示例会输出：

```text


1
Fatal error: Uncaught Error: Cannot modify private(set) property Manager::$calls from global scope in /some/file.php

     
```

关于不对称可见性有一些注意事项：

- 只有声明了类型的属性才能有单独的`set`可见性。
- `set` 可见性必须和 `get` 可见性相同或更严格。 也就是说，public protected(set) 和 protected protected(set) 是允许的，但是 protected public(set) 会导致语法错误。
- 如果一个属性是 `public`，那么主要可见性可能被省略。 也就是说，public private(set) 和 private(set) 会有相同的结果。
- 一个属性的 `private(set)` 可见性会自动变为 `final`， 并且不能在子类中重新声明。
- 读取属性的引用遵循 `set` 可见性，而不是 `get`。 这是因为引用可能用于修改属性值。
- 同样，试图写入数组属性会涉及到内部的 `get` 和 `set` 操作， 因此会遵循 `set` 可见性，因为这总是更严格的。

> 设置访问控制时，声明中不允许有空格。`private(set)` 是正确的。`private( set )` 是不正确的，将导致解析错误。

当一个类继承另一个类时，子类可以重新定义任何不是 `final` 的属性。 这样做时，可以扩大主要可见性或 `set` 可见性，只要新的可见性和父类相同或更宽。 但是要注意，如果一个 `private` 属性被重写，它实际上并没有改变父类的属性， 而是创建了一个具有不同内部名称的新属性。

**不对称属性继承**

```php


<?php
class Book
{
    protected string $title;
    public protected(set) string $author;
    protected private(set) int $pubYear;
}

class SpecialBook extends Book
{
    public protected(set) string $title; // OK, as reading is wider and writing the same.
    public string $author; // OK, as reading is the same and writing is wider.
    public protected(set) int $pubYear; // Fatal Error. private(set) properties are final.
}
?>

     
```

### 方法的访问控制

类中的方法可以被定义为 public、private 或 protected。如果没有设置这些关键字，则该方法默认为 public。

**方法声明**

```php


<?php
/**
 * Define MyClass
 */
class MyClass
{
    // 声明一个公有的构造函数
    public function __construct() { }

    // 声明一个公有的方法
    public function MyPublic() { }

    // 声明一个受保护的方法
    protected function MyProtected() { }

    // 声明一个私有的方法
    private function MyPrivate() { }

    // 此方法为公有
    function Foo()
    {
        $this->MyPublic();
        $this->MyProtected();
        $this->MyPrivate();
    }
}

$myclass = new MyClass;
$myclass->MyPublic(); // 这行能被正常执行
$myclass->MyProtected(); // 这行会产生一个致命错误
$myclass->MyPrivate(); // 这行会产生一个致命错误
$myclass->Foo(); // 公有，受保护，私有都可以执行


/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
    // 此方法为公有
    function Foo2()
    {
        $this->MyPublic();
        $this->MyProtected();
        $this->MyPrivate(); // 这行会产生一个致命错误
    }
}

$myclass2 = new MyClass2;
$myclass2->MyPublic(); // 这行能被正常执行
$myclass2->Foo2(); // 公有的和受保护的都可执行，但私有的不行

class Bar 
{
    public function test() {
        $this->testPrivate();
        $this->testPublic();
    }

    public function testPublic() {
        echo "Bar::testPublic\n";
    }
    
    private function testPrivate() {
        echo "Bar::testPrivate\n";
    }
}

class Foo extends Bar 
{
    public function testPublic() {
        echo "Foo::testPublic\n";
    }
    
    private function testPrivate() {
        echo "Foo::testPrivate\n";
    }
}

$myFoo = new foo();
$myFoo->test(); // Bar::testPrivate 
                // Foo::testPublic
?>

    
```

### 常量的控制访问

PHP 7.1.0 开始，类的常量可以定义为 public、private 或 protected。如果没有设置这些关键字，则该常量默认为 public。

**PHP 7.1.0 中的常量声明**

```php


<?php
/**
* Define MyClass
*/
class MyClass
{
   // 公有常量
   public const MY_PUBLIC = 'public';

   // 受保护的常量
   protected const MY_PROTECTED = 'protected';

   // 私有常量
   private const MY_PRIVATE = 'private';

   public function foo()
   {
       echo self::MY_PUBLIC;
       echo self::MY_PROTECTED;
       echo self::MY_PRIVATE;
   }
}

$myclass = new MyClass();
MyClass::MY_PUBLIC; // 这行可以正常执行
MyClass::MY_PROTECTED; // 这行会产生一个致命错误 
MyClass::MY_PRIVATE; // 这行会产生一个致命错误
$myclass->foo(); // 将会输出：Public Protected Private


/**
* Define MyClass2
*/
class MyClass2 extends MyClass
{
   // This is public
   function foo2()
   {
       echo self::MY_PUBLIC;
       echo self::MY_PROTECTED;
       echo self::MY_PRIVATE; // 这行会产生一个致命错误
   }
}

$myclass2 = new MyClass2;
echo MyClass2::MY_PUBLIC; // 这行可以正常执行
$myclass2->foo2(); // 将会输出：Public Protected，MY_PRIVATE 是私有常量，无法输出
?>

    
```

### 其它对象的访问控制

同一个类的对象即使不是同一个实例也可以互相访问对方的 private 与 protected 成员。 这是由于在这些对象的内部具体实现的细节都是已知的。

**访问同一个对象类型的 private 成员**

```php


<?php
class Test
{
    private $foo;

    public function __construct($foo)
    {
        $this->foo = $foo;
    }

    private function bar()
    {
        echo 'Accessed the private method.';
    }

    public function baz(Test $other)
    {
        // 我们可以改变 private 属性：
        $other->foo = 'hello';
        var_dump($other->foo);

        // 我们也可以调用 private 方法：
        $other->bar();
    }
}

$test = new Test('test');

$test->baz(new Test('other'));
?>

    
```

以上示例会输出：

```text


string(5) "hello"
Accessed the private method.

    
```
