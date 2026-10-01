---
id: "zh-php-syntax-language-namespaces"
language: "php"
lang: "zh"
category: "syntax"
name: "language.namespaces"
title: "命名空间概述"
module: "language"
source_url: "https://www.php.net/manual/zh/language.namespaces.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 命名空间概述

概述

## 命名空间概述

什么是命名空间？从广义上来说，命名空间是一种封装事物的方法。在很多地方都可以见到这种抽象概念。例如，在操作系统中目录用来将相关文件分组，对于目录中的文件来说，它就扮演了命名空间的角色。具体举个例子，文件 `foo.txt` 可以同时在目录 `/home/greg` 和 `/home/other` 中存在，但在同一个目录中不能存在两个 `foo.txt` 文件。另外，在目录 `/home/greg` 外访问 `foo.txt` 文件时，我们必须将目录名以及目录分隔符放在文件名之前得到 `/home/greg/foo.txt`。这个原理应用到程序设计领域就是命名空间的概念。

在 PHP 中，命名空间用来解决在编写类库或应用程序时创建可重用的代码如类或函数时碰到的两类问题：

1. 用户编写的代码与PHP内部的类/函数/常量或第三方类/函数/常量之间的名字冲突。
2. 为很长的标识符名称(通常是为了缓解第一类问题而定义的)创建一个别名（或简短）的名称，提高源代码的可读性。

PHP 命名空间提供了一种将相关的类、函数和常量组合到一起的途径。下面是一个说明 PHP 命名空间语法的示例：

**命名空间语法示例**

```php

   
<?php
namespace my\name; // 参考 "定义命名空间" 小节

class MyClass {}
function myfunction() {}
const MYCONST = 1;

$a = new MyClass;
$c = new \my\name\MyClass; // 参考 "全局空间" 小节

$a = strlen('hi'); // 参考 "使用命名空间：后备全局函数/常量" 小节

$d = namespace\MYCONST; // 参考 "namespace操作符和__NAMESPACE__常量” 小节

$d = __NAMESPACE__ . '\MYCONST';
echo constant($d); // 参考 "命名空间和动态语言特征" 小节
?>
    
   
```

> 命名空间名称大小写不敏感。

> 名为 `PHP` 的命名空间，以及以这些名字开头的命名空间 （例如 `PHP\Classes`）被保留用作语言内核使用， 而不应该在用户空间的代码中使用。

## 定义命名空间

命名空间

虽然任意合法的 PHP 代码都可以包含在命名空间中，但只有以下类型的代码受命名空间的影响，它们是：类（包括抽象类、trait 和枚举）、接口、函数和常量。

命名空间通过关键字 `namespace` 来声明。如果一个文件中包含命名空间，它必须在其它所有代码之前声明命名空间，除了一个以外：`control-structures.declare`关键字。

**声明单个命名空间**

```php

     
<?php
namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

?>

    
```

> 完全限定名称（就是以反斜杠开头的名称）不能用于命名空间的声明。 因为该结构会解析成相对命名空间表达式。

在声明命名空间之前唯一合法的代码是用于定义源文件编码方式的 `declare` 语句。另外，所有非 PHP 代码包括空白符都不能出现在命名空间的声明之前：

**声明单个命名空间**

```php

     
<html>
<?php
namespace MyProject; // 致命错误 -　命名空间必须是程序脚本的第一条语句
?>

    
```

另外，与 PHP 其它的语言特征不同，同一个命名空间可以定义在多个文件中，即允许将同一个命名空间的内容分割存放在不同的文件中。

## 定义子命名空间

子命名空间

与目录和文件的关系很象，PHP 命名空间也允许指定层次化的命名空间的名称。因此，命名空间的名字可以使用分层次的方式定义：

**声明分层次的单个命名空间**

```php

     
<?php
namespace MyProject\Sub\Level;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

?>

    
```

上面的例子创建了常量 `MyProject\Sub\Level\CONNECT_OK`，类 `MyProject\Sub\Level\Connection` 和函数 `MyProject\Sub\Level\connect`。

## 在同一个文件中定义多个命名空间

