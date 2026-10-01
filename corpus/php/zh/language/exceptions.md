---
id: "zh-php-syntax-language-exceptions"
language: "php"
lang: "zh"
category: "syntax"
name: "language.exceptions"
title: "异常"
module: "language"
source_url: "https://www.php.net/manual/zh/language.exceptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 异常

PHP 有一个和其他语言相似的异常模型。在 PHP 里可以  并捕获（）异常。为了捕获潜在的异常，代码会包含在  块里。每个  都必须至少有一个相应的  或  块。

如果抛出异常的函数作用域内没有  块，异常会沿调用栈“向上冒泡”，直到找到匹配的  块。沿途会执行所有遇到的  块。在没有设置全局异常处理程序时，如果调用栈向上都没有遇到匹配的 ，程序会抛出 fatal 错误并终止。

抛出的对象必须是  Throwable。尝试抛出其他对象会导致 PHP Fatal 错误。

PHP 8.0.0 起， 关键词现在开始是表达式，可用于任何表达式上下文。在此之前，它是语句，必须独占一行。

## `catch`

 定义了处理抛出异常的方式。  块定义了它能处理的异常/错误的类型，并可以选择将异常赋值到变量中。 （在 PHP 8.0.0 之前的版本中必须要赋值到变量） 如果遇到抛出对象的类型匹配了首个  块的异常或错误，将会处理该对象。

可用多个  捕获不同的异常类。 正常情况下（ 代码块里没有抛出异常）会在最后一个定义的  后面继续执行。  代码块里也可以  或者重新抛出异常。 不抛出的话，会在触发的  后面继续执行。

当 PHP 抛出一个异常时，将不会执行后续的代码语句，并会尝试查找首个匹配的  代码块。 如果没有用 `set_exception_handler()` 设置异常处理函数， PHP 会在异常未被捕获时产生 Fatal 级错误，提示 "`Uncaught Exception ...`" 消息。

从 PHP 7.1.0 起  可以用竖线符（`|`） 指定多个异常。 如果在不同的类层次结构中，不同异常的异常需要用同样的方式处理，就特别适用这种方式。

从 PHP 8.0.0 起，捕获的异常不再强制要求指定变量名。  代码块会在未指定时继续执行，只是无法访问到抛出的对象。

## `finally`

 代码块可以放在  之后，或者直接代替它。 无论是否抛出了异常，在  和  之后、在执行后续代码之前， 放在  里的代码总是会执行。

值得注意的是  和  语句之间存在相互影响。 如果在  或  里遇到 ，仍然会执行  里的代码。 而且，遇到  语句时，会先执行  再返回结果。 此外，如果  里也包含了  语句，将返回  里的值。

另一个值得注意的交互是发生在  块内抛出的异常与  块内抛出的异常之间。如果两个块都抛出异常，则会传播来自  块的异常，而来自  块的异常将作为其前一个异常。

## 全局异常处理程序

当允许异常冒泡到全局作用域时，它可以被全局异常处理器捕获到。 `set_exception_handler()` 可以设置一个函数，在没有调用其他块时代替 。 在本质上，实现的效果等同于整个程序被 - 包裹起来， 而该函数就是 。

## 注释

> PHP 内部函数主要使用 错误报告， 只有一些现代 面向对象 的扩展使用异常。 不过，错误很容易用 ErrorException 转化成异常。 然而，这个技术方案仅适用非 Fatal 级的错误。
>
> **将错误报告转成异常**
>
> ```php
>
>
> <?php
> function exceptions_error_handler($severity, $message, $filename, $lineno) {
>     throw new ErrorException($message, 0, $severity, $filename, $lineno);
> }
>
> set_error_handler('exceptions_error_handler');
> ?>
>
>      
> ```

> PHP 标准库（SPL） 提供了大量的 标准内置异常。

## 示例

**抛出一个异常**

