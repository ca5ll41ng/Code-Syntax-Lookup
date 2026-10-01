---
id: "zh-php-syntax-language-oop5-interfaces"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.interfaces"
title: "对象接口"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.interfaces.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对象接口

使用接口（interface），可以指定某个类必须实现哪些方法和属性，但不需要定义这些方法或属性的具体内容。 由于接口（interface）和类（class）、trait 共享了命名空间，所以它们不能重名。

接口就像定义一个标准的类一样，通过 `interface` 关键字替换掉 `class` 关键字来定义，但其中所有的方法都是空的。

接口中定义的所有方法都必须是 public ，这是接口的特性。

在实践中，往往出于两个辅助目的使用接口：

  因为实现了同一个接口，所以开发者创建的对象虽然源自不同的类，但可能可以交换使用。 常用于多个数据库的服务访问、多个支付网关、不同的缓存策略等。 可能不需要任何代码修改，就能切换不同的实现方式。   能够让函数与方法接受一个符合接口的参数，而不需要关心对象如何做、如何实现。 这些接口常常命名成类似 `Iterable`、`Cacheable`、`Renderable`， 以便于体现出功能的含义。  

接口可以定义魔术方法，以便要求类（class）实现这些方法。

> 虽然没有禁止，但是强烈建议不要在接口中使用 构造器。 因为这样在对象实现接口时，会大幅降低灵活性。 此外，也不能强制确保构造器遵守继承规则，将导致不可预料的行为结果。

### 实现（`implements`）

要实现一个接口，使用 `implements` 操作符。类中必须实现接口中定义的所有方法，否则会报一个致命错误。 类可以实现多个接口，用逗号来分隔多个接口的名称。

> 实现接口的时候，class 中的参数名称不必和接口完全一致。 然而， PHP 8.0 起语法开始支持命名参数， 也就是说调用方会依赖接口中参数的名称。 因此，强烈建议开发者的参数的命名，在类和接口中保持一致。

> 接口也可以通过 extends 操作符扩展。

> 类实现接口时，必须以兼容的签名定义接口中所有方法。类可以实现多个声明了相同方法名称的接口。在这种情况下，实现必须遵循所有接口的签名兼容性规则。因此可以应用协变和逆变。

 Move this to OOP constants page? 

### 常量

接口中也可以定义常量。接口常量和类常量的使用完全相同， 在 PHP 8.1.0 之前 不能被子类或子接口所覆盖。

### 属性

自 PHP 8.4.0 起，接口也可以声明属性。如果声明了属性，则必须指定属性是可读、可写还是可读可写。接口声明仅适用于 public 读写访问。

类可以通过多种方式满足接口属性。可以定义 public 属性。可以定义仅实现相应挂钩的 public 虚拟属性。或者属性读取可以由 `readonly` 属性满足。但是可 set 的接口属性可能不是 `readonly`。

**接口属性示例**

```php


<?php
interface I
{
    // 实现的类必须具有 public get 的属性，
    // 但是否可以 public set 则不受限制。
    public string $readable { get; }

    // 实现的类必须具有 public set 的属性，
    // 但是不是 public get 则不受限制。
    public string $writeable { set; }

    // 实现的类必须具有 public get 和 public set 的属性。
    public string $both { get; set; }
}

// 此类将所有三个属性实现为传统的非挂钩属性。这是完全有效的。
class C1 implements I
{
    public string $readable;

    public string $writeable;

    public string $both;
}

// 此类仅使用请求的挂钩即可实现所有三个属性。这也是完全有效的。
class C2 implements I
{
    private string $written = '';
    private string $all = '';

    // 仅使用 get 挂钩来创建虚拟属性。
    // 这满足了“public get”要求。
    // 它不可写，但这不是接口所要求的。
    public string $readable { get => strtoupper($this->writeable); }

    // 该接口仅要求属性可 set，
    // 但包含 get 操作也是完全有效的。
    // 此示例创建了虚拟属性，这很好。
    public string $writeable {
        get => $this->written;
        set {
            $this->written = $value;
        }
    }

    // 此属性要求读取和写入均可，
    // 因此需要实现两者，或者允许它具有默认行为。
    public string $both {
        get => $this->all;
        set {
            $this->all = strtoupper($value);
        }
    }
}
?>

    
```

### 示例

**接口示例**

```php


<?php

// 声明一个'Template'接口
interface Template
{
    public function setVariable($name, $var);
    public function getHtml($template);
}


// 实现接口
// 下面的写法是正确的
class WorkingTemplate implements Template
{
    private $vars = [];
  
    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }
  
    public function getHtml($template)
    {
        foreach($this->vars as $name => $value) {
            $template = str_replace('{' . $name . '}', $value, $template);
        }
 
        return $template;
    }
}

// 下面的写法是错误的，会报错，因为没有实现 getHtml()：
// Fatal error: Class BadTemplate contains 1 abstract methods
// and must therefore be declared abstract (Template::getHtml)
class BadTemplate implements Template
{
    private $vars = [];
  
    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }
}
?>

   
```

**可扩充的接口**

```php


<?php
interface A
{
    public function foo();
}

interface B extends A
{
    public function baz(Baz $baz);
}

// 正确写法
class C implements B
{
    public function foo()
    {
    }

    public function baz(Baz $baz)
    {
    }
}

// 错误写法会导致一个致命错误
class D implements B
{
    public function foo()
    {
    }

    public function baz(Foo $foo)
    {
    }
}
?>

     
```

**多接口的差异兼容性**

```php


<?php
class Foo {}
class Bar extends Foo {}

interface A {
    public function myfunc(Foo $arg): Foo;
}

interface B {
    public function myfunc(Bar $arg): Bar;
}

class MyClass implements A, B
{
    public function myfunc(Foo $arg): Bar
    {
        return new Bar();
    }
}
?>

     
```

**扩展多个接口**

```php


<?php
interface A
{
    public function foo();
}

interface B
{
    public function bar();
}

interface C extends A, B
{
    public function baz();
}

class D implements C
{
    public function foo()
    {
    }

    public function bar()
    {
    }

    public function baz()
    {
    }
}
?>

    
```

**使用接口常量**

```php


<?php
interface A
{
    const B = 'Interface constant';
}

// 输出接口常量
echo A::B;

// 错误写法，因为常量不能被覆盖。接口常量的概念和类常量是一样的。
class B implements A
{
    const B = 'Class constant';
}

// 输出： Class constant
// 在 PHP 8.1.0 之前，不能正常运行
// 因为之前还不允许覆盖类常量。
echo B::B;
?>

   
```

**抽象（abstract）类的接口使用**

```php

    
<?php
interface A
{
    public function foo(string $s): string;

    public function bar(int $i): int;
}

// 抽象类可能仅实现了接口的一部分。
// 扩展该抽象类时必须实现剩余部分。
abstract class B implements A
{
    public function foo(string $s): string
    {
        return $s . PHP_EOL;
    }
}

class C extends B
{
    public function bar(int $i): int
    {
        return $i * 2;
    }
}
?>

   
```

**同时使用扩展和实现**

```php

    
<?php

class One
{
    /* ... */
}

interface Usable
{
    /* ... */
}

interface Updatable
{
    /* ... */
}

// 关键词顺序至关重要： 'extends' 必须在前面
class Two extends One implements Usable, Updatable
{
    /* ... */
}
?>

   
```

接口加上类型约束，提供了一种很好的方式来确保某个对象包含有某些方法。参见 instanceof 操作符和类型声明。