在一个文件中定义多个命名空间

也可以在同一个文件中定义多个命名空间。在同一个文件中定义多个命名空间有两种语法形式。

**定义多个命名空间，简单组合语法**

```php

     
<?php
namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

namespace AnotherProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
?>

    
```

不建议使用这种语法在单个文件中定义多个命名空间。建议使用下面的大括号形式的语法。

**定义多个命名空间，大括号语法**

```php

     
<?php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace AnotherProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}
?>

    
```

在实际的编程实践中，非常不提倡在同一个文件中定义多个命名空间。这种方式的主要用于将多个 PHP 脚本合并在同一个文件中。

将全局的非命名空间中的代码与命名空间中的代码组合在一起，只能使用大括号形式的语法。全局代码必须用一个不带名称的 namespace 语句加上大括号括起来，例如：

**定义多个命名空间和不包含在命名空间中的代码**

```php

     
<?php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // 全局代码
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
?>

    
```

除了开始的 declare 语句外，命名空间的括号外不得有任何 PHP 代码。

**定义多个命名空间和不包含在命名空间中的代码**

```php

     
<?php
declare(encoding='UTF-8');
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // 全局代码
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
?>

    
```

## 使用命名空间：基础

基础

在讨论如何使用命名空间之前，必须了解 PHP 是如何知道要使用哪一个命名空间中的元素的。可以将 PHP 命名空间与文件系统作一个简单的类比。在文件系统中访问一个文件有三种方式：

1. 相对文件名形式如 `foo.txt`。它会被解析为 `currentdirectory/foo.txt`，其中 `currentdirectory` 表示当前目录。因此如果当前目录是 `/home/foo`，则该文件名被解析为 `/home/foo/foo.txt`。
2. 相对路径名形式如 `subdirectory/foo.txt`。它会被解析为 `currentdirectory/subdirectory/foo.txt`。
3. 绝对路径名形式如 `/main/foo.txt`。它会被解析为 `/main/foo.txt`。

PHP 命名空间中的元素使用同样的原理。例如，类名可以通过三种方式引用：

1. 非限定名称，或不包含前缀的类名称，例如 `$a=new foo();` 或 `foo::staticmethod();`。如果当前命名空间是 `currentnamespace`，foo 将被解析为 `currentnamespace\foo`。如果使用 foo 的代码是全局的，不包含在任何命名空间中的代码，则 foo 会被解析为 `foo`。 警告：如果命名空间中的函数或常量未定义，则该非限定的函数名称或常量名称会被解析为全局函数名称或常量名称。详情参见 使用命名空间：后备全局函数名称/常量名称。
2. 限定名称,或包含前缀的名称，例如 `$a = new subnamespace\foo();` 或 `subnamespace\foo::staticmethod();`。如果当前的命名空间是 `currentnamespace`，则 foo 会被解析为 `currentnamespace\subnamespace\foo`。如果使用 foo 的代码是全局的，不包含在任何命名空间中的代码，foo 会被解析为 `subnamespace\foo`。
3. 完全限定名称，或包含了全局前缀操作符的名称，例如， `$a = new \currentnamespace\foo();` 或 `\currentnamespace\foo::staticmethod();`。在这种情况下，foo 总是被解析为代码中的文字名(literal name)`currentnamespace\foo`。

下面是一个使用这三种方式的实例： file1.php ```php <?php namespace Foo\Bar\subnamespace; const FOO = 1; function foo() {} class foo { static function staticmethod() {} } ?> ``` file2.php ```php <?php namespace Foo\Bar; include 'file1.php'; const FOO = 2; function foo() {} class foo { static function staticmethod() {} } /* 非限定名称 */ foo(); // 解析为函数 Foo\Bar\foo foo::staticmethod(); // 解析为类 Foo\Bar\foo 的静态方法 staticmethod echo FOO; // 解析为常量 Foo\Bar\FOO /* 限定名称 */ subnamespace\foo(); // 解析为函数 Foo\Bar\subnamespace\foo subnamespace\foo::staticmethod(); // 解析为类 Foo\Bar\subnamespace\foo, // 以及类的方法 staticmethod echo subnamespace\FOO; // 解析为常量 Foo\Bar\subnamespace\FOO /* 完全限定名称 */ \Foo\Bar\foo(); // 解析为函数 Foo\Bar\foo \Foo\Bar\foo::staticmethod(); // 解析为类 Foo\Bar\foo, 以及类的方法 staticmethod echo \Foo\Bar\FOO; // 解析为常量 Foo\Bar\FOO ?> ```

