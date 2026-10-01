---
id: "zh-php-function-function-echo"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["xss"],"cwe":["CWE-79"]}
name: "echo"
title: "输出一个或多个字符串"
signature: "void echo(string $expressions)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.echo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出一个或多个字符串

## 说明

```php
void echo(string $expressions)
```

输出一个或多个表达式，没有额外的换行符或者空格。

`echo` 不是函数，而是语言结构。它的参数是表达式列表，跟在 `echo` 关键字后面，用逗号分隔，不用括号分隔。与其它的返回结构不同，`echo` 没有返回值，因为不能在表达式的上下文中使用。

`echo` 也有快捷语法，可以在开始标记后直接跟等号。即使禁用了 short_open_tag 配置，此语法也可用。 ```php I have <?=$foo?> foo. ```

跟 `print()` 的主要区别是 `echo` 接受多个参数且没有返回值。

## 参数

- **`$expressions`** — 要输出的一个或多个字符串表达式，用逗号分隔。即使启用 `strict_types` 指令，非字符串值也会强制转换为字符串。

## 返回值

没有返回值。

## 示例

**`echo` 示例**

```php


<?php
echo "echo does not require parentheses.";

// 字符串可以作为多个参数单独传递，
// 也可以连接在一起作为单个参数传递
echo 'This ', 'string ', 'was ', 'made ', 'with multiple parameters.', "\n";
echo 'This ' . 'string ' . 'was ' . 'made ' . 'with concatenation.' . "\n";

// 不会有新行或者空格；下面将会在一行中输出“helloworld”
echo "hello";
echo "world";

// 跟上面一样
echo "hello", "world";

echo "This string spans
multiple lines. The newlines will be
output as well";

echo "This string spans\nmultiple lines. The newlines will be\noutput as well.";

// 参数是可以产生字符串的任意表达式
$foo = "example";
echo "foo is $foo"; // foo is example

$fruits = ["lemon", "orange", "banana"];
echo implode(" and ", $fruits); // lemon and orange and banana

// 即使使用 declare(strict_types=1)，非字符串表达式也会强制转换字符串
echo 6 * 7; // 42

// 但是，下面的示例又正常：
($some_var) ? print 'true' : print 'false'; // print 也是语言结构，
                                            // 但它是有效的表达式，返回 1，
                                            // 所以可以在此上下文中使用。

echo $some_var ? 'true': 'false'; // 首先运行表达式然后传递它到 echo
?>

    
```

**`echo` 不是表达式**

```php


<?php

// 因为 echo 的行为与表达式不同，所以下面的代码无效。
($some_var) ? echo 'true' : echo 'false';
?>

    
```

## 注释

> 因为是语言构造器而不是函数，不能被 可变函数 或者 命名参数 调用。

> 使用括号
>
> 使用括号括住 `echo` 后的单个参数并不会引发语法错误，而且还会产生看起来像普通函数调用的语法。但是，这可能会产生误导，因为括号实际上是输出表达式的一部分，而不是 `echo` 语法本身的一部分。
>
> **使用括号**
>
> ```php
>
>      
> <?php
> echo "hello", PHP_EOL;
> // 输出“hello”
>
> echo("hello"), PHP_EOL;
> // 也会输出“hello”，因为 ("hello") 是有效表达式
>
> echo(1 + 2) * 3, PHP_EOL;
> // 输出“9”；首先对括号内的 1+2 求值，然后 echo 语句将 
> // 整个表达式 3*3 视为一个参数
>
> echo "hello", " world", PHP_EOL;
> // 输出“hello world”
>
> echo("hello"), (" world"), PHP_EOL;
> // 输出“hello world”；括号是每个表达式的一部分
> ?>
>
>     
> ```
>
> **无效表达式**
>
> ```php
>
>      
> <?php
> echo("hello", " world"), PHP_EOL;
> // 抛出解析错误，因为 ("hello", " world") 不是有效的表达式
> ?>
>
>     
> ```

> 将多个参数传递给 `echo` 可以避免 PHP 中连接运算符中优先级引起的复杂性。例如，连接运算符的优先级高于三元运算符，在 PHP 8.0.0 之前与加减法具有相同的优先级。
>
> ```php
>
>     
> <?php
> // 下面的表达式 'Hello ' . isset($name) 将首先求值，
> // 因为始终为 true，所以 echo 的参数始终是 $name
> echo 'Hello ' . isset($name) ? $name : 'John Doe' . '!';
>
> // 预期的行为需要额外的括号
> echo 'Hello ' . (isset($name) ? $name : 'John Doe') . '!';
>
> // 在 PHP 8.0.0 之前，下面会输出“2”，而不是“Sum: 3”
> echo 'Sum: ' . 1 + 2;
>
> // 再次添加括号以确保期望的求值顺序
> echo 'Sum: ' . (1 + 2);
>
>    
> ```
>
> 如果传递多个参数，则不需要括号来强制执行优先级，因为每个表达式都是独立的：
>
> ```php
>
>
> <?php
> echo "Hello ", isset($name) ? $name : "John Doe", "!";
>
> echo "Sum: ", 1 + 2;
>
>    
> ```

## 参见

`print()` `printf()` `flush()` 指定文本字符串的方式
