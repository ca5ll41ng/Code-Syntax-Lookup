---
id: "zh-php-syntax-language-oop5-constants"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.constants"
title: "类常量"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 类常量

可以把在类中始终保持不变的值定义为 常量 。 类常量的默认可见性是 `public` 。

> 类常量可以通过子类重新定义。PHP 8.1.0 起，如果类常量定义为 final，则不能被子类重新定义。

接口（interface）中也可以定义常量。更多示例见文档中的接口部分。

可以用一个变量来动态调用类。但该变量的值不能为关键字（如 `self` ， `parent` 或 `static`）。

注意，类常量只为每个类分配一次，而不是为每个类的实例分配。

自 PHP 8.3.0 起，类常量可以具有标量类型，例如 `bool`、`int`、`float`、`string`，甚至是 `array`。使用 `array` 时，其内容只能包含其他标量类型。

**定义和使用类常量**

```php


<?php
class MyClass
{
    const CONSTANT = 'constant value';

    function showConstant() {
        echo  self::CONSTANT . "\n";
    }
}

echo MyClass::CONSTANT . "\n";

$classname = "MyClass";
echo $classname::CONSTANT . "\n";

$class = new MyClass();
$class->showConstant();

echo $class::CONSTANT."\n";
?>

   
```

特殊的 `::class` 允许在编译时进行完全限定的类名解析， 这在命名空间类中非常有用。

**命名空间的 ::class 示例**

```php


<?php
namespace foo {
    class bar {
    }

    echo bar::class; // foo\bar
}
?>

  
```

**类常量表达式示例**

```php


<?php
const ONE = 1;
class foo {
    const TWO = ONE * 2;
    const THREE = ONE + self::TWO;
    const SENTENCE = 'The value of THREE is '.self::THREE;
}
?>

  
```

**自 PHP 7.1.0 起，类常量支持可见性修饰符**

```php


<?php
class Foo {
    public const BAR = 'bar';
    private const BAZ = 'baz';
}
echo Foo::BAR, PHP_EOL;
echo Foo::BAZ, PHP_EOL;
?>

  
```

以上示例在 PHP 7.1 中的输出：

```text


bar

Fatal error: Uncaught Error: Cannot access private const Foo::BAZ in …

   
```

> 自 PHP 7.1.0 起，类常量允许使用可见性修饰符。

**自 PHP 8.3.0 起，类常量可见性不一致检查**

```php


<?php

interface MyInterface
{
    public const VALUE = 42;
}

class MyClass implements MyInterface
{
    protected const VALUE = 42;
}
?>

  
```

以上示例在 PHP 8.3 中的输出：

```text


Fatal error: Access level to MyClass::VALUE must be public (as in interface MyInterface) …

  
```

> 自 PHP 8.3.0 起，可见性差异检查要更加严格。在此版本之前，类常量的可见性可能与实现的接口中常量的可见性不同。

**自 PHP 8.3.0 起获取类常量语法**

```php


<?php
class Foo {
    public const BAR = 'bar';
    private const BAZ = 'baz';
}

$name = 'BAR';
echo Foo::{$name}, PHP_EOL; // bar
?>

  
```

> 自 PHP 8.3.0 起，可以使用变量动态获取类常量。

**自 PHP 8.3.0 起，为类常量指定类型**

```php


<?php

class MyClass {
    public const bool MY_BOOL = true;
    public const int MY_INT = 1;
    public const float MY_FLOAT = 1.01;
    public const string MY_STRING = 'one';
    public const array MY_ARRAY = [self::MY_BOOL, self::MY_INT, self::MY_FLOAT, self::MY_STRING];
}

var_dump(MyClass::MY_BOOL);
var_dump(MyClass::MY_INT);
var_dump(MyClass::MY_FLOAT);
var_dump(MyClass::MY_STRING);
var_dump(MyClass::MY_ARRAY);
?>

  
```

以上示例在 PHP 8.3 中的输出：

```text


bool(true)
int(1)
float(1.01)
string(3) "one"
array(4) {
  [0]=>
  bool(true)
  [1]=>
  int(1)
  [2]=>
  float(1.01)
  [3]=>
  string(3) "one"
}
   
  
```