注意访问任意全局类、函数或常量，都可以使用完全限定名称，例如 `\strlen()` 或 `\Exception` 或 \`INI_ALL`。

**在命名空间内部访问全局类、函数和常量**

```php

     
<?php
namespace Foo;

function strlen() {}
const INI_ALL = 3;
class Exception {}

$a = \strlen('hi'); // 调用全局函数strlen
$b = \INI_ALL; // 访问全局常量 INI_ALL
$c = new \Exception('error'); // 实例化全局类 Exception
?>
     
    
```

## 命名空间和动态语言特征

命名空间和动态语言特征

PHP 命名空间的实现受到其语言自身的动态特征的影响。因此，如果要将下面的代码转换到命名空间中：

**动态访问元素**

example1.php:

```php

     
<?php
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
function funcname()
{
    echo __FUNCTION__,"\n";
}
const constname = "global";

$a = 'classname';
$obj = new $a; // 输出 classname::__construct
$b = 'funcname';
$b(); // 输出 funcname
echo constant('constname'), "\n"; // 输出 global
?>
    
    
```

必须使用完全限定名称（包括命名空间前缀的类名称）。注意因为在动态的类名称、函数名称或常量名称中，限定名称和完全限定名称没有区别，因此其前导的反斜杠是不必要的。

**动态访问命名空间的元素**

```php

     
<?php
namespace namespacename;
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
function funcname()
{
    echo __FUNCTION__,"\n";
}
const constname = "namespaced";

/* 注意，如果使用双引号，要这样写 "\\namespacename\\classname" */
$a = '\namespacename\classname';
$obj = new $a; // 输出 namespacename\classname::__construct
$a = 'namespacename\classname';
$obj = new $a; // 也会输出 namespacename\classname::__construct
$b = 'namespacename\funcname';
$b(); // 输出 namespacename\funcname
$b = '\namespacename\funcname';
$b(); // 也会输出 namespacename\funcname
echo constant('\namespacename\constname'), "\n"; // 输出 namespaced
echo constant('namespacename\constname'), "\n"; // 也会输出 namespaced
?>
    
    
```

请一定别忘了阅读 对字符串中的命名空间名称转义的注解.

## namespace 关键字和 __NAMESPACE__ 魔术常量

namespace 关键字和 __NAMESPACE__

PHP支持两种抽象的访问当前命名空间内部元素的方法，`__NAMESPACE__` 魔术常量和 `namespace` 关键字。

常量 `__NAMESPACE__` 的值是包含当前命名空间名称的字符串。在全局的，不包括在任何命名空间中的代码，它包含一个空的字符串。

**__NAMESPACE__ 示例, 在命名空间中的代码**

```php

     
<?php
namespace MyProject;

echo '"', __NAMESPACE__, '"'; // 输出 "MyProject"
?>

    
```

**__NAMESPACE__ 示例，全局代码**

```php

     
<?php

echo '"', __NAMESPACE__, '"'; // 输出 ""
?>

    
```

常量 `__NAMESPACE__` 在动态创建名称时很有用，例如：

**使用 __NAMESPACE__ 动态创建名称**

```php

     
<?php
namespace MyProject;

function get($classname)
{
    $a = __NAMESPACE__ . '\\' . $classname;
    return new $a;
}
?>

    
```

关键字 `namespace` 可用来显式访问当前命名空间或子命名空间中的元素。它等价于类中的 `self` 操作符。

**namespace 操作符，命名空间中的代码**

