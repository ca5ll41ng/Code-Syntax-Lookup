---
id: "zh-php-syntax-language-constants"
language: "php"
lang: "zh"
category: "syntax"
name: "language.constants"
title: "常量"
module: "language"
source_url: "https://www.php.net/manual/zh/language.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 常量

常量是一个简单值的标识符（名字）。如同其名称所暗示的，在脚本执行期间该值不能改变（除了所谓的 魔术常量，它们其实不是常量）。常量大小写敏感。传统上常量标识符总是大写的。

> 在 PHP 8.0.0 之前，使用 `define()` 定义的常量可能不区分大小写。

常量名和其它任何 PHP 标签遵循同样的命名规则。合法的常量名以字母或下划线开始，后面跟着任何字母，数字或下划线。用正则表达式是这样表达的： ^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$。

还可以使用 `define()` 函数来定义包含保留字或非常规名称的常量，这类常量可以通过 `constant()` 函数来获取名称，但是非常不推荐这种用法。

> 请参见`userlandnaming`。

**合法与非法的常量名**

```php


<?php

// 合法的常量名
define("FOO",     "something");
define("FOO2",    "something else");
define("FOO_BAR", "something more");

// 非法的常量名
define("2FOO",    "something");

// 下面的定义是合法的，但应该避免这样做：(自定义常量不要以__开头)
// 也许将来有一天 PHP 会定义一个 __FOO__ 的魔术常量
// 这样就会与你的代码相冲突
define("__FOO__", "something");

?>

    
```

> 在这里，字母指的是 a-z，A-Z，以及从 128 到 255（0x80-0xff）的 ASCII 字符。

和  一样，常量的范围是全局的。常量可以从脚本的任何地方被访问，而不考虑作用域。有关作用域的更多信息请阅读手册中的变量范围。

> 从 PHP 7.1.0 开始，类常量可以声明为 protected 或 private 的可见性， 使其只在其定义的类的层次范围内可用。

## 语法

可以使用 `const` 关键字或 `define()` 函数两种方法来定义一个常量。函数 `define()` 允许将常量定义为一个表达式，而 `const` 关键字有一些限制，具体可参见下述章节。一个常量一旦被定义，就不能再改变或者取消定义。

使用 `const` 关键字定义常量时，只能包含标量数据（`bool`、`int`、`float` 、`string`）。可以将常量定义为一个表达式，也可以定义为一个 `array`。还可以定义 `resource` 为常量，但应尽量避免，因为可能会造成不可预料的结果。

可以简单的通过指定其名字来取得常量的值，与变量不同，*不应该*在常量前面加上 `$` 符号。如果常量名是动态的，也可以用函数 `constant()` 来获取常量的值。用 `get_defined_constants()` 可以获得所有已定义的常量列表。

> 常量和（全局）变量在不同的名字空间中。这意味着例如 `true` 和 `$TRUE` 是不同的。

如果使用了一个未定义的常量，则会抛出 `Error`。 在 PHP 8.0.0 之前，调用未定义的常量会被解释为一个该常量的 字符串，即（CONSTANT 对应 "CONSTANT" ）。 此方法已在 PHP 7.2.0 中被废弃，会抛出一个 `E_WARNING` 级错误。（PHP 7.2.0 之前会发出一个 E_NOTICE 级的错误。）参见手册中为什么 $foo[bar] 是错误的（除非 `bar` 是一个常量）。这不适用于 (完全)限定的常量，如果未定义，将始终引发 `Error` 。

> 如果要检查是否定义了某常量，请使用 `defined()` 函数。

常量和变量有如下不同：

- 常量前面没有美元符号（`$`）；
- 常量可以不用理会变量的作用域而在任何地方定义和访问；
- 常量一旦定义就不能被重新定义或者取消定义；
- 常量只能计算标量值或数组。

**定义常量**

```php


<?php
define("CONSTANT", "Hello world.");
echo CONSTANT; // 输出 "Hello world."
echo Constant; // 抛出错误：未定义的常量 "Constant"
               // 在 PHP 8.0.0 之前，输出 "Constant" 并发出一个提示级别错误信息
?>

     
```

**使用关键字 `const` 定义常量**

```php


<?php
// 简单的标量值
const CONSTANT = 'Hello World';

echo CONSTANT;

// 标量表达式
const ANOTHER_CONST = CONSTANT.'; Goodbye World';
echo ANOTHER_CONST;

const ANIMALS = array('dog', 'cat', 'bird');
echo ANIMALS[1]; // 将输出 "cat"

// 常量数组
define('ANIMALS', array(
    'dog',
    'cat',
    'bird'
));
echo ANIMALS[1]; // 将输出 "cat"
?>

?>

     
```

> 和使用 `define()` 来定义常量相反的是，使用 `const` 关键字定义常量必须处于最顶端的作用域，因为用此方法是在编译时定义的。这就意味着不能在函数内，循环内以及 `if` 或 `try`/`catch` 语句之内用 `const` 来定义常量。

### 参见

类常量

## 预定义常量

PHP 向它运行的任何脚本提供了大量的预定义常量。不过很多常量都是由不同的扩展库定义的，只有在加载了这些扩展库时才会出现，或者动态加载后，或者在编译时已经包括进去了。

## 魔术常量

一些魔术常量会根据使用位置而变化。例如 `__LINE__` 的值取决于它在脚本中使用的行。所有这些“魔术”常量都在编译时解析，而常规常量则在运行时解析。这些特殊的常量不区分大小写，如下：

| 名字 | 说明 |
| --- | --- |
| `__LINE__` | 文件中的当前行号。 |
| `__FILE__` | 文件的完整路径和文件名。如果用在被包含文件中，则返回被包含的文件名。 |
| `__DIR__` | 文件所在的目录。如果用在被包括文件中，则返回被包括的文件所在的目录。它等价于 `dirname(__FILE__)`。除非是根目录，否则目录中名不包括末尾的斜杠。 |
| `__FUNCTION__` | 当前函数的名称。匿名函数则为 `{closure}`。 |
| `__CLASS__` | 当前类的名称。类名包括其被声明的作用域（例如 `Foo\Bar`）。当用在 trait 方法中时，`__CLASS__` 是调用 trait 方法的类的名字。 |
| `__TRAIT__` | Trait 的名字。Trait 名包括其被声明的作用域（例如 `Foo\Bar`）。 |
| `__METHOD__` | 类的方法名。 |
| `__PROPERTY__` | 仅在属性挂钩内有效。等同于属性的名称。 |
| `__NAMESPACE__` | 当前命名空间的名称。 |
| `{ClassName}::class` | 完整的类名。 |

### 参见

::class `get_class()` `get_object_vars()` `file_exists()` `function_exists()`