```php


<?php
function inverse($x) {
    if (!$x) {
        throw new Exception('Division by zero.');
    }
    return 1/$x;
}

try {
    echo inverse(5) . "\n";
    echo inverse(0) . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

// 继续执行
echo "Hello World\n";
?>

    
```

以上示例会输出：

```text


0.2
Caught exception: Division by zero.
Hello World

    
```

**带  块的异常处理**

```php


<?php
function inverse($x) {
    if (!$x) {
        throw new Exception('Division by zero.');
    }
    return 1/$x;
}

try {
    echo inverse(5) . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
} finally {
    echo "First finally.\n";
}

try {
    echo inverse(0) . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
} finally {
    echo "Second finally.\n";
}

// 继续执行
echo "Hello World\n";
?>

    
```

以上示例会输出：

```text


0.2
First finally.
Caught exception: Division by zero.
Second finally.
Hello World

    
```

** 和  相互之间的影响**

```php


<?php

function test() {
    try {
        throw new Exception('foo');
    } catch (Exception $e) {
        return 'catch';
    } finally {
        return 'finally';
    }
}

echo test();
?>

    
```

以上示例会输出：

```text


finally

    
```

**异常嵌套**

```php


<?php

class MyException extends Exception { }

class Test {
    public function testing() {
        try {
            try {
                throw new MyException('foo!');
            } catch (MyException $e) {
                // 重新 throw
                throw $e;
            }
        } catch (Exception $e) {
            var_dump($e->getMessage());
        }
    }
}

$foo = new Test;
$foo->testing();

?>

    
```

以上示例会输出：

```text


string(4) "foo!"

    
```

**多个异常的捕获处理**

```php


<?php

class MyException extends Exception { }

class MyOtherException extends Exception { }

class Test {
    public function testing() {
        try {
            throw new MyException();
        } catch (MyException | MyOtherException $e) {
            var_dump(get_class($e));
        }
    }
}

$foo = new Test;
$foo->testing();

?>

    
```

以上示例会输出：

```text


string(11) "MyException"

    
```

**忽略捕获的变量**

仅仅在 PHP 8.0.0 及以上版本有效

```php


<?php

function test() {
    throw new SpecificException('Oopsie');
}

try {
    test();
} catch (SpecificException) {
    print "A SpecificException was thrown, but we don't care about the details.";
}
?>

    
```

以上示例会输出：

```text


A SpecificException was thrown, but we don't care about the details.

    
```

**以表达式的形式抛出**

仅仅在 PHP 8.0.0 及以上版本有效

```php


<?php

class SpecificException extends Exception {}

function test() {
    do_something_risky() or throw new Exception('It did not work');
}

function do_something_risky() {
    return false; // 模拟失败
}

try {
    test();
} catch (Exception $e) {
    print $e->getMessage();
}
?>

    
```

以上示例会输出：

```text


It did not work

    
```

**try 和 finally 中的异常**

```php


<?php

try {
    try {
        throw new Exception(message: 'Third', previous: new Exception('Fourth'));
    } finally {
        throw new Exception(message: 'First', previous: new Exception('Second'));
    }
} catch (Exception $e) {
    var_dump(
        $e->getMessage(),
        $e->getPrevious()->getMessage(),
        $e->getPrevious()->getPrevious()->getMessage(),
        $e->getPrevious()->getPrevious()->getPrevious()->getMessage(),
    );
}

    
```

以上示例会输出：

```text


string(5) "First"
string(6) "Second"
string(5) "Third"
string(6) "Fourth"

    
```

## 扩展（extend）异常处理类

用户可以用自定义的异常处理类来扩展 PHP 内置的异常处理类。以下的代码说明了在内置的异常处理类中，哪些属性和方法在子类中是可访问和可继承的。

**内置的异常处理类**