```php

     
<?php
namespace MyProject;

use blah\blah as mine; // 参考 "使用命名空间：别名/导入"

blah\mine(); // 调用函数 MyProject\blah\mine()
namespace\blah\mine(); // 调用函数 MyProject\blah\mine()

namespace\func(); // 调用函数 MyProject\func()
namespace\sub\func(); // 调用函数 MyProject\sub\func()
namespace\cname::method(); // 调用 class MyProject\cname 的静态方法 "method"
$a = new namespace\sub\cname(); // class MyProject\sub\cname 的实例对象
$b = namespace\CONSTANT; // 设置 $b 的值为常量 MyProject\CONSTANT
?>

    
```

**namespace 操作符, 全局代码**

```php

     
<?php

namespace\func(); // 调用函数 func()
namespace\sub\func(); // 调用函数 sub\func()
namespace\cname::method(); // 调用 class cname 的静态方法 "method"
$a = new namespace\sub\cname(); // class sub\cname 的实例对象
$b = namespace\CONSTANT; // 设置 $b 的值为常量 CONSTANT
?>

    
```

## 使用命名空间：别名/导入

别名和导入

允许通过别名引用或导入外部的完全限定名称，是命名空间的一个重要特征。这有点类似于在类 unix 文件系统中可以创建对其它的文件或目录的符号连接。

PHP 可以为这些项目导入或设置别名： 常量、函数、类、接口、trait、枚举和命名空间。

别名是通过操作符 `use` 来实现的。下面是五种导入方式的例子：

**使用 use 操作符导入/使用别名**

```php

     
<?php
namespace foo;
use My\Full\Classname as Another;

// 下面的例子与 use My\Full\NSname as NSname 相同
use My\Full\NSname;

// 导入一个全局类
use ArrayObject;

// 导入函数
use function My\Full\functionName;

// 为函数设置别名
use function My\Full\functionName as func;

// 导入常量
use const My\Full\CONSTANT;

$obj = new namespace\Another; // 实例化 foo\Another 对象
$obj = new Another; // 实例化 My\Full\Classname　对象
NSname\subns\func(); // 调用函数 My\Full\NSname\subns\func
$a = new ArrayObject(array(1)); // 实例化 ArrayObject 对象
// 如果不使用 "use \ArrayObject" ，则实例化一个 foo\ArrayObject 对象
func(); // 调用函数 My\Full\functionName
echo CONSTANT; // 输出 My\Full\CONSTANT 的值
?>

    
```

注意对命名空间中的名称（包含命名空间分隔符的完全限定名称如 `Foo\Bar` 以及相对的不包含命名空间分隔符的全局名称如 `FooBar`）来说，前导的反斜杠是不必要的也不推荐的，因为导入的名称必须是完全限定的，不会根据当前的命名空间作相对解析。

为了简化操作，PHP 还支持在一行中使用多个 use 语句

**通过 use 操作符导入/使用别名，一行中包含多个 use 语句**

```php

     
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // 实例化 My\Full\Classname 对象
NSname\subns\func(); // 调用函数 My\Full\NSname\subns\func
?>

    
```

导入操作是在编译执行的，但动态的类名称、函数名称或常量名称则不是。

**导入和动态名称**

```php

     
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // 实例化一个 My\Full\Classname 对象
$a = 'Another';
$obj = new $a;      // 实际化一个 Another 对象
?>

    
```

另外，导入操作只影响非限定名称和限定名称。完全限定名称由于是确定的，故不受导入的影响。

**导入和完全限定名称**

```php

     
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // class My\Full\Classname 的实例对象
$obj = new \Another; // class Another 的实例对象
$obj = new Another\thing; // class My\Full\Classname\thing 的实例对象
$obj = new \Another\thing; // class Another\thing 的实例对象
?>

    
```

### 导入规则的范围

`use` 关键词必须在文件最外层范围 （全局作用域）或在命名空间声明内。 由于导入发生在编译时，而不是运行时，所以不能放入块作用域。 以下例子展示了不合规则的 `use` 关键词使用示例：

**不合规的导入规则**

```php


<?php
namespace Languages;

function toGreenlandic()
{
    use Languages\Danish;

    // ...
}
?>

     
```

