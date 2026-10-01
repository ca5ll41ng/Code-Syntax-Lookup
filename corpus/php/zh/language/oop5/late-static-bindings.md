---
id: "zh-php-syntax-language-oop5-late-static-bindings"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.late-static-bindings"
title: "后期静态绑定"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.late-static-bindings.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 后期静态绑定

PHP 增加了一个叫做后期静态绑定的功能，用于在继承范围内引用静态调用的类。

准确说，后期静态绑定工作原理是存储了在上一个“非转发调用”（non-forwarding call）的类名。当进行静态方法调用时，该类名即为明确指定的那个（通常在 `::` 运算符左侧部分）；当进行非静态方法调用时，即为该对象所属的类。所谓的“转发调用”（forwarding call）指的是通过以下几种方式进行的静态调用：`self::`，`parent::`，`static::` 以及 `forward_static_call()`。可用 `get_called_class()` 函数来得到被调用的方法所在的类名，`static::` 则指出了其范围。

该功能从语言内部角度考虑被命名为“后期静态绑定”。“后期绑定”的意思是说，`static::` 不再被解析为定义当前方法所在的类，而是在实际运行时计算的。也可以称之为“静态绑定”，因为它可以用于（但不限于）静态方法的调用。

### `self::` 的限制

使用 `self::` 或者 `__CLASS__` 对当前类的静态引用，取决于定义当前方法所在的类：

**`self::` 用法**

```php


<?php

class A
{
    public static function who()
    {
        echo __CLASS__;
    }

    public static function test()
    {
        self::who();
    }
}

class B extends A
{
    public static function who()
    {
        echo __CLASS__;
    }
}

B::test();

?>

    
```

以上示例会输出：

```text


A

    
```

### 后期静态绑定的用法

后期静态绑定本想通过引入一个新的关键字表示运行时最初调用的类来绕过限制。简单地说，这个关键字能在上述例子中调用 `test()` 时引用的类是 `B` 而不是 `A`。最终决定不引入新的关键字，而是使用已经预留的 `static` 关键字。

**`static::` 简单用法**

```php


<?php

class A
{
    public static function who()
    {
        echo __CLASS__;
    }

    public static function test()
    {
        static::who(); // 接下来是延迟静态绑定
    }
}

class B extends A
{
    public static function who()
    {
        echo __CLASS__;
    }
}

B::test();

?>

    
```

以上示例会输出：

```text


B

    
```

> 在非静态环境下，所调用的类即为该对象实例所属的类。由于 `$this->` 会在同一作用范围内尝试调用私有方法，而 `static::` 则可能给出不同结果。另一个区别是 `static::` 只能用于静态属性。

**非静态环境下使用 `static::`**

```php


<?php

class A
{
    private function foo()
    {
        echo "Success!\n";
    }

    public function test()
    {
        $this->foo();
        static::foo();
    }
}

class B extends A
{
    /* foo() 将被复制到 B，因此其作用域仍为 A，调用也会成功 */
}

class C extends A
{
    private function foo()
    {
        /* 已替换原始方法，新方法的作用域为 C*/
    }
}

$b = new B();
$b->test();

$c = new C();
try {
    $c->test();
} catch (Error $e) {
    echo $e->getMessage();
}

?>

    
```

以上示例会输出：

```text


Success!
Success!
Success!
Call to private method C::foo() from scope A

    
```

> 后期静态绑定的解析会一直到取得一个完全解析了的静态调用为止。另一方面，如果静态调用使用 `parent::` 或者 `self::` 将转发调用信息。
>
> **转发和非转发调用**
>
> ```php
>
>
> <?php
>
> class A
> {
>     public static function foo()
>     {
>         static::who();
>     }
>
>     public static function who()
>     {
>         echo __CLASS__ . "\n";
>     }
> }
>
> class B extends A
> {
>     public static function test()
>     {
>         A::foo();
>         parent::foo();
>         self::foo();
>     }
>
>     public static function who()
>     {
>         echo __CLASS__ . "\n";
>     }
> }
>
> class C extends B
> {
>     public static function who()
>     {
>         echo __CLASS__ . "\n";
>     }
> }
>
> C::test();
>
> ?>
>
>      
> ```
>
> 以上示例会输出：
>
> ```text
>
>
> A
> C
> C
>
>      
> ```
