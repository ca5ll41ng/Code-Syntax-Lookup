---
id: "zh-php-syntax-language-operators-type"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.type"
title: "类型运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 类型运算符

类型

`instanceof` 用于确定一个 PHP 变量是否属于某一类 class 的实例：

**对类使用 `instanceof`**

```php


<?php
class MyClass
{
}

class NotMyClass
{
}
$a = new MyClass;

var_dump($a instanceof MyClass);
var_dump($a instanceof NotMyClass);
?>

   
```

以上示例会输出：

```text


bool(true)
bool(false)

   
```

`instanceof` 也可用来确定一个变量是不是继承自某一父类的子类的实例：

**对继承类使用 `instanceof`**

```php


<?php
class ParentClass
{
}

class MyClass extends ParentClass
{
}

$a = new MyClass;

var_dump($a instanceof MyClass);
var_dump($a instanceof ParentClass);
?>

   
```

以上示例会输出：

```text


bool(true)
bool(true)

   
```

检查一个对象是否*不是*某个类的实例，可以使用逻辑运算符 `not`。

**使用 `instanceof` 检查对象*不是*某个类的实例**

```php


<?php
class MyClass
{
}

$a = new MyClass;
var_dump(!($a instanceof stdClass));
?>

   
```

以上示例会输出：

```text


bool(true)

   
```

最后，`instanceof`也可用于确定一个变量是不是实现了某个接口的对象的实例:

**对接口使用 `instanceof`**

```php


<?php
interface MyInterface
{
}

class MyClass implements MyInterface
{
}

$a = new MyClass;

var_dump($a instanceof MyClass);
var_dump($a instanceof MyInterface);
?>

   
```

以上示例会输出：

```text


bool(true)
bool(true)

   
```

虽然 `instanceof` 通常直接与类名一起使用，但也可以使用对象或字符串变量：

**对其它变量使用 `instanceof`**

```php


<?php
interface MyInterface
{
}

class MyClass implements MyInterface
{
}

$a = new MyClass;
$b = new MyClass;
$c = 'MyClass';
$d = 'NotMyClass';

var_dump($a instanceof $b); // $b 是 MyClass 类的对象
var_dump($a instanceof $c); // $c 是字符串 'MyClass'
var_dump($a instanceof $d); // $d 是字符串 'NotMyClass'
?>

   
```

以上示例会输出：

```text


bool(true)
bool(true)
bool(false)

   
```

如果被检测的变量不是对象，instanceof 并不发出任何错误信息而是返回 `false`。PHP 7.3.0 之前不允许用于检测常量。

**用 `instanceof` 检测其它变量**

```php


<?php
$a = 1;
$b = NULL;
$c = fopen('/tmp/', 'r');
var_dump($a instanceof stdClass); // $a 是整数
var_dump($b instanceof stdClass); // $b 是 NULL
var_dump($c instanceof stdClass); // $c 是资源
var_dump(FALSE instanceof stdClass);
?>

   
```

以上示例会输出：

```text


bool(false)
bool(false)
bool(false)
PHP Fatal error:  instanceof expects an object instance, constant given

   
```

PHP 7.3.0 起， `instanceof` 操作符的左侧可以放常量。

**使用 `instanceof` 测试常量**

```php


<?php
var_dump(FALSE instanceof stdClass);
?>

   
```

以上示例在 PHP 7.3 中的输出：

```text


bool(false)

   
```

PHP 8.0.0 起， `instanceof` 可以与任何表达式一起使用。表达式必须使用括号括起来并且生成 `string`。

**将 `instanceof` 与任意表达式一起使用**

```php


<?php

class ClassA extends \stdClass {}
class ClassB extends \stdClass {}
class ClassC extends ClassB {}
class ClassD extends ClassA {}

function getSomeClass(): string
{
    return ClassA::class;
}

var_dump(new ClassA instanceof ('std' . 'Class'));
var_dump(new ClassB instanceof ('Class' . 'B'));
var_dump(new ClassC instanceof ('Class' . 'A'));
var_dump(new ClassD instanceof (getSomeClass()));
?>

   
```

以上示例在 PHP 8 中的输出：

```text


bool(true)
bool(true)
bool(false)
bool(true)

   
```

`instanceof` 在功能上有个 类似的变体 `is_a()`。

### 参见

`get_class()` `is_a()`