> 导入规则独立于每个文件，意味着包含的文件 *不会*继承父文件的导入规则。

### `use` 声明编组

通过单个  语句，可以将来自同一个  的 类、函数、常量一起编组导入。

 
```php

     
<?php

use some\namespace\ClassA;
use some\namespace\ClassB;
use some\namespace\ClassC as C;

use function some\namespace\fn_a;
use function some\namespace\fn_b;
use function some\namespace\fn_c;

use const some\namespace\ConstA;
use const some\namespace\ConstB;
use const some\namespace\ConstC;

// 等同于以下编组的 use 声明
use some\namespace\{ClassA, ClassB, ClassC as C};
use function some\namespace\{fn_a, fn_b, fn_c};
use const some\namespace\{ConstA, ConstB, ConstC};

    
```

 

## 全局空间

全局空间

如果没有定义任何命名空间，所有的类与函数的定义都是在全局空间，与 PHP 引入命名空间概念前一样。在名称前加上前缀 `\` 表示该名称是全局空间中的名称，即使该名称位于其它的命名空间中时也是如此。

**使用全局空间说明**

```php

     
<?php
namespace A\B\C;

/* 这个函数是 A\B\C\fopen */
function fopen() { 
     /* ... */
     $f = \fopen(...); // 调用全局的fopen函数
     return $f;
}
?>
    
    
```

## 使用命名空间：回退到全局函数和常量的全局空间

回退到全局空间

在一个命名空间中，当 PHP 遇到一个非限定的类、函数或常量名称时，它使用不同的优先策略来解析该名称。类名称总是解析到当前命名空间中的名称。因此在访问系统内部或不包含在命名空间中的类名称时，必须使用完全限定名称，例如：

**在命名空间中访问全局类**

```php

     
<?php
namespace A\B\C;
class Exception extends \Exception {}

$a = new Exception('hi'); // $a 是类 A\B\C\Exception 的一个对象
$b = new \Exception('hi'); // $b 是类 Exception 的一个对象

$c = new ArrayObject; // 致命错误, 找不到 A\B\C\ArrayObject 类
?>
    
    
```

对于函数和常量来说，如果当前命名空间中不存在该函数或常量，PHP 会退而使用全局空间中的函数或常量。

**命名空间中后备的全局函数/常量**

```php

     
<?php
namespace A\B\C;

const E_ERROR = 45;
function strlen($str)
{
    return \strlen($str) - 1;
}

echo E_ERROR, "\n"; // 输出 "45"
echo INI_ALL, "\n"; // 输出 "7" - 使用全局常量 INI_ALL