```php


<?php
class Exception implements Throwable
{
    protected $message = 'Unknown exception';   // 异常信息
    private   $string;                          // __toString 的缓存
    protected $code = 0;                        // 用户自定义异常错误码
    protected $file;                            // 发生异常的源文件名
    protected $line;                            // 发生异常的源代码行号
    private   $trace;                           // backtrace
    private   $previous;                        // 如果是嵌套异常，则是之前的 exception

    public function __construct($message = '', $code = 0, ?Throwable $previous = null);

    final private function __clone();           // 禁止克隆异常。

    final public  function getMessage();        // 异常信息
    final public  function getCode();           // 异常错误码
    final public  function getFile();           // 发生异常的源文件名
    final public  function getLine();           // 发生异常的源代码行号
    final public  function getTrace();          // backtrace() 数组
    final public  function getPrevious();       // 之前的 exception
    final public  function getTraceAsString();  // 已格成化成字符串的 getTrace() 信息

    // Overrideable
    public function __toString();               // 可输出的格式化后的字符串
}
?>

    
```

如果使用自定义的类来扩展内置异常处理类，并且要重新定义构造函数的话，建议同时调用 parent::__construct() 来确保所有的变量已赋值。当对象要输出字符串的时候，可以重载 __toString() 并自定义输出的样式。

> 不能 复制 Exception 对象。尝试对 clone Exception 会导致 fatal `E_ERROR` 错误。

**扩展 PHP 内置的异常处理类**

```php


<?php
/**
 * 自定义一个异常处理类
 */
class MyException extends Exception
{
    // 重定义构造器使 message 变为必须被指定的属性
    public function __construct($message, $code = 0, ?Throwable $previous = null) {
        // 这里写用户的代码

        // 确保所有变量都被正确赋值
        parent::__construct($message, $code, $previous);
    }

    // 自定义字符串输出的格式
    public function __toString() {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
    }

    public function customFunction() {
        echo "A custom function for this type of exception\n";
    }
}


/**
 * 创建一个类，测试该 exception 类
 */
class TestException
{
    public $var;

    const THROW_NONE    = 0;
    const THROW_CUSTOM  = 1;
    const THROW_DEFAULT = 2;

    function __construct($avalue = self::THROW_NONE) {

        switch ($avalue) {
            case self::THROW_CUSTOM:
                // 抛出自定义异常
                throw new MyException('1 is an invalid parameter', 5);
                break;

            case self::THROW_DEFAULT:
                // 抛出默认的异常
                throw new Exception('2 is not allowed as a parameter', 6);
                break;

            default: 
                // 没有异常的情况下，创建一个对象
                $this->var = $avalue;
                break;
        }
    }
}


// 例子 1
try {
    $o = new TestException(TestException::THROW_CUSTOM);
} catch (MyException $e) {      // 捕获异常
    echo "Caught my exception\n", $e;
    $e->customFunction();
} catch (Exception $e) {        // 被忽略
    echo "Caught Default Exception\n", $e;
}

// 继续执行后续代码
var_dump($o); // Null
echo "\n\n";


// 例子 2
try {
    $o = new TestException(TestException::THROW_DEFAULT);
} catch (MyException $e) {      //  不能匹配异常的种类，被忽略
    echo "Caught my exception\n", $e;
    $e->customFunction();
} catch (Exception $e) {        // 捕获异常
    echo "Caught Default Exception\n", $e;
}

// 执行后续代码
var_dump($o); // Null
echo "\n\n";


// 例子 3
try {
    $o = new TestException(TestException::THROW_CUSTOM);
} catch (Exception $e) {        // 捕获异常
    echo "Default Exception caught\n", $e;
}

// 执行后续代码
var_dump($o); // Null
echo "\n\n";


// 例子 4
try {
    $o = new TestException();
} catch (Exception $e) {        // 没有异常，被忽略
    echo "Default Exception caught\n", $e;
}

// 执行后续代码
var_dump($o); // TestException
echo "\n\n";
?>

    
```