echo strlen('hi'), "\n"; // 输出 "1"
if (is_array('hi')) { // 输出 "is not array"
    echo "is array\n";
} else {
    echo "is not array\n";
}
?>
    
    
```

## 名称解析规则

名称解析规则

在说明名称解析规则之前，我们先看一些重要的定义：

- **非限定名称（Unqualified name）** — 名称中不包含命名空间分隔符的标识符，例如 `Foo`
- **限定名称（Qualified name）** — 名称中含有命名空间分隔符的标识符，例如 `Foo\Bar`
- **完全限定名称（Fully qualified name）** — 名称中包含命名空间分隔符，并以命名空间分隔符开始的标识符，例如 `\Foo\Bar`。 `namespace\Foo` 也是一个完全限定名称。
- **相对名称（Relative name）** — 这是个以 `namespace` 开头的标识符， 例如 `namespace\Foo\Bar`。

名称解析遵循下列规则：

1. 完全限定名称总是会解析成没有前缀符号的命名空间名称。 `\A\B` 解析为 `A\B`。
2. 解析相对名称时，会用当前命名空间的名称替换掉 `namespace`。 如果名称出现在全局命名空间，会截掉 `namespace\` 前缀。 例如，在命名空间 `X\Y` 里的 `namespace\A` 会被解析成 `X\Y\A`。 在全局命名空间里，同样的名字却被解析成 `A`。
3. 对于限定名称，名字的第一段会根据当前 class/namespace 导入表进行翻译。 比如命名空间 `A\B\C` 被导入为 `C`， 名称 `C\D\E` 会被翻译成 `A\B\C\D\E`。
4. 对于限定名称，如果没有应用导入规则，就将当前命名空间添加为名称的前缀。 例如，位于命名空间 `A\B` 内的名称 `C\D\E` 会解析成 `A\B\C\D\E`。
5. 根据符号类型和对应的当前导入表，解析非限定名称。 这也就是说，根据 class/namespace 导入表翻译类名称； 根据函数导入表翻译函数名称； 根据常量导入表翻译常量名称。 比如，在 `use A\B\C;` 后，类似 `new C()` 这样的名称会解析为 `A\B\C()`。 类似的，`use function A\B\foo;` 后， `foo()` 的用法，解析名称为 `A\B\foo`。
6. 如果没有应用导入规则，对于类似 class 符号的非限定名称，会添加当前命名空间作为前缀。 比如命名空间 `A\B` 内的 `new C()` 会把名称解析为 `A\B\C`。
7. 如果没有应用导入规则，非限定名称指向函数或常量，且代码位于全局命名空间之外，则会在运行时解析名称。 假设代码位于命名空间 `A\B` 中， 下面演示了调用函数 `foo()` 是如何解析的： 1. 在当前命名空间中查找函数： `A\B\foo()`。 2. 它会尝试找到并调用 *全局* 的函数 `foo()`。

**名称解析示例**

```php


<?php
namespace A;
use B\D, C\E as F;

// 函数调用

foo();      // 首先尝试调用定义在命名空间"A"中的函数foo()
            // 再尝试调用全局函数 "foo"

\foo();     // 调用全局空间函数 "foo" 

my\foo();   // 调用定义在命名空间"A\my"中函数 "foo"

F();        // 首先尝试调用定义在命名空间"A"中的函数 "F"
            // 再尝试调用全局函数 "F"

// 类引用

new B();    // 创建命名空间 "A" 中定义的类 "B" 的一个对象
            // 如果未找到，则尝试自动装载类 "A\B"

new D();    // 使用导入规则，创建命名空间 "B" 中定义的类 "D" 的一个对象
            // 如果未找到，则尝试自动装载类 "B\D"

new F();    // 使用导入规则，创建命名空间 "C" 中定义的类 "E" 的一个对象
            // 如果未找到，则尝试自动装载类 "C\E"

new \B();   // 创建定义在全局空间中的类 "B" 的一个对象
            // 如果未发现，则尝试自动装载类 "B"

new \D();   // 创建定义在全局空间中的类 "D" 的一个对象
            // 如果未发现，则尝试自动装载类 "D"

new \F();   // 创建定义在全局空间中的类 "F" 的一个对象
            // 如果未发现，则尝试自动装载类 "F"

// 调用另一个命名空间中的静态方法或命名空间函数

B\foo();    // 调用命名空间 "A\B" 中函数 "foo"

B::foo();   // 调用命名空间 "A" 中定义的类 "B" 的 "foo" 方法
            // 如果未找到类 "A\B" ，则尝试自动装载类 "A\B"

D::foo();   // 使用导入规则，调用命名空间 "B" 中定义的类 "D" 的 "foo" 方法
            // 如果类 "B\D" 未找到，则尝试自动装载类 "B\D"

\B\foo();   // 调用命名空间 "B" 中的函数 "foo"

\B::foo();  // 调用全局空间中的类 "B" 的 "foo" 方法
            // 如果类 "B" 未找到，则尝试自动装载类 "B"

// 当前命名空间中的静态方法或函数

A\B::foo();   // 调用命名空间 "A\A" 中定义的类 "B" 的 "foo" 方法
              // 如果类 "A\A\B" 未找到，则尝试自动装载类 "A\A\B"

\A\B::foo();  // 调用命名空间 "A\B" 中定义的类 "B" 的 "foo" 方法
              // 如果类 "A\B" 未找到，则尝试自动装载类 "A\B"
?>

   
```

## FAQ：命名空间必知必会

FAQ

本文分两节：常见问题、有助于完全理解的实现详情。

首先，常见问题。

1. 如果我不用命名空间，是否需要关心它？
2. 我如何在命名空间内使用一个全局/内置的类？
3. 如何在命名空间内访问它自己的类、函数、常量？
4. 像 `\my\name` 和 `\name` 这样的名称是如何解析的？
5. 像 `my\name` 这样的名称是如何解析的？
6. 像 `name` 这样的非限定类名是如何解析的？
7. 像 `name` 这样的非限定常量和函数名是如何解析的？

为了帮助理解，我们提供了一些命名空间实现细节。

1. 在同一个文件中，导入名称不能和定义的类名发生冲突。
2. 不允许嵌套 namespace。
3. 动态命名空间名称（引号标识）应该转义反斜线。
4. 引用一个未定义的、带反斜线的常量，会导致 fatal 错误并退出
5. 不能重载特殊常量： `null`, `true` or `false`

### 如果我不用命名空间，是否需要关心它？

不需要。命名空间不影响现存的代码，也不影响即将要写下的不含命名空间的代码。 想要的话可以这样写：

**在命名空间之外访问全局类**

```php


<?php
$a = new \stdClass;

     
```

以上等同于：

**在命名空间之外访问全局类**

```php


<?php
$a = new stdClass;

     
```

### 我如何在命名空间内使用一个全局/内置的类？

**在命名空间内访问内置的类**

```php


<?php
namespace foo;
$a = new \stdClass;

function test(\ArrayObject $parameter_type_example = null) {}

$a = \DirectoryIterator::CURRENT_AS_FILEINFO;

// 扩展内置或全局的 class
class MyException extends \Exception {}
?>

     
```

### 如何在命名空间内访问它自己的类、函数、常量？

**在命名空间中访问内置的类、函数、常量**

```php


<?php
namespace foo;

class MyClass {}

// 以当前命名空间中的 class 作为参数的类型
function test(MyClass $parameter_type_example = null) {}
// 以当前命名空间中的 class 作为参数的类型的另一种方式
function test(\foo\MyClass $parameter_type_example = null) {}

// 在当前命名空间中扩展一个类
class Extended extends MyClass {}

// 访问全局函数
$a = \globalfunc();

// 访问全局常量
$b = \INI_ALL;
?>

     
```

### 像 `\my\name` 和 `\name` 这样的名称是如何解析的？

以 `\` 开头的名称总是会解析成原样， 因此 `\my\name` 实际上是 `my\name`， 而 `\Exception` 是 `Exception`。

**完全限定名称**

```php


<?php
namespace foo;
$a = new \my\name(); // class "my\name" 的实例
echo \strlen('hi'); // 调用函数 "strlen"
$a = \INI_ALL; // $a 的值设置成常量 "INI_ALL"
?>

     
```

### 像 `my\name` 这样的名称是如何解析的？

像 `my\name` 这样包含反斜线的名称，但不以反斜线开头的名称， 能够以两种不同的方式解析。

如果有个导入语句，将其他名字设置别名为 `my`， 则导入别名会应用到 `my\name` 的 `my` 部分。

如果没有导入，就会追加当前的命名空间名称为 `my\name` 的前缀。

**限定名称**

```php


<?php
namespace foo;
use blah\blah as foo;

$a = new my\name(); // class "foo\my\name" 的实例
foo\bar::name(); // 调用 class "blah\blah\bar" 的静态方法 "name"
my\bar(); // 调用函数 "foo\my\bar"
$a = my\BAR; // 设置 $a 的值为 "foo\my\BAR"
?>

     
```

### 像 `name` 这样的非限定名称是如何解析的？

像 `name` 这样不包含反斜线的名称， 能够以两种不同的方式解析。

如果有导入语句，设置别名为 `name`，就会应用导入别名。

如果没有，就会把当前命名空间添加到 `name` 的前缀。

**非限定类名**

```php


<?php
namespace foo;
use blah\blah as foo;

$a = new name(); // class "foo\name" 的实例
foo::name(); // 调用 class "blah\blah" 的静态方法 "name"
?>

     
```

### 像 `name` 这样的非限定常量和函数名是如何解析的？

像 `name` 这样不包含反斜线的常量和函数名，能以两种不同的方式解析。

首先，当前命名空间会添加到 `name` 的前缀。

然后，如果当前命名空间不存在函数和常量 `name`， 而全局存在，就会使用全局的函数和常量 `name`。

**非限定函数和常量名**

```php


<?php
namespace foo;
use blah\blah as foo;

const FOO = 1;

function my() {}
function foo() {}
function sort(&$a)
{
    sort($a);
    $a = array_flip($a);
    return $a;
}

my(); // 调用 "foo\my"
$a = strlen('hi'); // 由于 "foo\strlen" 不存在，所以调用全局的 "strlen"
$arr = array(1,3,2);
$b = sort($arr); // 调用函数 "foo\sort"
$c = foo(); // 未导入，调用函数 "foo\foo"

$a = FOO; // 未导入，设置 $a 为常量 "foo\FOO" 的值
$b = INI_ALL; // 设置 $b 为全局常量 "INI_ALL" 的值
?>

     
```

### 在同一个文件中，导入名称不能和定义的类名发生冲突

允许以下脚本中的组合： file1.php ```php <?php namespace my\stuff; class MyClass {} ?> ``` another.php ```php <?php namespace another; class thing {} ?> ``` file2.php ```php <?php namespace my\stuff; include 'file1.php'; include 'another.php'; use another\thing as MyClass; $a = new MyClass; // class "thing" 的实例来自于命名空间 another ?> ```

尽管在 `my\stuff` 命名空间中存在 `MyClass`， 因为类定义在了独立的文件中，所以不会发生名称冲突。 不过，接下来的例子中，因为 MyClass 定义在了 use 语句的同一个文件中， 所以发生了名称冲突，导致了 fatal 错误。 ```php <?php namespace my\stuff; use another\thing as MyClass; class MyClass {} // fatal error: MyClass conflicts with import statement $a = new MyClass; ?> ```

### 不允许嵌套 namespace

PHP 不允许嵌套 namespace ```php <?php namespace my\stuff { namespace nested { class foo {} } } ?> ``` 实际上，它看上去像是这样： ```php <?php namespace my\stuff\nested { class foo {} } ?> ```

### 动态命名空间名称（引号标识）应该转义反斜线

重要的是，字符串中反斜线是一个转义字符，因此在字符串中使用时，必须要写两遍。 否则就会在无意中造成一些后果：

**在双引号字符串中使用命名空间的危险性**

```php

      
<?php
$a = new "dangerous\name"; // 在双引号字符串中，\n 是换行符！
$obj = new $a;

$a = new 'not\at\all\dangerous'; // 这里没有问题
$obj = new $a;
?>
      
     
```

在单引号字符串中，使用反斜线是安全的。 但在最佳实践中，我们仍然推荐为所有字符串统一转义反斜线。

### 引用一个未定义的、带反斜线的常量，会导致 fatal 错误并退出

像 `FOO` 这样的非限定名称常量，如果使用的时候还没定义， 会产生一个 notice。PHP 会假设该常量的值是 `FOO`。 如果没有找到包含反斜线的常量，无论是完全或者不完全限定的名称，都会产生 fatal 错误。

**未定义的常量**

```php

      
<?php
namespace bar;
$a = FOO; // 产生 notice - undefined constants "FOO" assumed "FOO";
$a = \FOO; // fatal error, undefined namespace constant FOO
$a = Bar\FOO; // fatal error, undefined namespace constant bar\Bar\FOO
$a = \Bar\FOO; // fatal error, undefined namespace constant Bar\FOO
?>
      
     
```

### 不能重载特殊常量：`null`, `true` or `false`

在命名空间内定义特殊的内置常量，会导致 fatal 错误

**未定义的常量**

```php

      
<?php
namespace bar;
const NULL = 0; // fatal error;
const true = 'stupid'; // 也是 fatal error;
// etc.
?>
      
     
```
